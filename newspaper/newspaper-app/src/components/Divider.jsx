import React from 'react';

const Divider = ({ 
  variant = 'normal', // 'thin', 'normal', 'thick', 'dotted'
  spacing = 'normal', // 'tight', 'normal', 'loose'
  color = 'gray' // 'gray', 'black'
}) => {
  const classes = [
    'divider',
    `spacing-${spacing}`,
    `variant-${variant}`,
    `color-${color}`
  ].join(' ');

  return <div className={classes}></div>;
};

export default Divider;