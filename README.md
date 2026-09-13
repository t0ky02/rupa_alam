# Rupa Alam — website + shop app

A mobile-first website that also installs as a phone app (PWA).

## What it includes
- Home, story, sanctuary, shop, product pages
- Cart stored on the phone
- Checkout via WhatsApp (`628111700773`) — personal, no payment gateway yet
- Add to Home Screen on iPhone and Android

## Edit products and prices
Open `assets/js/app.js` and change the `PRODUCTS` list (`price` is in Rupiah).

## Run locally
```bash
cd rupa-alam-web
python3 -m http.server 8080
```
Open http://localhost:8080

PWA install and service worker need http(s), not `file://`.

## Put it on rupaalam.com
Upload the whole `rupa-alam-web` folder to your host (Netlify, Vercel, or existing hosting).

Netlify / Vercel: drag the folder, or connect Git.

On iPhone Safari: Share → Add to Home Screen.  
On Android Chrome: Install app.

## Later
- Midtrans / QRIS for card and e-wallet
- Live stock
- Bahasa toggle
- Replace generated photos with real bottles and labels
