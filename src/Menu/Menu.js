import React from 'react';

import {
    Link
  } from "react-router-dom";

function Menu() {
  return (
    <div class="menu">
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="https://google.com">Google</Link></li>
    </ul>
</div>
  );
}

export default Menu;