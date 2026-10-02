'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './page.module.css';

const serviceOptions = [
  'General Check-up & Cleaning',
  'Teeth Whitening',
  'Dental Fillings',
  'Veneers & Bonding',
  'Braces / Invisalign',
  'Dental Implants',
  'Crowns & Bridges',
  'Root Canal Treatment',
  'Pediatric Dentistry',
  'Emergency Dental Care',
  'Other / Not Sure',
];

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
  '4:00 PM', '4:30 PM', '5:00 PM',
];

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    patientType: 'new',
    notes: '',
    consent: false,
  });

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const canProceed = () => {
    switch (step) {
      case 1: return formData.service !== '';
      case 2: return formData.date !== '' && formData.time !== '';
      case 3: return formData.firstName && formData.lastName && formData.email && formData.phone && formData.consent;
      default: return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (canProceed()) {
      setStep(4);
    }
  };

  // Generate dates for next 14 days (skip Sundays)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 21 && dates.length < 14; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      if (d.getDay() !== 0) {
        dates.push(d);
      }
    }
    return dates;
  };

  const formatDate = (d) => {
    return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  const formatDateValue = (d) => d.toISOString().split('T')[0];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <span className="section-label">Book Online</span>
              <h1>Schedule Your Appointment</h1>
              <p>Choose your service, pick a date and time, and we&apos;ll take care of the rest.</p>
            </div>
          </div>
        </section>

        <section className={`section ${styles.bookingSection}`}>
          <div className="container">
            {/* Progress Steps */}
            <div className={styles.progressBar}>
              {[
                { num: 1, label: 'Service' },
                { num: 2, label: 'Date & Time' },
                { num: 3, label: 'Your Details' },
                { num: 4, label: 'Confirmation' },
              ].map((s) => (
                <div key={s.num} className={`${styles.progressStep} ${step >= s.num ? styles.progressActive : ''} ${step > s.num ? styles.progressDone : ''}`}>
                  <div className={styles.progressCircle}>
                    {step > s.num ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    ) : (
                      s.num
                    )}
                  </div>
                  <span className={styles.progressLabel}>{s.label}</span>
                </div>
              ))}
            </div>

            <div className={styles.formContainer}>
              {/* Step 1: Service */}
              {step === 1 && (
                <div className={styles.stepContent}>
                  <h2>Choose Your Service</h2>
                  <p>Select the treatment you&apos;re interested in. Not sure? Choose &quot;Other&quot; and we&apos;ll help.</p>
                  <div className={styles.serviceGrid}>
                    {serviceOptions.map((service) => (
                      <button
                        key={service}
                        type="button"
                        className={`${styles.serviceOption} ${formData.service === service ? styles.serviceSelected : ''}`}
                        onClick={() => updateField('service', service)}
                        id={`service-${service.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      >
                        <div className={styles.serviceRadio}>
                          {formData.service === service && <div className={styles.serviceRadioInner}></div>}
                        </div>
                        <span>{service}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Date & Time */}
              {step === 2 && (
                <div className={styles.stepContent}>
                  <h2>Pick a Date & Time</h2>
                  <p>Choose your preferred appointment slot. We&apos;ll confirm availability by email.</p>
                  <div className={styles.dateTimeGrid}>
                    <div>
                      <h3 className={styles.fieldLabel}>Select Date</h3>
                      <div className={styles.dateGrid}>
                        {getAvailableDates().map((d) => (
                          <button
                            key={formatDateValue(d)}
                            type="button"
                            className={`${styles.dateOption} ${formData.date === formatDateValue(d) ? styles.dateSelected : ''}`}
                            onClick={() => updateField('date', formatDateValue(d))}
                          >
                            <span className={styles.dateDay}>{d.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                            <span className={styles.dateNum}>{d.getDate()}</span>
                            <span className={styles.dateMonth}>{d.toLocaleDateString('en-US', { month: 'short' })}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className={styles.fieldLabel}>Select Time</h3>
                      <div className={styles.timeGrid}>
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            type="button"
                            className={`${styles.timeOption} ${formData.time === time ? styles.timeSelected : ''}`}
                            onClick={() => updateField('time', time)}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Patient Details */}
              {step === 3 && (
                <div className={styles.stepContent}>
                  <h2>Your Details</h2>
                  <p>Tell us a bit about yourself so we can prepare for your visit.</p>
                  <form onSubmit={handleSubmit} id="booking-form">
                    <div className={styles.formRow}>
                      <div className="form-group">
                        <label className="form-label" htmlFor="booking-firstname">First Name *</label>
                        <input type="text" id="booking-firstname" className="form-input" required value={formData.firstName} onChange={(e) => updateField('firstName', e.target.value)} placeholder="First name" />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="booking-lastname">Last Name *</label>
                        <input type="text" id="booking-lastname" className="form-input" required value={formData.lastName} onChange={(e) => updateField('lastName', e.target.value)} placeholder="Last name" />
                      </div>
                    </div>
                    <div className={styles.formRow}>
                      <div className="form-group">
                        <label className="form-label" htmlFor="booking-email">Email *</label>
                        <input type="email" id="booking-email" className="form-input" required value={formData.email} onChange={(e) => updateField('email', e.target.value)} placeholder="your@email.com" />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="booking-phone">Phone *</label>
                        <input type="tel" id="booking-phone" className="form-input" required value={formData.phone} onChange={(e) => updateField('phone', e.target.value)} placeholder="(123) 456-7890" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Patient Type</label>
                      <div className={styles.patientTypeRow}>
                        <button type="button" className={`${styles.patientTypeBtn} ${formData.patientType === 'new' ? styles.patientTypeActive : ''}`} onClick={() => updateField('patientType', 'new')}>
                          New Patient
                        </button>
                        <button type="button" className={`${styles.patientTypeBtn} ${formData.patientType === 'returning' ? styles.patientTypeActive : ''}`} onClick={() => updateField('patientType', 'returning')}>
                          Returning Patient
                        </button>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="booking-notes">Additional Notes</label>
                      <textarea id="booking-notes" className="form-textarea" rows="3" value={formData.notes} onChange={(e) => updateField('notes', e.target.value)} placeholder="Any special requests, concerns, or medical conditions we should know about..."></textarea>
                    </div>
                    <div className={styles.consentRow}>
                      <input type="checkbox" id="booking-consent" checked={formData.consent} onChange={(e) => updateField('consent', e.target.checked)} required />
                      <label htmlFor="booking-consent" className={styles.consentLabel}>
                        I consent to BrightSmile Dental processing my data to arrange this appointment. See our <a href="#">Privacy Policy</a>.
                      </label>
                    </div>
                  </form>
                </div>
              )}

              {/* Step 4: Confirmation */}
              {step === 4 && (
                <div className={`${styles.stepContent} ${styles.confirmationStep}`}>
                  <div className={styles.confirmationIcon}>
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <h2>Appointment Request Submitted!</h2>
                  <p>Thank you, {formData.firstName}! We&apos;ve received your appointment request.</p>
                  <div className={styles.confirmationCard}>
                    <div className={styles.confirmationRow}>
                      <span>Service</span>
                      <strong>{formData.service}</strong>
                    </div>
                    <div className={styles.confirmationRow}>
                      <span>Date</span>
                      <strong>{formData.date ? new Date(formData.date + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : ''}</strong>
                    </div>
                    <div className={styles.confirmationRow}>
                      <span>Time</span>
                      <strong>{formData.time}</strong>
                    </div>
                    <div className={styles.confirmationRow}>
                      <span>Patient</span>
                      <strong>{formData.firstName} {formData.lastName}</strong>
                    </div>
                    <div className={styles.confirmationRow}>
                      <span>Email</span>
                      <strong>{formData.email}</strong>
                    </div>
                  </div>
                  <div className={styles.confirmationNote}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                    <p>Our team will confirm your appointment within 2 hours via email. If you need to make changes, please call us at <strong>(123) 456-7890</strong>.</p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              {step < 4 && (
                <div className={styles.navButtons}>
                  {step > 1 && (
                    <button type="button" className="btn btn-secondary" onClick={prevStep}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
                      Back
                    </button>
                  )}
                  <div style={{ marginLeft: 'auto' }}>
                    {step < 3 ? (
                      <button type="button" className="btn btn-primary" onClick={nextStep} disabled={!canProceed()} id="booking-next-btn">
                        Continue
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                      </button>
                    ) : (
                      <button type="submit" form="booking-form" className="btn btn-primary btn-lg" disabled={!canProceed()} id="booking-submit-btn">
                        Confirm Appointment
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
