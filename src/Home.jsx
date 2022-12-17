import React from 'react';
import { Link } from 'react-router-dom';
import { useColor } from './Contexts/ColorContext';

export default function Home() {
  const { color } = useColor();
  return (
    <div style={{ backgroundColor: color }}>
      <div>
        <h1>Home</h1>
        <p>This is the home page.</p>
        <h3>
          Link to change the color:
          <Link to='/color'>Color</Link>
        </h3>
      </div>
      <Link to='/other'>Other</Link>
      <h1>{color}</h1>Home
    </div>
  );
}
