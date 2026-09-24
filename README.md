# NomadX Landing Page

Next.js App Router landing page for NomadX travel discovery, with direct entry points for flights, stays and travel insurance.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before launch

- Replace `FLIGHT_AFFILIATE_URL`, `HOTEL_AFFILIATE_URL`, and `INSURANCE_AFFILIATE_URL` in `app/page.tsx` with approved partner tracking URLs.
- Configure GA4/GTM through the approved production setup. The page pushes `nomadx_engagement` events to `window.dataLayer` and sends corresponding events with `gtag` when available.
- Destination imagery is loaded from Unsplash; use approved, optimized assets for production if needed.
- Open `nomadx-visual-report.html` for the visual report and implementation notes.
