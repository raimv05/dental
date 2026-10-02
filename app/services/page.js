import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Our Services — BrightSmile Dental',
  description: 'Explore our comprehensive dental services including general dentistry, cosmetic treatments, orthodontics, implants, root canal, pediatric care, and emergency services.',
};

const services = [
  {
    id: 'general',
    icon: '🦷',
    title: 'General & Preventive Dentistry',
    tagline: 'The foundation of a healthy smile',
    description: 'Regular check-ups and preventive care are the key to maintaining excellent oral health throughout your life. Our general dentistry services catch problems early and keep your smile in top condition.',
    treatments: ['Comprehensive dental exams', 'Professional teeth cleaning', 'Dental fillings', 'Fluoride treatments', 'Sealants', 'Gum disease treatment', 'Oral cancer screening', 'Night guards & mouth guards'],
    whoItsFor: 'Everyone! We recommend visits every 6 months for all ages.',
    startingFrom: '$75',
  },
  {
    id: 'cosmetic',
    icon: '✨',
    title: 'Cosmetic Dentistry',
    tagline: 'Transform your smile with confidence',
    description: 'Want a smile you\'re proud to show off? Our cosmetic treatments can enhance the color, shape, size, and alignment of your teeth for a naturally beautiful result.',
    treatments: ['Professional teeth whitening', 'Porcelain veneers', 'Dental bonding', 'Smile makeover design', 'Tooth reshaping & contouring', 'Gum contouring'],
    whoItsFor: 'Adults looking to enhance the appearance of their smile.',
    startingFrom: '$200',
  },
  {
    id: 'orthodontics',
    icon: '😁',
    title: 'Orthodontics',
    tagline: 'Straight teeth for a perfect bite',
    description: 'Crooked or misaligned teeth affect more than appearance — they impact bite function and oral health. We offer modern orthodontic solutions for teens and adults alike.',
    treatments: ['Traditional metal braces', 'Clear ceramic braces', 'Invisalign clear aligners', 'Retainers', 'Early intervention orthodontics', 'Bite correction'],
    whoItsFor: 'Teens and adults with misaligned teeth, overcrowding, or bite issues.',
    startingFrom: '$3,000',
  },
  {
    id: 'implants',
    icon: '🔩',
    title: 'Implants & Restorative',
    tagline: 'Rebuild and restore your natural smile',
    description: 'Missing or damaged teeth? Our restorative solutions look, feel, and function like natural teeth. Dental implants are the gold standard for permanent tooth replacement.',
    treatments: ['Dental implants (single & multiple)', 'Implant-supported dentures', 'Dental crowns', 'Bridges', 'Full & partial dentures', 'Inlays & onlays'],
    whoItsFor: 'Patients with missing, damaged, or severely decayed teeth.',
    startingFrom: '$1,200',
  },
  {
    id: 'root-canal',
    icon: '🏥',
    title: 'Root Canal / Endodontics',
    tagline: 'Save your tooth, stop the pain',
    description: 'Modern root canal treatment is virtually painless and can save a tooth that might otherwise need to be extracted. Don\'t let fear keep you from relief — our gentle approach makes it easy.',
    treatments: ['Root canal therapy', 'Endodontic retreatment', 'Apicoectomy', 'Pulp capping', 'Cracked tooth treatment', 'Emergency toothache relief'],
    whoItsFor: 'Patients experiencing tooth pain, infection, or deep decay reaching the nerve.',
    startingFrom: '$600',
  },
  {
    id: 'pediatric',
    icon: '👶',
    title: 'Pediatric Dentistry',
    tagline: 'Gentle care for growing smiles',
    description: 'We believe positive dental experiences in childhood set the foundation for a lifetime of healthy habits. Our child-friendly team makes every visit fun and stress-free.',
    treatments: ['Children\'s dental exams', 'Pediatric cleanings', 'Fluoride treatments', 'Dental sealants', 'Space maintainers', 'Habit counseling', 'Early orthodontic evaluation'],
    whoItsFor: 'Children from age 1 through their teenage years.',
    startingFrom: '$60',
  },
  {
    id: 'emergency',
    icon: '🚨',
    title: 'Emergency Dental Care',
    tagline: 'When you need us most — we\'re here',
    description: 'Dental emergencies don\'t wait, and neither do we. Contact us immediately for urgent issues like severe pain, knocked-out teeth, broken restorations, or swelling.',
    treatments: ['Same-day emergency appointments', 'Severe toothache relief', 'Knocked-out tooth treatment', 'Broken or chipped tooth repair', 'Lost filling or crown repair', 'Abscess drainage', 'Post-surgical complications'],
    whoItsFor: 'Anyone experiencing dental pain, trauma, or urgent oral health issues.',
    startingFrom: 'Call for pricing',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Banner */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <span className="section-label">What We Offer</span>
              <h1>Our Dental Services</h1>
              <p>
                From routine cleanings to complex restorations, our team delivers personalized care using the latest techniques and technology.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className={`section ${styles.servicesList}`}>
          <div className="container">
            {services.map((service, i) => (
              <div key={service.id} id={service.id} className={`${styles.serviceBlock} ${i % 2 !== 0 ? styles.serviceBlockReversed : ''}`}>
                <div className={styles.serviceContent}>
                  <div className={styles.serviceHeader}>
                    <span className={styles.serviceEmoji}>{service.icon}</span>
                    <div>
                      <h2 className={styles.serviceTitle}>{service.title}</h2>
                      <p className={styles.serviceTagline}>{service.tagline}</p>
                    </div>
                  </div>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <div className={styles.serviceDetails}>
                    <div className={styles.treatmentsList}>
                      <h4>Treatments Include:</h4>
                      <ul>
                        {service.treatments.map((t, j) => (
                          <li key={j}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--color-primary)"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.serviceInfo}>
                      <div className={styles.infoCard}>
                        <h5>Who It&apos;s For</h5>
                        <p>{service.whoItsFor}</p>
                      </div>
                      <div className={styles.infoCard}>
                        <h5>Starting From</h5>
                        <p className={styles.price}>{service.startingFrom}</p>
                      </div>
                      <Link href="/book" className="btn btn-primary" style={{ width: '100%' }}>
                        Book This Service
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
