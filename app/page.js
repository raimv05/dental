import Header from './components/Header';
import Footer from './components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

const services = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="24" fill="currentColor" opacity="0.1" />
        <path d="M24 12c-3 0-5 1.5-6 4s-1 5 0 8 3 6 5 8.5c.8 1 1 1.2 1 1.2s.2-.2 1-1.2c2-2.5 4-5.5 5-8.5s1-6 0-8-3-4-6-4z" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M21 18h6M24 15v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'General & Preventive',
    description: 'Comprehensive check-ups, professional cleaning, fillings, and preventive care to keep your teeth healthy.',
    slug: 'general',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24" fill="currentColor" opacity="0.1" />
        <path d="M16 28c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 24l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="17" r="3" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: 'Cosmetic Dentistry',
    description: 'Teeth whitening, veneers, and smile design to give you the confident smile you deserve.',
    slug: 'cosmetic',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24" fill="currentColor" opacity="0.1" />
        <rect x="18" y="14" width="12" height="20" rx="6" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M21 20h6M21 24h6M21 28h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Orthodontics',
    description: 'Traditional braces and clear aligners to straighten your teeth and improve your bite.',
    slug: 'orthodontics',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24" fill="currentColor" opacity="0.1" />
        <path d="M24 14v6M24 28v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M18 18l2 2M28 28l2 2M30 18l-2 2M18 28l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Implants & Restorative',
    description: 'Dental implants, crowns, bridges, and dentures to restore function and aesthetics.',
    slug: 'implants',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24" fill="currentColor" opacity="0.1" />
        <path d="M24 14c-2.5 0-4 1.5-5 3.5s-1 4.5 0 7 2.5 5 4 7c.4.5.6.7 1 1 .4-.3.6-.5 1-1 1.5-2 3-4 4-7s1-5 0-7-2.5-3.5-5-3.5z" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M22 22l4 4M26 22l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Root Canal Treatment',
    description: 'Pain-free endodontic treatment with modern techniques to save and restore damaged teeth.',
    slug: 'root-canal',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24" fill="currentColor" opacity="0.1" />
        <path d="M17 32c1-3 3-5 7-5s6 2 7 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="20" r="2.5" stroke="currentColor" strokeWidth="2" />
        <circle cx="28" cy="20" r="2.5" stroke="currentColor" strokeWidth="2" />
        <path d="M24 15v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Pediatric Dentistry',
    description: 'Gentle, child-friendly dental care in a fun and comfortable environment for little smiles.',
    slug: 'pediatric',
  },
];

const testimonials = [
  {
    name: 'Sarah M.',
    rating: 5,
    text: 'Absolutely wonderful experience! The team made me feel so comfortable, and the results exceeded my expectations. My smile has never looked better!',
    treatment: 'Teeth Whitening',
  },
  {
    name: 'James R.',
    rating: 5,
    text: 'I was terrified of dentists before coming here. The staff is incredibly patient and understanding. Now I actually look forward to my check-ups!',
    treatment: 'General Check-up',
  },
  {
    name: 'Priya K.',
    rating: 5,
    text: 'Got my Invisalign treatment done here and I couldn\'t be happier. Professional, modern, and the booking system is so convenient.',
    treatment: 'Orthodontics',
  },
];

const trustStats = [
  { number: '15+', label: 'Years of Experience' },
  { number: '10K+', label: 'Happy Patients' },
  { number: '4.9', label: 'Google Rating' },
  { number: '25+', label: 'Expert Team Members' },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* ===== HERO SECTION ===== */}
        <section className={styles.hero} id="hero">
          <div className={styles.heroBackground}>
            <Image
              src="/images/clinic-hero.jpg"
              alt="Modern, welcoming BrightSmile Dental clinic interior"
              fill
              priority
              quality={85}
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.heroOverlay}></div>
          </div>
          <div className={`container ${styles.heroContent}`}>
            <div className={styles.heroText}>
              <span className={styles.heroBadge}>✨ Now Accepting New Patients</span>
              <h1>
                Your Smile,<br />
                <span className={styles.heroHighlight}>Our Passion</span>
              </h1>
              <p className={styles.heroSubtext}>
                Experience modern dentistry in a warm, caring environment. From routine check-ups to complete smile makeovers — we&apos;re here for your best smile.
              </p>
              <div className={styles.heroButtons}>
                <Link href="/book" className="btn btn-primary btn-lg" id="hero-book-btn">
                  Book Appointment
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
                <a href="tel:+1234567890" className="btn btn-outline-white btn-lg" id="hero-call-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  Call Now
                </a>
              </div>
            </div>
          </div>
          {/* Decorative wave */}
          <div className={styles.heroWave}>
            <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none">
              <path d="M0 40C240 80 480 100 720 80C960 60 1200 20 1440 40V100H0V40Z" fill="white" />
            </svg>
          </div>
        </section>

        {/* ===== TRUST STRIP ===== */}
        <section className={styles.trustStrip} id="trust-stats">
          <div className="container">
            <div className={styles.trustGrid}>
              {trustStats.map((stat, i) => (
                <div key={i} className={styles.trustItem}>
                  <span className={styles.trustNumber}>{stat.number}</span>
                  <span className={styles.trustLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SERVICES OVERVIEW ===== */}
        <section className={`section ${styles.servicesSection}`} id="services-overview">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Our Services</span>
              <h2>Comprehensive Dental Care</h2>
              <p className="section-subtitle">
                From preventive care to complete smile transformations, we offer a full range of dental services tailored to your needs.
              </p>
            </div>
            <div className={styles.servicesGrid}>
              {services.map((service, i) => (
                <Link href={`/services#${service.slug}`} key={i} className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>{service.icon}</div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDesc}>{service.description}</p>
                  <span className={styles.serviceLink}>
                    Learn More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== DOCTOR INTRODUCTION ===== */}
        <section className={`section ${styles.doctorSection}`} id="meet-doctor">
          <div className="container">
            <div className={styles.doctorGrid}>
              <div className={styles.doctorImageWrapper}>
                <div className={styles.doctorImageFrame}>
                  <Image
                    src="/images/doctor-portrait.jpg"
                    alt="Dr. Sarah Chen, Lead Dentist at BrightSmile Dental"
                    width={420}
                    height={560}
                    quality={85}
                    className={styles.doctorImage}
                  />
                </div>
                <div className={styles.doctorImageDecor}></div>
              </div>
              <div className={styles.doctorContent}>
                <span className="section-label">Meet Your Dentist</span>
                <h2>Dr. Sarah Chen</h2>
                <p className={styles.doctorCredentials}>BDS, MDS — Cosmetic & Restorative Dentistry</p>
                <p className={styles.doctorBio}>
                  &ldquo;I believe everyone deserves a smile they&apos;re proud of. With over 15 years of experience, my approach combines the latest dental technology with a gentle, patient-first philosophy. Whether you&apos;re here for a routine check-up or a complete smile makeover, I want your experience to be comfortable, transparent, and even enjoyable.&rdquo;
                </p>
                <div className={styles.doctorHighlights}>
                  <div className={styles.doctorHighlight}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    <span>15+ Years Experience</span>
                  </div>
                  <div className={styles.doctorHighlight}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    <span>Invisalign Certified Provider</span>
                  </div>
                  <div className={styles.doctorHighlight}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    <span>American Dental Association Member</span>
                  </div>
                </div>
                <Link href="/about" className="btn btn-secondary">
                  More About Our Team
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIALS ===== */}
        <section className={`section ${styles.testimonialsSection}`} id="testimonials">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Patient Reviews</span>
              <h2>What Our Patients Say</h2>
              <p className="section-subtitle">
                Real stories from real patients. Your comfort and satisfaction are our top priorities.
              </p>
            </div>
            <div className={styles.testimonialsGrid}>
              {testimonials.map((t, i) => (
                <div key={i} className={styles.testimonialCard}>
                  <div className={styles.testimonialStars}>
                    {Array.from({ length: t.rating }, (_, j) => (
                      <svg key={j} width="18" height="18" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    ))}
                  </div>
                  <p className={styles.testimonialText}>&ldquo;{t.text}&rdquo;</p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.testimonialAvatar}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <span className={styles.testimonialName}>{t.name}</span>
                      <span className={styles.testimonialTreatment}>{t.treatment}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FIRST VISIT ===== */}
        <section className={`section ${styles.firstVisitSection}`} id="first-visit">
          <div className="container">
            <div className="section-header">
              <span className="section-label">New Patients</span>
              <h2>What to Expect on Your First Visit</h2>
              <p className="section-subtitle">
                We make your first appointment easy and stress-free. Here&apos;s what happens:
              </p>
            </div>
            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></svg>
                </div>
                <h3>Book & Prepare</h3>
                <p>Schedule your visit online or by phone. Fill out our simple new-patient form in advance to save time.</p>
              </div>
              <div className={styles.stepConnector}>
                <svg width="40" height="24" viewBox="0 0 40 24"><path d="M0 12h36M30 6l6 6-6 6" stroke="var(--color-primary)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.3"/></svg>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
                </div>
                <h3>Meet & Examine</h3>
                <p>Our friendly team welcomes you. The dentist performs a thorough exam with digital X-rays and discusses your goals.</p>
              </div>
              <div className={styles.stepConnector}>
                <svg width="40" height="24" viewBox="0 0 40 24"><path d="M0 12h36M30 6l6 6-6 6" stroke="var(--color-primary)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.3"/></svg>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <h3>Plan & Smile</h3>
                <p>Receive a personalized treatment plan with transparent pricing. Start your journey to a healthier, brighter smile!</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== NERVOUS PATIENTS ===== */}
        <section className={`section ${styles.nervousSection}`} id="nervous-patients">
          <div className="container">
            <div className={styles.nervousCard}>
              <div className={styles.nervousContent}>
                <span className="section-label">We Understand</span>
                <h2>Nervous About the Dentist?</h2>
                <p>
                  You&apos;re not alone — dental anxiety is incredibly common. At BrightSmile, we specialize in helping anxious patients feel at ease with:
                </p>
                <ul className={styles.nervousList}>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--color-primary)"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                    A calm, judgement-free environment
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--color-primary)"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                    Gentle techniques and modern pain management
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--color-primary)"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                    Step-by-step explanations before every procedure
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--color-primary)"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                    Sedation options for complete comfort
                  </li>
                </ul>
                <Link href="/book" className="btn btn-primary">
                  Book a Gentle First Visit
                </Link>
              </div>
              <div className={styles.nervousImageWrapper}>
                <Image
                  src="/images/clinic-interior.jpg"
                  alt="Calm, welcoming dental clinic reception"
                  width={560}
                  height={380}
                  quality={85}
                  className={styles.nervousImage}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
