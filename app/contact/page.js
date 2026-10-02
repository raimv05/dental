'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './page.module.css';

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulated submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormState({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <span className="section-label">Get In Touch</span>
              <h1>Contact & Location</h1>
              <p>We&apos;d love to hear from you. Reach out by phone, visit us, or send a message below.</p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className={`section ${styles.contactSection}`}>
          <div className="container">
            <div className={styles.contactGrid}>
              {/* Contact Info */}
              <div className={styles.contactInfo}>
                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <h3>Visit Us</h3>
                    <p>123 Smile Avenue<br />Healthcare City, HC 12345</p>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className={styles.directionsLink}>
                      Get Directions
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                    </a>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.61.7 2.36a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.75.34 1.55.57 2.36.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <h3>Call Us</h3>
                    <a href="tel:+1234567890" className={styles.phoneNumber}>(123) 456-7890</a>
                    <p className={styles.infoNote}>For emergencies outside hours, call our emergency line.</p>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <h3>Opening Hours</h3>
                    <div className={styles.hoursGrid}>
                      <span>Monday – Friday</span><span>8:00 AM – 6:00 PM</span>
                      <span>Saturday</span><span>9:00 AM – 2:00 PM</span>
                      <span>Sunday</span><span>Closed</span>
                    </div>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
                  </div>
                  <div>
                    <h3>Parking</h3>
                    <p>Free parking available at the rear of the building. Accessible parking spots near the entrance.</p>
                  </div>
                </div>

                <div className={`${styles.infoCard} ${styles.emergencyCard}`}>
                  <div className={styles.infoIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                  </div>
                  <div>
                    <h3>Dental Emergency?</h3>
                    <p>If you&apos;re experiencing severe pain, swelling, or trauma, call us immediately. We offer same-day emergency appointments.</p>
                    <a href="tel:+1234567890" className="btn btn-primary btn-sm" style={{ marginTop: '0.75rem' }}>
                      Call Emergency Line
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className={styles.formWrapper}>
                <div className={styles.formCard}>
                  <h2>Send Us a Message</h2>
                  <p>Have a question or want to learn more? Fill out the form below and we&apos;ll get back to you within 24 hours.</p>

                  {submitted && (
                    <div className={styles.successMessage}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                      Thank you! We&apos;ll be in touch soon.
                    </div>
                  )}

                  <form onSubmit={handleSubmit} id="contact-form">
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-name">Full Name *</label>
                      <input
                        type="text"
                        id="contact-name"
                        className="form-input"
                        placeholder="Your full name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      />
                    </div>
                    <div className={styles.formRow}>
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-email">Email *</label>
                        <input
                          type="email"
                          id="contact-email"
                          className="form-input"
                          placeholder="your@email.com"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-phone">Phone</label>
                        <input
                          type="tel"
                          id="contact-phone"
                          className="form-input"
                          placeholder="(123) 456-7890"
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-message">Message *</label>
                      <textarea
                        id="contact-message"
                        className="form-textarea"
                        placeholder="How can we help you?"
                        required
                        rows="5"
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      ></textarea>
                    </div>
                    <div className={styles.consentRow}>
                      <input type="checkbox" id="contact-consent" required />
                      <label htmlFor="contact-consent" className={styles.consentLabel}>
                        I consent to BrightSmile Dental storing my details to respond to this inquiry. See our <a href="#">Privacy Policy</a>.
                      </label>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }} id="contact-submit">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className={styles.mapWrapper}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2sBrooklyn%20Bridge%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1635800000000!5m2!1sen!2s"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '1rem' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BrightSmile Dental location on Google Maps"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
