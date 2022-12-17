import React from 'react';
import { Link } from 'react-router-dom';
import { useColor } from './Contexts/ColorContext';

export default function Home() {
  const { color } = useColor();
  return (
    <div style={{ backgroundColor: color, height: '100vh' }}>
      <div style={{ padding: '5%' }}>
        <h1>Home</h1>
        <p>This is the home page.</p>
        <h1>The currently selected background color is: {color}</h1>
        <h3>
          To Change the background Color: <Link to='/color'>click here</Link>
        </h3>
        To Navigate to another Test Page Click <Link to='/other'> Here</Link>.
        You can see on that page that the background color does not changed.
      </div>
    </div>
  );
}
