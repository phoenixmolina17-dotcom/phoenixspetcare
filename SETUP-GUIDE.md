# Phoenix's Neighborhood Pet Care

This folder contains the complete website source, hero artwork, downloadable
service flyer, printable business cards, rates, safety language, and booking
request form.

## The easiest option

The website is already published and owned by Monique:

https://phoenix-neighborhood-pet-care.moniquetmolina.chatgpt.site

Ask ChatGPT to update "Phoenix's Neighborhood Pet Care" whenever you want to
change wording, prices, services, phone number, service area, imagery, payment
links, or booking behavior.

## How the booking form works

The client completes the form and taps "Send booking request by text." The site
creates a prewritten text message to (304) 639-6219. The client reviews and
sends the message. This keeps booking free and ensures no appointment is
confirmed until Phoenix and his parent approve it.

## Important places to edit

- `app/page.tsx`: business text, phone number, services, rates, booking form,
  payment methods, policies, and page sections.
- `app/globals.css`: colors, typography, spacing, and mobile layout.
- `public/phoenix-hero-art.png`: hero illustration.
- `public/Phoenix-Pet-Care-Flyer.pdf`: downloadable flyer.
- `public/Phoenix-Pet-Care-Business-Cards.pdf`: printable card sheets.

## Running a private local copy

Install current Node.js, open a terminal in this folder, and run:

```bash
npm install
npm run dev
```

Follow the address printed in the terminal. This is optional; the published
website does not require Monique to run anything locally.

## Payments

The site currently displays Cash, sponsored Cash App, Venmo Teen, and Apple
Cash. Add direct payment URLs only after the accounts are activated. Payment
should be requested after a booking is approved.

Credit/debit card and Apple Pay acceptance should use a parent-owned payment
processor account. PayPal must also be adult-owned.

## Calendar

Create a Google Calendar named `Phoenix Pet Care`. Add only approved bookings:

- Yellow: requested
- Green: confirmed
- Blue: paid
- Red: canceled

Recommended event title:

`Service - Pet name - Braemar unit`

Add the price, client number, instructions, and payment status in the private
event description.
