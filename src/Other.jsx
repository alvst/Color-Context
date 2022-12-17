import React from 'react';
import { Link } from 'react-router-dom';

export default function Other() {
  return (
    <div style={{ padding: '5%' }}>
      <h1>Other</h1>
      <p>Background color remains white regardless of what color you select</p>
      <h2>How it works</h2>
      <p>
        The background color is stored in a Color Context (ColorContext.jsx).
        When you modify the color in ColorContext, it sets the color state
        stored in ColorContext. This color is set as the background color in
        Home and Color. When you navigate, to home, the data in ColorContext is
        still able to referenced since Home is within the color context
        provider. This is a really basic example of how context works but its
        applicable to other uses of contexts like user authentication, Storing
        User Data, etc. I made it as a way to learn how to use contexts and only
        loading the data once instead of pinging the server multiple times to
        request data.
      </p>
      <Link to='/'>Home</Link>
    </div>
  );
}
