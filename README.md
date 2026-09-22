# System & Solutions — Website

A modern React + Vite + Tailwind site for **System & Solutions** (custom PCs, repair,
upgrades & IT support). Includes a full "Build Your PC" shopping experience with a cart,
checkout, and Razorpay payment integration.

## What's included

- **Home, Services, About, Contact** — informational pages built from your banner branding
- **Build Your PC** — the main attraction: 8 component categories (CPU, Motherboard, GPU,
  RAM, Storage, PSU, Case, Cooling), each with real specs, descriptions, and "best for"
  guidance. Users add parts to a running cart with live totals (incl. 18% GST).
- **Checkout + Razorpay** — collects delivery details and processes payment via Razorpay
  (supports UPI, cards, netbanking — ideal for India/INR)
- **Login / Signup** — a working account flow (see "About the login system" below)
- Fully responsive, keyboard-accessible, and respects reduced-motion preferences

## Getting started (local)

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`).

## 1. Set up payments (Razorpay)

1. Create a free account at [razorpay.com](https://razorpay.com) (India-based, so this is
   the easiest option for INR payments — supports UPI, cards, netbanking, wallets).
2. Go to **Settings → API Keys** in your Razorpay dashboard and generate a **Key ID**.
3. Copy `.env.example` to `.env` and paste your key:
   ```
   VITE_RAZORPAY_KEY_ID=rzp_live_xxxxxxxxxxxx
   ```
4. Without this key, checkout runs in **demo mode** (no real payment, just a test order) so
   you can try the flow immediately.

**Important — before going live:** right now the payment amount is set from the browser,
which is fine for testing but not secure for real transactions (someone could tamper with
the amount in dev tools). For production, add a small backend (a single serverless
function works great — e.g. a Vercel/Netlify function) that calls Razorpay's **Orders API**
to create the order server-side, and verify the payment signature after checkout. Happy to
build this out as a next step — it's a small, well-defined addition.

## 2. About product pricing — why it's not "live" from Amazon

You asked about pulling real-time prices from Amazon or other e-commerce sites. A few
honest notes on why that's not the right approach:

- **Scraping Amazon (or similar sites) for prices violates their Terms of Service** and
  can get your site blocked or legally flagged — not a foundation to build a business on.
- **Amazon's official Product Advertising API** exists, but it requires you to be an
  active Amazon Associate generating qualifying sales, and it's designed for *affiliate*
  listings (sending customers to Amazon to buy) — not for reselling parts as your own
  custom-PC packages.

**What's built instead:** an editable price catalog at `src/data/components.js`. Every
component's price, brand, specs and description live in one clearly-organized file — update
a number, save, redeploy (takes under a minute). This keeps you in full control of margins
and means your prices always reflect what you actually charge.

**If you want closer-to-real-time pricing later**, the legitimate paths are:
- A **distributor/wholesaler API** (e.g. Ingram Micro, Redington, Rashi Peripherals) if you
  have a reseller account with them — many offer live inventory/price feeds.
- A simple **admin panel** (password-protected page) so your staff can update prices
  without touching code — can be built next if useful.

## 3. About the login system

The Login/Signup flow works end-to-end right now, but accounts are stored in the visitor's
own browser (`localStorage`) — there's no shared database yet. This is fine for testing the
UI, but two people won't see each other's accounts, and clearing browser data clears the
account.

**For a real launch**, swap in a proper backend auth provider — **Firebase Authentication**
is the fastest to wire up and free for your likely traffic volume. The code is structured
so this is a contained change (`src/context/AuthContext.jsx`) — everything else in the app
just calls `login()`, `signup()`, `logout()` and won't need to change.

## 4. Contact form

The contact form currently shows a success message but doesn't actually send an email yet.
Easiest fix: sign up at [formspree.io](https://formspree.io) (free tier available), and
point the form's submit at your Formspree endpoint — a 10-minute change in
`src/pages/Contact.jsx`.

## Deploying the site

The easiest options for a React/Vite site:

**Vercel (recommended)**
1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com), "New Project," import the repo.
3. Add your `VITE_RAZORPAY_KEY_ID` under **Environment Variables**.
4. Deploy — Vercel auto-detects Vite and handles the rest.

**Netlify** works the same way — import the repo, set the build command to
`npm run build`, publish directory `dist`, and add the same environment variable.

Either gives you a free `yourproject.vercel.app` URL immediately, and you can point your
own domain (e.g. `systemandsolutions.in`) at it afterward from the same dashboard.

## Project structure

```
src/
  components/     Navbar, Footer, cart & product-card UI
  context/        CartContext (cart state), AuthContext (login state)
  data/           components.js — YOUR EDITABLE PRODUCT CATALOG
  pages/          One file per page/route
```

## What to test before going live

- [ ] Add Razorpay key and place a real ₹1 test transaction
- [ ] Update `src/data/components.js` with your actual current prices
- [ ] Replace placeholder contact email/socials if needed
- [ ] Decide on Firebase Auth (or similar) before relying on real customer accounts
- [ ] Connect the contact form to a real email endpoint

## Next steps to build together

- Secure server-side payment verification (Razorpay Orders API)
- Real user accounts (Firebase Auth) with saved builds
- Admin panel for editing prices/stock without touching code
- Order emails/SMS notifications to you and the customer
- Product photos for each component (swap in your own images)
