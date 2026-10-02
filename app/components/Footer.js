import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer} id="site-footer">
        {/* CTA Banner */}
        <div className={styles.ctaBanner}>
          <div className={styles.ctaContent}>
            <h2>Ready for a Brighter Smile?</h2>
            <p>Schedule your appointment today and take the first step towards optimal dental health.</p>
            <div className={styles.ctaButtons}>
              <Link href="/book" className="btn btn-primary btn-lg">
                Book Appointment
              </Link>
              <a href="tel:+1234567890" className="btn btn-outline-white btn-lg">
                Call (123) 456-7890
              </a>
            </div>
          </div>
          <div className={styles.ctaDecor}></div>
        </div>

        {/* Main Footer */}
        <div className={styles.footerMain}>
          <div className="container">
            <div className={styles.footerGrid}>
              {/* Brand Column */}
              <div className={styles.footerBrand}>
                <div className={styles.footerLogo}>
                  <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="20" fill="currentColor" opacity="0.15" />
                    <path d="M20 8C16.5 8 14 10 13 13C12 16 12 19 13 22C14 25 16 28 18 31C19 32.5 20 33 20 33C20 33 21 32.5 22 31C24 28 26 25 27 22C28 19 28 16 27 13C26 10 23.5 8 20 8Z" fill="currentColor" />
                  </svg>
                  <span>BrightSmile Dental</span>
                </div>
                <p className={styles.footerDescription}>
                  Providing compassionate, modern dental care for the whole family. Your smile is our passion.
                </p>
                <div className={styles.socialLinks}>
                  <a href="#" aria-label="Facebook" className={styles.socialLink}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                  </a>
                  <a href="#" aria-label="Instagram" className={styles.socialLink}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
                  </a>
                  <a href="#" aria-label="Google" className={styles.socialLink}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className={styles.footerCol}>
                <h4 className={styles.footerColTitle}>Quick Links</h4>
                <ul className={styles.footerLinks}>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/services">Services</Link></li>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                  <li><Link href="/book">Book Appointment</Link></li>
                </ul>
              </div>

              {/* Services */}
              <div className={styles.footerCol}>
                <h4 className={styles.footerColTitle}>Our Services</h4>
                <ul className={styles.footerLinks}>
                  <li><Link href="/services#general">General Dentistry</Link></li>
                  <li><Link href="/services#cosmetic">Cosmetic Dentistry</Link></li>
                  <li><Link href="/services#orthodontics">Orthodontics</Link></li>
                  <li><Link href="/services#implants">Dental Implants</Link></li>
                  <li><Link href="/services#emergency">Emergency Care</Link></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className={styles.footerCol}>
                <h4 className={styles.footerColTitle}>Contact Us</h4>
                <div className={styles.contactInfo}>
                  <div className={styles.contactItem}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span>123 Smile Avenue,<br />Healthcare City, HC 12345</span>
                  </div>
                  <div className={styles.contactItem}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.61.7 2.36a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.75.34 1.55.57 2.36.7A2 2 0 0 1 22 16.92z"/></svg>
                    <a href="tel:+1234567890">(123) 456-7890</a>
                  </div>
                  <div className={styles.contactItem}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    <div>
                      <span>Mon – Fri: 8:00 AM – 6:00 PM</span><br />
                      <span>Sat: 9:00 AM – 2:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.footerBottom}>
          <div className="container">
            <div className={styles.footerBottomContent}>
              <p>&copy; {new Date().getFullYear()} BrightSmile Dental. All rights reserved.</p>
              <div className={styles.footerBottomLinks}>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Accessibility</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Bar */}
      <div className={styles.mobileBottomBar} id="mobile-bottom-bar">
        <a href="tel:+1234567890" className={styles.mobileBarBtn}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.61.7 2.36a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.75.34 1.55.57 2.36.7A2 2 0 0 1 22 16.92z"/></svg>
          <span>Call</span>
        </a>
        <a href="https://wa.me/1234567890" className={styles.mobileBarBtn} target="_blank" rel="noopener noreferrer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.108-1.132l-.288-.171-2.988.784.8-2.916-.188-.3A7.964 7.964 0 014 12a8 8 0 1116 0 8 8 0 01-8 8z"/></svg>
          <span>WhatsApp</span>
        </a>
        <Link href="/book" className={`${styles.mobileBarBtn} ${styles.mobileBarBtnPrimary}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <span>Book</span>
        </Link>
      </div>
    </>
  );
}
