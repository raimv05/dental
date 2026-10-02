import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'About Us — BrightSmile Dental',
  description: 'Meet the BrightSmile Dental team, learn about our story, values, and modern technology. Providing compassionate dental care for over 15 years.',
};

const team = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Lead Dentist & Founder',
    credentials: 'BDS, MDS — Cosmetic & Restorative',
    bio: 'With over 15 years of experience, Dr. Chen specializes in smile makeovers and cosmetic dentistry. She founded BrightSmile with a vision of making dental care a positive experience for everyone.',
    image: '/images/doctor-portrait.jpg',
  },
  {
    name: 'Dr. Michael Torres',
    role: 'Orthodontist',
    credentials: 'BDS, MOrth — Orthodontics',
    bio: 'Dr. Torres is a certified Invisalign provider with a passion for creating perfectly aligned smiles. He brings 10 years of orthodontic expertise to the team.',
    image: null,
  },
  {
    name: 'Dr. Aisha Patel',
    role: 'Endodontist',
    credentials: 'BDS, MDS — Endodontics',
    bio: 'Dr. Patel is known for her gentle approach to root canal treatment. She uses microscope-enhanced techniques for precise, painless procedures.',
    image: null,
  },
  {
    name: 'Dr. James Wright',
    role: 'Pediatric Dentist',
    credentials: 'BDS, MPedDent — Pediatric Dentistry',
    bio: 'Dr. Wright has a natural gift for making children feel comfortable. His fun, patient-centered approach makes dental visits an adventure for little ones.',
    image: null,
  },
];

const values = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
    ),
    title: 'Patient-First Care',
    description: 'Every decision we make starts with what\'s best for you. We listen, explain, and never pressure.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
    ),
    title: 'Transparency',
    description: 'No surprises. We provide clear explanations, upfront pricing, and honest recommendations.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
    title: 'Safety & Hygiene',
    description: 'Hospital-grade sterilization protocols, single-use instruments, and the highest standards of infection control.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
    ),
    title: 'Modern Technology',
    description: 'Digital X-rays, intraoral scanners, and 3D imaging for precise diagnoses and better outcomes.',
  },
];

const technology = [
  { name: 'Digital X-Rays', desc: 'Lower radiation, instant results' },
  { name: 'Intraoral Scanners', desc: 'No more messy impressions' },
  { name: '3D CBCT Imaging', desc: 'Precise planning for implants' },
  { name: 'Laser Dentistry', desc: 'Minimally invasive treatments' },
  { name: 'CAD/CAM Restorations', desc: 'Same-day crowns and veneers' },
  { name: 'Air Purification', desc: 'HEPA-filtered clinical air' },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <span className="section-label">About Us</span>
              <h1>Your Dental Health Partners</h1>
              <p>More than a clinic — we&apos;re a team of passionate professionals dedicated to transforming smiles and lives.</p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className={`section ${styles.storySection}`}>
          <div className="container">
            <div className={styles.storyGrid}>
              <div className={styles.storyContent}>
                <span className="section-label">Our Story</span>
                <h2>Built on Compassion, Driven by Excellence</h2>
                <p>
                  BrightSmile Dental was founded with a simple belief: dental care should be a positive, empowering experience. Too many people avoid the dentist out of fear, embarrassment, or past negative experiences.
                </p>
                <p>
                  We set out to change that. From our calming clinic design to our gentle clinical approach, every detail of the BrightSmile experience is crafted to put you at ease and deliver exceptional results.
                </p>
                <p>
                  Over the past 15 years, we&apos;ve served over 10,000 patients and earned a reputation for trustworthy, compassionate care. We invest continuously in the latest technology and training to give you the best outcomes with the most comfort.
                </p>
              </div>
              <div className={styles.storyImageWrapper}>
                <Image
                  src="/images/clinic-interior.jpg"
                  alt="BrightSmile Dental modern reception area"
                  width={600}
                  height={400}
                  quality={85}
                  className={styles.storyImage}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className={`section ${styles.valuesSection}`}>
          <div className="container">
            <div className="section-header">
              <span className="section-label">Our Values</span>
              <h2>What We Stand For</h2>
            </div>
            <div className={styles.valuesGrid}>
              {values.map((v, i) => (
                <div key={i} className={styles.valueCard}>
                  <div className={styles.valueIcon}>{v.icon}</div>
                  <h3>{v.title}</h3>
                  <p>{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className={`section ${styles.teamSection}`}>
          <div className="container">
            <div className="section-header">
              <span className="section-label">Our Team</span>
              <h2>Meet Your Dental Team</h2>
              <p className="section-subtitle">
                Skilled, caring professionals who are passionate about your dental health.
              </p>
            </div>
            <div className={styles.teamGrid}>
              {team.map((member, i) => (
                <div key={i} className={styles.teamCard}>
                  <div className={styles.teamImageWrapper}>
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={300}
                        height={360}
                        quality={85}
                        className={styles.teamImage}
                      />
                    ) : (
                      <div className={styles.teamPlaceholder}>
                        <span>{member.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                    )}
                  </div>
                  <div className={styles.teamInfo}>
                    <h3>{member.name}</h3>
                    <span className={styles.teamRole}>{member.role}</span>
                    <span className={styles.teamCredentials}>{member.credentials}</span>
                    <p>{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology */}
        <section className={`section ${styles.techSection}`}>
          <div className="container">
            <div className="section-header">
              <span className="section-label">Clinic Tour</span>
              <h2>Technology & Facilities</h2>
              <p className="section-subtitle">
                We invest in the latest dental technology for precise diagnostics, comfortable treatments, and outstanding results.
              </p>
            </div>
            <div className={styles.techGrid}>
              {technology.map((tech, i) => (
                <div key={i} className={styles.techCard}>
                  <div className={styles.techIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div>
                    <h4>{tech.name}</h4>
                    <p>{tech.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.tourCta}>
              <p>Want to see our clinic in person?</p>
              <Link href="/book" className="btn btn-primary">
                Schedule a Visit
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
