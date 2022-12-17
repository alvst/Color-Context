import React, { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useColor } from './Contexts/ColorContext';

export default function Color() {
  const { color, setNewColor } = useColor();
  const colorInput = useRef();
  return (
    <div style={{ backgroundColor: color, height: '100vh' }}>
      <div style={{ padding: '5%' }}>
        <h3 style={{ marginTop: '0px' }}>
          To change the background color click the box below:{' '}
        </h3>
        <div
          style={
            {
              // border: 'solid black 5px',
            }
          }
        >
          <input
            type='color'
            style={{
              boxShadow: '0 0 0 5px white, 0 0 0 10px black',
              width: '50px',
              height: '50px',
            }}
            ref={colorInput}
            onChange={() => setNewColor(colorInput.current.value)}
          />
        </div>
        <p>
          Go <NavLink to='/'>Home</NavLink> to see that the changes are also
          reflected on the home page.
        </p>
      </div>
    </div>
  );
}
