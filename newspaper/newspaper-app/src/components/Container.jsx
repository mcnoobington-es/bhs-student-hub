import React from 'react';

const Container = ({ 
  children,
  size = 'default', // 'sm', 'default', 'lg', 'xl', 'full'
  padding = true,
  className = ''
}) => {
  const sizeClass = `container-${size}`;
  const classes = `container ${sizeClass} ${className}`.trim();

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Container;