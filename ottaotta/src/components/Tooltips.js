import React from 'react';

const Tooltip = ({ text, visible, position = { top: '40px', right: '10px' } }) => {
  if (!visible) return null;

  return (
    <div
      style={{
        position: 'absolute',
        backgroundColor: 'white',
        border: '1px solid grey',
        borderRadius: '5px',
        padding: '10px',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
        ...position,
      }}
    >
      {text}
    </div>
  );
};

export default Tooltip;
