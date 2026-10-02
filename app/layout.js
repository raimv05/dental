import './globals.css';

export const metadata = {
  title: 'BrightSmile Dental — Modern Family & Cosmetic Dentistry',
  description:
    'BrightSmile Dental offers comprehensive dental care including general, cosmetic, orthodontic, and emergency services. Book your appointment online today.',
  keywords: 'dentist, dental clinic, cosmetic dentistry, teeth whitening, dental implants, family dentist',
  openGraph: {
    title: 'BrightSmile Dental — Modern Family & Cosmetic Dentistry',
    description: 'Comprehensive dental care for the whole family. Book online.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
