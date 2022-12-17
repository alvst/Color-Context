import React, { useContext } from 'react';

const ColorContext = React.createContext();

export function useColor() {
  return useContext(ColorContext);
}

export function ColorProvider({ children }) {
  const [color, setColor] = React.useState('#FFFFFF');

  function setNewColor(newColor) {
    setColor(newColor);
    console.log(newColor);
  }

  const value = {
    setNewColor,
    color,
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
}
