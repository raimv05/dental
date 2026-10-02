'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`} id="site-header">
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="BrightSmile Dental Home">
          <svg className={styles.logoIcon} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="currentColor" opacity="0.1" />
            <path d="M20 8C16.5 8 14 10 13 13C12 16 12 19 13 22C14 25 16 28 18 31C19 32.5 20 33 20 33C20 33 21 32.5 22 31C24 28 26 25 27 22C28 19 28 16 27 13C26 10 23.5 8 20 8Z" fill="currentColor" />
            <path d="M17 14C17 14 18.5 16 20 16C21.5 16 23 14 23 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <div className={styles.logoText}>
            <span className={styles.logoName}>BrightSmile</span>
            <span className={styles.logoTagline}>Dental Care</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav} aria-label="Main Navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className={styles.headerActions}>
          <a href="tel:+1234567890" className={styles.phoneLink} aria-label="Call us">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>(123) 456-7890</span>
          </a>
          <Link href="/book" className={`btn btn-primary ${styles.bookBtn}`} id="header-book-btn">
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`${styles.menuToggle} ${isMobileMenuOpen ? styles.menuOpen : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          id="mobile-menu-toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <nav className={styles.mobileNav}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/book" className={`btn btn-primary ${styles.mobileBookBtn}`} onClick={() => setIsMobileMenuOpen(false)}>
            Book Appointment
          </Link>
        </nav>
      </div>
    </header>
  );
}
