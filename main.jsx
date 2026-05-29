import React from 'react';
import { createRoot } from 'react-dom/client';
import { Heart, Home, Users, ShieldCheck, Utensils, Pill, CalendarDays, Phone, Mail, MapPin, Image as ImageIcon, MessageCircle } from 'lucide-react';
import './styles.css';
import logo from './logo.png';
import heroPhoto from './hero-photo.jpg';
import logo2 from './logo2.png';
import logo3 from './logo3.png';
import logo4 from './logo4.png';
import logo5 from './logo5.png';
import logo7 from './logo7.png';

const services = [
  { icon: Heart, title: 'Personal Care', text: 'Compassionate support with daily personal care needs.' },
  { icon: ShieldCheck, title: '24-Hour Care & Supervision', text: 'Around-the-clock monitoring, assistance, and support.' },
  { icon: Pill, title: 'Medication Management', text: 'Medication management, reminders, and monitoring.' },
  { icon: Utensils, title: 'Meals & Snacks', text: 'Three meals a day plus snacks in a warm, home-like setting.' },
  { icon: Users, title: 'Activities & Outings', text: 'Engaging activities, outings, companionship, and meaningful connection.' },
  { icon: Home, title: 'Safe & Clean Environment', text: 'A clean, safe, comfortable home with housekeeping and laundry support.' },
  { icon: Heart, title: 'Respite & Long-Term Care', text: 'Flexible care options for both short-term respite and long-term support.' },
  { icon: ShieldCheck, title: 'Personalized Care Plans', text: 'Tailored care plans designed to meet each individual’s unique needs.' },
  { icon: Users, title: 'ADL Assistance', text: 'Support with bathing, toileting, grooming, dressing, laundry, and shopping.' },
];

const gallery = [
  {
    title: 'Living Room',
    image: logo3
  },
  {
    title: 'Dining Area',
    image: logo4
  },
  {
    title: 'Bedroom',
    image: logo5
  },
  {
    title: 'Outdoor Space',
    image: logo7
  }
];

function App() {
  return (
    <div className="site">
      <header className="header">
        <a className="brand" href="#home">
          <img src={logo} alt="Forget Me Not Adult Family Home logo" className="logo" />
        </a>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#hiring">We're Hiring</a>
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
              src={heroPhoto}
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
         <div className="image-panel about-photo-panel">
  <img
    src={logo2}
    alt="Forget Me Not Adult Family Home resident care"
    className="about-photo"
  />
</div>
          <div className="text-panel">
            <p className="section-kicker">About Us</p>
            <h2>A place like home, care like family.</h2>
            <p>At Forget Me Not Adult Family Home, we believe every person deserves to feel loved, respected, and cared for in a place they can truly call home.</p>
            <p>Our home is designed to provide comfort, dignity, and peace of mind for your loved one — and for you.</p>
            <a className="text-link" href="#contact">Connect with us</a>
          </div>
        </section>

          <p>
            We support independent living for individuals who may be developmentally disabled,
            advanced age, physically disabled, emotionally disturbed, or living with mental illness.
         </p>

        <section id="services" className="services-section">
          <p className="section-kicker">Our Services</p>
          <h2>Supportive care designed around each resident’s needs.</h2>
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
        
<section id="hiring" className="cta-band">
  <div className="cta-icon"><Users /></div>
  <div>
    <h2>We’re Hiring</h2>
    <p>
      Interested in joining the Forget Me Not Adult Family Home team?
      We’d love to hear from compassionate, dependable individuals who have a heart for caring for others.
    </p>
    <p>
      Please fill out the contact form below and include “Employment Interest” in your message.
    </p>
  </div>
  <a className="button primary light" href="#contact">Employment Interest</a>
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
  <p><Mail /> <a href="mailto:4gmn1426@gmail.com">4gmn1426@gmail.com</a></p>
  <p><MapPin /> Racine, Wisconsin</p>
</div>
          </div>

     <form
  className="contact-card"
  action="https://formsubmit.co/4gmn1426@gmail.com"
  method="POST"
>
  <input type="hidden" name="_subject" value="New Forget Me Not AFH Website Inquiry" />
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_template" value="table" />

  <label htmlFor="visitorName">Name</label>
  <input id="visitorName" type="text" name="Name" placeholder="Your name" required />

  <label htmlFor="visitorEmail">Email</label>
  <input id="visitorEmail" type="email" name="Email" placeholder="your@email.com" required />

  <label htmlFor="visitorPhone">Phone</label>
  <input id="visitorPhone" type="tel" name="Phone" placeholder="Phone number" required />

  <label htmlFor="visitorMessage">Message</label>
 <textarea id="visitorMessage" name="Message" placeholder="How can we help? For employment, please write Employment Interest." required></textarea>

  <button type="submit">
    <MessageCircle size={18} /> Send Message
  </button>

  <small>Your message will be sent directly to Forget Me Not Adult Family Home.</small>
</form>
        </section>
      </main>

      <footer className="footer">
        <img src={logo} alt="Forget Me Not logo" />
        <p>© {new Date().getFullYear()} Forget Me Not Adult Family Home. All rights reserved.</p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
