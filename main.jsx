import React from 'react';
import { createRoot } from 'react-dom/client';
import { Heart, Home, Users, ShieldCheck, Utensils, Pill, CalendarDays, Phone, Mail, MapPin, Image as ImageIcon, MessageCircle } from 'lucide-react';
import './styles.css';

const services = [
  { icon: Heart, title: 'Personalized Care', text: 'Individual care and daily support tailored to each resident’s needs.' },
  { icon: Home, title: 'Home-Like Environment', text: 'A peaceful residential setting that feels warm, clean, and welcoming.' },
  { icon: Users, title: 'Companionship', text: 'Meaningful connection, conversation, activities, and a sense of belonging.' },
  { icon: ShieldCheck, title: 'Safe & Comfortable', text: 'A secure environment designed to help families feel confident and at ease.' },
  { icon: Utensils, title: 'Nutritious Meals', text: 'Home-style meals prepared with care, consistency, and individual needs in mind.' },
  { icon: Pill, title: 'Daily Living Support', text: 'Support with routines, reminders, grooming, dressing, and daily comfort.' },
];

const gallery = ['Living Room', 'Dining Area', 'Bedroom', 'Outdoor Space'];

function App() {
  return (
    <div className="site">
      <header className="header">
        <a className="brand" href="#home">
          <img src="/logo.png" alt="Forget Me Not Adult Family Home logo" className="logo" />
        </a>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="phone-pill" href="tel:2624125114">
          <Phone size={18} /> (262) 412-5114
        </a>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Compassionate. Personalized. Family-centered.</p>
            <h1>Where care feels like home.</h1>
            <div className="divider">
              <span></span>
              <Heart size={26} fill="currentColor" />
              <span></span>
            </div>
            <p className="lead">
              Forget Me Not Adult Family Home provides loving, attentive care in a warm,
              comfortable home where your loved one is treated like family.
            </p>
            <div className="button-row">
              <a className="button primary" href="#contact">
                <CalendarDays size={18} /> Schedule a Tour
              </a>
              <a className="button secondary" href="#services">Learn More</a>
            </div>
          </div>

          <div className="hero-card">
            <img
              src="/hero-photo.jpg"
              alt="Caregiver assisting an older adult in a warm home setting"
              className="hero-photo"
            />
          </div>
        </section>

        <section className="feature-strip" aria-label="Care highlights">
          <div><Home /><strong>Home-Like Environment</strong><span>Warm and welcoming</span></div>
          <div><Heart /><strong>Personalized Care</strong><span>Support that fits</span></div>
          <div><Users /><strong>Compassionate Staff</strong><span>Treated like family</span></div>
          <div><ShieldCheck /><strong>Peace of Mind</strong><span>Safe and secure</span></div>
        </section>

        <section id="about" className="split-section">
          <div className="image-panel hands-panel">
            <Heart size={64} />
          </div>
          <div className="text-panel">
            <p className="section-kicker">About Us</p>
            <h2>A place like home, care like family.</h2>
            <p>At Forget Me Not Adult Family Home, we believe every person deserves to feel loved, respected, and cared for in a place they can truly call home.</p>
            <p>Our home is designed to provide comfort, dignity, and peace of mind for your loved one — and for you.</p>
            <a className="text-link" href="#contact">Connect with us</a>
          </div>
        </section>

        <section id="services" className="services-section">
          <p className="section-kicker">Our Services</p>
          <h2>Support for daily living in a peaceful home setting.</h2>
          <div className="cards">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="card" key={service.title}>
                  <div className="icon-circle"><Icon /></div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="cta-band">
          <div className="cta-icon"><Home /></div>
          <div>
            <h2>A place to call home.</h2>
            <p>We provide more than care — we provide comfort, connection, dignity, and peace of mind for families.</p>
          </div>
          <a className="button primary light" href="#contact">Schedule a Tour</a>
        </section>

        <section id="gallery" className="gallery-section">
          <p className="section-kicker">Gallery</p>
          <h2>A glimpse of home.</h2>
          <div className="gallery-grid">
            {gallery.map((item) => (
              <div className="gallery-item" key={item}>
                <ImageIcon />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div>
            <p className="section-kicker">Contact</p>
            <h2>We’d love to connect with you.</h2>
            <p>Reach out to ask questions, check availability, or schedule a visit.</p>
            <div className="contact-list">
              <p><Phone /> FMN I: <a href="tel:2626374709">(262) 637-4709</a></p>
              <p><Phone /> FMN II: <a href="tel:2624560854">(262) 456-0854</a></p>
              <p><Phone /> Business Manager: <a href="tel:2624125114">(262) 412-5114</a></p>
              <p><Mail /> Add email address</p>
              <p><MapPin /> Add city/state</p>
            </div>
          </div>

          <form className="contact-card" onSubmit={(e) => e.preventDefault()}>
            <label>Name<input placeholder="Your name" /></label>
            <label>Email<input placeholder="your@email.com" /></label>
            <label>Phone<input placeholder="Phone number" /></label>
            <label>Message<textarea placeholder="How can we help?" /></label>
            <button type="submit"><MessageCircle size={18} /> Send Message</button>
            <small>This demo form displays on the website. Connect a form service before accepting real inquiries.</small>
          </form>
        </section>
      </main>

      <footer className="footer">
        <img src="/logo.png" alt="Forget Me Not logo" />
        <p>© {new Date().getFullYear()} Forget Me Not Adult Family Home. All rights reserved.</p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
