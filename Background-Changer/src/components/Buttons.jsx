import React, { useState } from 'react';

const Buttons = ({ colors, onColorChange }) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 text-center">
      {colors.map((color) => (
        <button
          key={color}
          className={`p-2 rounded-md m-2 `}
          onClick={() => onColorChange(color)}
          style={{backgroundColor: color, color: 'white'}}
        >
          {color.charAt(0).toUpperCase() + color.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default Buttons;

