"use client";

import { FormEvent, useState } from "react";

const services = [
  { icon: "🐕", name: "Dog walk", detail: "20 minutes", price: "$10" },
  { icon: "🦮", name: "Extended walk", detail: "45–60 minutes", price: "$18" },
  { icon: "🏡", name: "Drop-in visit", detail: "20–30 minutes", price: "$12" },
  { icon: "🐈", name: "Cat care", detail: "Feed, play & litter", price: "$12" },
  { icon: "🛁", name: "Bath & dry", detail: "Based on pet size", price: "from $15" },
  { icon: "✂️", name: "Basic grooming", detail: "Brush or simple trim", price: "from $8" },
  { icon: "🐾", name: "Nail trim", detail: "Calm pets only", price: "$10" },
  { icon: "💊", name: "Medication help", detail: "Oral or topical", price: "from $8" },
  { icon: "🧹", name: "Pet-area cleanup", detail: "Litter or yard waste", price: "from $10" },
];

const paymentMethods = ["Cash", "Cash App", "Venmo Teen", "Apple Cash"];

export default function Home() {
  const [service, setService] = useState("Dog walk — $10");

  function sendRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hi Phoenix! I would like to request pet care.",
      "",
      `Name: ${data.get("name")}`,
      `Braemar unit/address: ${data.get("address")}`,
      `Pet: ${data.get("petName")} (${data.get("petType")})`,
      `Service: ${data.get("service")}`,
      `Requested date: ${data.get("date")}`,
      `Preferred time: ${data.get("time")}`,
      `Details: ${data.get("details") || "None provided"}`,
      "",
      "I understand this is a request and is not confirmed until Phoenix and his parent approve it.",
    ].join("\n");

    window.location.href = `sms:3046396219?body=${encodeURIComponent(message)}`;
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Phoenix's Neighborhood Pet Care home">
          <span className="brand-mark">🐾</span>
          <span>
            <strong>Phoenix’s Neighborhood</strong>
            <em>Pet Care</em>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#how">How it works</a>
          <a href="#safety">Safety</a>
          <a className="nav-button" href="#book">Request care</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Braemar Townhomes • Morgantown, WV</p>
          <h1>Friendly pet care, right in your neighborhood.</h1>
          <p className="hero-text">
            Phoenix is a responsible local 14-year-old pet owner offering convenient,
            affordable help for cats and dogs. Every booking is parent-supported.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#book">Request pet care <span>→</span></a>
            <a className="text-link" href="#services">View services & rates</a>
          </div>
          <div className="trust-row" aria-label="Service highlights">
            <span>♡ Free meet-and-greet</span>
            <span>▣ Photo updates</span>
            <span>♢ Parent-supported</span>
          </div>
        </div>
        <div className="hero-art">
          <img src="/phoenix-hero-art.png" alt="A neighborhood pet helper walking a dog with a cat nearby" />
          <span className="care-note">Caring<br />Local<br />Trusted</span>
        </div>
      </section>

      <section className="intro-cards" aria-label="Popular services">
        {services.slice(0, 3).map((item) => (
          <a href="#services" className="service-teaser" key={item.name}>
            <span className="teaser-icon">{item.icon}</span>
            <span><strong>{item.name}</strong><small>{item.price}</small></span>
            <b>›</b>
          </a>
        ))}
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <p className="eyebrow">Simple neighborhood pricing</p>
          <h2>Choose the care your pet needs.</h2>
          <p>Rates apply within Braemar Townhomes. Final pricing is confirmed after a free meet-and-greet.</p>
        </div>
        <div className="service-grid">
          {services.map((item) => (
            <article className="rate-card" key={item.name}>
              <span>{item.icon}</span>
              <div><h3>{item.name}</h3><p>{item.detail}</p></div>
              <strong>{item.price}</strong>
            </article>
          ))}
        </div>
        <div className="notice">
          <strong>Good to know:</strong> Grooming, nail trims, and medication assistance
          depend on the pet’s temperament and care needs. No injections, advanced
          medical care, severely matted coats, or aggressive animals.
        </div>
      </section>

      <section className="steps-section" id="how">
        <div className="section-heading">
          <p className="eyebrow">No surprises</p>
          <h2>How booking works</h2>
        </div>
        <div className="steps">
          <article><b>1</b><h3>Send a request</h3><p>Choose a service, date, and time using the form below.</p></article>
          <article><b>2</b><h3>Meet first</h3><p>Phoenix and his parent review the request and arrange a free meet-and-greet.</p></article>
          <article><b>3</b><h3>Get confirmation</h3><p>Your appointment and final price are confirmed before payment.</p></article>
          <article><b>4</b><h3>Enjoy updates</h3><p>Receive a text or photo update while your pet is being cared for.</p></article>
        </div>
      </section>

      <section className="safety-section" id="safety">
        <div>
          <p className="eyebrow">Safety comes first</p>
          <h2>Local, careful, and parent-supported.</h2>
        </div>
        <ul>
          <li>New clients complete a meet-and-greet before the first service.</li>
          <li>Bookings are currently limited to Braemar Townhomes.</li>
          <li>Owners disclose bite, escape, health, and behavioral history.</li>
          <li>Medication must be labeled and include written instructions.</li>
          <li>Requests are not confirmed until reviewed and approved.</li>
        </ul>
      </section>

      <section className="booking-section" id="book">
        <div className="booking-copy">
          <p className="eyebrow">Request pet care</p>
          <h2>Tell us what your pet needs.</h2>
          <p>
            Complete the form and tap the button to send the request by text to
            Phoenix at <a href="tel:+13046396219">(304) 639-6219</a>.
          </p>
          <div className="payment-box">
            <strong>Payment after confirmation</strong>
            <div>{paymentMethods.map((method) => <span key={method}>{method}</span>)}</div>
            <small>Card and Apple Pay can be added later through a parent-managed payment link.</small>
          </div>
          <div className="downloads">
            <a href="/Phoenix-Pet-Care-Flyer.pdf" download>Download the service flyer</a>
            <a href="/Phoenix-Pet-Care-Business-Cards.pdf" download>Download printable business cards</a>
          </div>
        </div>

        <form className="booking-form" onSubmit={sendRequest}>
          <label>Your name<input name="name" required autoComplete="name" /></label>
          <label>Braemar unit or address<input name="address" required autoComplete="street-address" /></label>
          <div className="field-row">
            <label>Pet’s name<input name="petName" required /></label>
            <label>Type of pet
              <select name="petType" required defaultValue="">
                <option value="" disabled>Select</option>
                <option>Dog</option><option>Cat</option><option>Small pet</option><option>Other</option>
              </select>
            </label>
          </div>
          <label>Service
            <select name="service" value={service} onChange={(e) => setService(e.target.value)}>
              {services.map((item) => <option key={item.name}>{item.name} — {item.price}</option>)}
            </select>
          </label>
          <div className="field-row">
            <label>Requested date<input name="date" type="date" required /></label>
            <label>Preferred time<input name="time" type="time" required /></label>
          </div>
          <label>Pet details, instructions, or concerns
            <textarea name="details" rows={4} placeholder="Temperament, feeding routine, medications, access notes…" />
          </label>
          <label className="check">
            <input type="checkbox" required />
            <span>I understand this request must be approved before it is confirmed.</span>
          </label>
          <button className="primary-button form-button" type="submit">Send booking request by text <span>→</span></button>
          <small className="privacy-note">The form creates a text message on your device. Nothing is sent until you review and send it.</small>
        </form>
      </section>

      <footer>
        <div className="brand footer-brand">
          <span className="brand-mark">🐾</span>
          <span><strong>Phoenix’s Neighborhood</strong><em>Pet Care</em></span>
        </div>
        <p>Serving Braemar Townhomes • Morgantown, WV</p>
        <a href="tel:+13046396219">(304) 639-6219</a>
        <small>© 2026 Phoenix’s Neighborhood Pet Care • Parent-supported neighborhood services</small>
      </footer>
    </main>
  );
}
