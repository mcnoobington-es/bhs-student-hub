import React from 'react';
import ArticleCard from './ArticleCard';

const ArticleGrid = ({ 
  articles = [],
  columns = 3, // 2, 3, or 4
  gap = 'normal', // 'tight', 'normal', 'loose'
  title,
  variant = 'main' // passed to ArticleCard
}) => {
  if (articles.length === 0) {
    return null;
  }

  const gapClass = `gap-${gap}`;
  const columnsClass = `columns-${columns}`;

  return (
    <section>
      {title && (
        <h2 className="article-grid-title">{title}</h2>
      )}
      <div className={`article-grid ${columnsClass} ${gapClass}`}>
        {articles.map((article, index) => (
          <ArticleCard
            key={article.id || index}
            category={article.category}
            title={article.title}
            description={article.description}
            author={article.author}
            image={article.image}
            readTime={article.readTime}
            variant={variant}
            onClick={article.onClick}
          />
        ))}
      </div>
    </section>
  );
};

export default ArticleGrid;