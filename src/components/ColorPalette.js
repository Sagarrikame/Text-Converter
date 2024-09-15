import React from 'react';
import './ColorPalette.css';

const ColorPalette = ({ colors }) => {
  const radius = 150; // Radius of the circle
  const center = 200; // Center point of the circle
  const angleStep = (2 * Math.PI) / colors.length; // Angle between each color

  const getColorPosition = (index) => {
    const angle = index * angleStep;
    const x = center + radius * Math.cos(angle);
    const y = center + radius * Math.sin(angle);
    return { x, y };
  };

  return (
    <div className="color-palette">
      {colors.map((color, index) => {
        const { x, y } = getColorPosition(index);
        return (
          <div
            key={index}
            className="color"
            style={{
              backgroundColor: color,
              left: `${x}px`,
              top: `${y}px`,
            }}
          />
        );
      })}
    </div>
  );
};

export default ColorPalette;
