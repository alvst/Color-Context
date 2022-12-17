import React, { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useColor } from './Contexts/ColorContext';

export default function Color() {
  const { color, setNewColor } = useColor();
  const colorInput = useRef();
  return (
    <div style={{ backgroundColor: color, height: '100vh' }}>
      <input
        type='color'
        ref={colorInput}
        onChange={() => setNewColor(colorInput.current.value)}
      ></input>
      Color Go Home <NavLink to='/'>Home</NavLink>
    </div>
  );
}
