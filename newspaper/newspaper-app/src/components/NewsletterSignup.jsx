import React, { useState } from 'react';

const NewsletterSignup = ({ 
  title = "Sign up for our newsletter",
  description = "Get the best of The BHS Post in your in-box every day.",
  buttonText = "Subscribe",
  onSubmit,
  showBorder = true,
  disclaimer = "By signing up, you agree to our User Agreement and Privacy Policy"
}) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(email);
    } else {
      console.log('Newsletter signup:', email);
    }
    setEmail('');
  };

  return (
    <section className={`newsletter-signup ${showBorder ? 'with-border' : ''}`}>
      <div className="newsletter-content">
        <h2 className="newsletter-title">{title}</h2>
        <p className="newsletter-description">{description}</p>
        
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input 
            type="email" 
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="newsletter-input"
          />
          <button 
            type="submit"
            className="newsletter-button"
          >
            {buttonText}
          </button>
        </form>
        
        {disclaimer && (
          <p className="newsletter-disclaimer">{disclaimer}</p>
        )}
      </div>
    </section>
  );
};

export default NewsletterSignup;