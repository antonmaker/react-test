import React from 'react';

/**
 * Shape component.
 * Has two supported forms: square(default), cicrle.
 * Defined through `props.options.shape = ''|'square'|'circle'`.
 */
const Shape = ({ options, onClick }) => {
  const style = {
    backgroundColor: options.color,
    width: options.width + 'px',
    height: options.width + 'px',
    top: options.y + 'px',
    left: options.x + 'px',
  };

  return (
    <div
      className={"Shape " + options.shape}
      style={style}
      onClick={onClick}
    />
  );
}

export default Shape
