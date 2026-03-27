# Where to Watch

A simple movie streaming availability finder. Search any movie and see which platforms carry it in 30+ countries.

Built with the TMDB API (free) and powered by JustWatch data.

## Deploy to Vercel (easiest)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Push this folder to a new GitHub repository
3. In Vercel, click **"Add New Project"** → Import the repo
4. Framework: **Other** (no framework needed)
5. Click **Deploy** — done!

Your site will be live at `https://your-project.vercel.app`

## Deploy to Netlify

1. Go to [netlify.com](https://www.netlify.com)
2. Drag & drop this entire folder onto the deploy area
3. Done — instant URL

## Run locally

Just open `index.html` in your browser. No build step, no npm, no dependencies.

## API Key

The app uses a free TMDB API read-access token embedded in the HTML.  
If you need your own: sign up at [themoviedb.org](https://www.themoviedb.org/settings/api) (free, no credit card).

## Tech

- Vanilla HTML/CSS/JS — no frameworks, no build tools
- TMDB API v3 for movie search + watch providers
- Streaming data powered by JustWatch
