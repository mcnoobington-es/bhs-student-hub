import React, { useState, useEffect } from 'react';

const Header = ({ siteName = "The BHS Post", navItems = [] }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const defaultNavItems = [
    { label: 'News', href: '#' },
    { label: 'Art & Culture', href: '#' },
    { label: 'Writing & Poetry', href: '#' },
    { label: 'Features & Interviews', href: '#' },
    { label: 'Sports & Extracurriculurs', href: '#' },
    { label: 'Advice & Well-Being', href: '#' },
  ];

  const navigation = navItems.length > 0 ? navItems : defaultNavItems;

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className={`header-masthead ${scrolled ? 'scrolled' : ''}`}>
        <h1 className={`header-title ${scrolled ? 'scrolled' : ''}`}>
          {siteName}
        </h1>
      </div>
      
      <nav className="header-nav">
        <ul>
          {navigation.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;