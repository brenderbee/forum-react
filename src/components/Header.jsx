import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <h1>Reddit Thingy</h1>
      <Link to='/'>Home</Link>
    </div>
  );
}

export default Header;
