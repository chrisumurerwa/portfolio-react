import React from 'react'
import Data from '../Data/Footer.json'
import '../Styles/Footer.css'

const iconMap = {
  email: (
    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M2 4h20v16H2V4zm2 2v.01L12 13l8-6.99V6H4zm0 2.236V18h16V8.236l-8 6.99-8-6.99z"/></svg>
  ),
  phone: (
    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z"/></svg>
  ),
  location: (
    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/></svg>
  ),
  github: (
    <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.8c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/></svg>
  ),
  linkedin: (
    <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
  ),
  twitter: (
    <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.56c-.89.39-1.84.65-2.84.77a4.93 4.93 0 0 0 2.16-2.72c-.95.56-2 .97-3.13 1.19A4.92 4.92 0 0 0 16.67 3c-2.73 0-4.94 2.21-4.94 4.94 0 .39.04.77.12 1.13C7.69 8.87 4.07 7.13 1.64 4.15c-.43.74-.68 1.6-.68 2.52 0 1.74.89 3.28 2.25 4.18-.83-.03-1.61-.25-2.29-.63v.06c0 2.43 1.73 4.46 4.03 4.92-.42.12-.87.18-1.33.18-.32 0-.63-.03-.93-.09.63 1.97 2.45 3.41 4.6 3.45A9.87 9.87 0 0 1 0 21.54a13.94 13.94 0 0 0 7.56 2.22c9.05 0 14-7.5 14-14v-.64A9.93 9.93 0 0 0 24 4.56z"/></svg>
  )
};

const Footer = () => {
  const { contactInfo, socialMedia, quickLinks, copyright } = Data;
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section contact-info">
          <h2>Contact Info</h2>
          <div className="footer-item"><span className="footer-icon">{iconMap.email}</span>{contactInfo.email}</div>
          <div className="footer-item"><span className="footer-icon">{iconMap.phone}</span>{contactInfo.phone}</div>
          <div className="footer-item"><span className="footer-icon">{iconMap.location}</span>{contactInfo.location}</div>
        </div>
        <div className="footer-section social-media">
          <h2>Social Media</h2>
          <div className="footer-social-icons">
            {socialMedia.map((media) => (
              <a key={media.name} href={media.url} target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label={media.name}>
                {iconMap[media.icon]}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-section quick-links">
          <h2>Quick Links</h2>
          <ul>
  {quickLinks.map((link) => (
    <li key={link.name}>
      <a 
        href={link.url} 
        target={link.url.startsWith('http') ? "_blank" : "_self"} 
        rel={link.url.startsWith('http') ? "noopener noreferrer" : undefined}
      >
        {link.name}
      </a>
    </li>
  ))}
</ul>

        </div>
      </div>
      <div className="footer-bottom">
        <span>{copyright}</span>
      </div>
    </footer>
  );
};

export default Footer
