import React from 'react';

const FeaturedArticle = ({ 
  category,
  title,
  description,
  author,
  image,
  readTime,
  imagePosition = 'right', // 'left' or 'right'
  onClick
}) => {
  const isImageRight = imagePosition === 'right';

  return (
    <article className="featured-article">
      <div className={`featured-article-content ${isImageRight ? 'image-right' : ''}`}>
        {category && (
          <p className="featured-article-category">
            {category}
          </p>
        )}
        <h2 
          className="featured-article-title"
          onClick={onClick}
        >
          {title}
        </h2>
        {description && (
          <p className="featured-article-description">
            {description}
          </p>
        )}
        <div className="featured-article-meta">
          {author && <span className="font-sans">By {author}</span>}
          {author && readTime && <span>·</span>}
          {readTime && <span>{readTime}</span>}
        </div>
      </div>
      <div className={`featured-article-image ${isImageRight ? 'image-right' : ''}`}>
        <img 
          src={image} 
          alt={title}
          onClick={onClick}
        />
      </div>
    </article>
  );
};

export default FeaturedArticle;