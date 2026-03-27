exports.handler = async function handler(event) {
  try {
    const token = process.env.TMDB_TOKEN;
    if (!token) {
      return json(500, { error: "TMDB_TOKEN is not configured" });
    }

    const id = (event.queryStringParameters?.id || "").trim();

    if (!id) {
      return json(400, { error: "Missing id" });
    }

    const url = new URL(`https://api.themoviedb.org/3/movie/${encodeURIComponent(id)}/watch/providers`);

    const headers = tmdbHeadersOrApiKey(token, url);

    const res = await fetch(url, {
      headers,
    });

    const bodyText = await res.text();
    if (!res.ok) {
      return json(res.status, { error: `TMDB ${res.status}`, details: safeJson(bodyText) });
    }

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=300",
      },
      body: bodyText,
    };
  } catch (e) {
    return json(500, { error: e?.message || "Unknown error" });
  }
};

function tmdbHeadersOrApiKey(token, url) {
  const t = String(token || "").trim();
  if (t.includes(".")) {
    return {
      Authorization: `Bearer ${t}`,
      "Content-Type": "application/json",
    };
  }

  url.searchParams.set("api_key", t);
  return {
    "Content-Type": "application/json",
  };
}

function json(statusCode, data) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
}

function safeJson(text) {
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}
