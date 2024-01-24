// screen.jsx
import React from 'react';

const Screen = ({ color }) => {
  return (
    <div className="h-screen w-screen" style={{ backgroundColor: color }}>
    </div>
  );
};

export default Screen;
