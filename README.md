# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## YouTube Sync (Serverless)

This site uses a Netlify function to call the YouTube Data API v3 and return recent uploads.

### Steps
1. Create a `.env` file (copy from `.env.example`).
2. Add:
   - `YT_API_KEY=...` (from Google Cloud → APIs & Services → Credentials)
   - `YT_CHANNEL_ID=...` (the channel ID, not the @handle)
3. Local dev uses `netlify dev` to serve functions:
   ```bash
   npm run dev:nl

## Deploy (Netlify)

1) Install CLI (already in devDependencies): `npm run dev:nl` for local functions.
2) Log in: `npx netlify login`
3) Link or create a site: `npx netlify init`
4) Set env vars:

### In-page YouTube player
- Click any video card to open an in-page modal player.
- Close with backdrop click or `Esc`.
- Autoplay is enabled in the embed URL. Browsers may gate it if sound is blocked.

### Podcast: Episode Details
- Each episode now links to `/sermons/:eid` where `eid` is a base64url of the episode id.
- Detail page includes audio player, clean download filename, and share links (WhatsApp, X, Facebook).

## Give Page
- Route: `/give`
- Buttons are placeholders — replace `href="#"` with:
  - PayPal: `https://paypal.me/<handle>`
  - Stripe Checkout link (from Dashboard)
  - Planning Center, Tithe.ly, or your provider URL
- Bank/EFT details live in `src/pages/Give.jsx`.
