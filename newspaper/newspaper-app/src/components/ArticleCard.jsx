import React from 'react';

const ArticleCard = ({ 
  category,
  title,
  description,
  author,
  image,
  readTime,
  variant = 'main', // 'main', 'secondary', 'compact'
  onClick
}) => {
  // Main variant - with large image
  if (variant === 'main') {
    return (
      <article className="article-card" onClick={onClick}>
        {image && (
          <div className="article-card-image-wrapper">
            <img 
              src={image} 
              alt={title}
              className="article-card-image"
            />
          </div>
        )}
        {category && (
          <p className="article-card-category">
            {category}
          </p>
        )}
        <h3 className="article-card-title">
          {title}
        </h3>
        {description && (
          <p className="article-card-description">
            {description}
          </p>
        )}
        <div className="article-card-meta">
          {author && <span className="font-sans">By {author}</span>}
          {author && readTime && <span>·</span>}
          {readTime && <span>{readTime}</span>}
        </div>
      </article>
    );
  }

  // Secondary variant - no image, text-focused
  if (variant === 'secondary') {
    return (
      <article className="article-card article-card-secondary" onClick={onClick}>
        {category && (
          <p className="article-card-category">
            {category}
          </p>
        )}
        <h3 className="article-card-title">
          {title}
        </h3>
        <div className="article-card-meta">
          {author && <span className="font-sans">By {author}</span>}
          {author && readTime && <span>·</span>}
          {readTime && <span>{readTime}</span>}
        </div>
      </article>
    );
  }

  // Compact variant - smaller, minimal
  if (variant === 'compact') {
    return (
      <article className="article-card article-card-compact" onClick={onClick}>
        {category && (
          <p className="article-card-category">
            {category}
          </p>
        )}
        <h4 className="article-card-title">
          {title}
        </h4>
        <div className="article-card-meta">
          {author && <span className="font-sans">By {author}</span>}
          {author && readTime && <span>·</span>}
          {readTime && <span>{readTime}</span>}
        </div>
      </article>
    );
  }

  return null;
};

export default ArticleCard;