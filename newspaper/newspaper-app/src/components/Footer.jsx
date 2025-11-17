import React from 'react';

const Footer = ({ 
  companyName = "Barcelona High School",
  year = new Date().getFullYear(),
  sections = null 
}) => {
  const defaultSections = [
    {
      title: 'Sections',
      links: [
        { label: 'News', href: '#' },
        { label: 'Books & Culture', href: '#' },
        { label: 'Fiction & Poetry', href: '#' },
        { label: 'Humor & Cartoons', href: '#' }
      ]
    },
    {
      title: 'More',
      links: [
        { label: 'Customer Care', href: '#' },
        { label: 'Shop', href: '#' },
        { label: 'Newsletters', href: '#' },
        { label: 'Jigsaw Puzzle', href: '#' }
      ]
    },
    {
      title: 'About',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Contact', href: '#' },
        { label: 'Press', href: '#' }
      ]
    },
    {
      title: 'Follow',
      links: [
        { label: 'Facebook', href: '#' },
        { label: 'Twitter', href: '#' },
        { label: 'Instagram', href: '#' },
        { label: 'YouTube', href: '#' }
      ]
    }
  ];

  const footerSections = sections || defaultSections;

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-sections">
          {footerSections.map((section, index) => (
            <div key={index} className="footer-section">
              <h3 className="footer-section-title">
                {section.title}
              </h3>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {year} {companyName}. All rights reserved.
          </p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;