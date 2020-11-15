import React, { useState } from 'react';
import MaterialIcon from 'material-icons-react';

import './header.css'

function Header() {
  return (
    <header>
      <ul>
        <li>
          <a href="/">DashFood</a>
        </li>

        <li className="items">
          <input 
            className="search" 
            type="text" 
            placeholder="Pesquisar" 
          ></input>
          <a href="/"><MaterialIcon icon="search" /></a>
          <a href="/"><MaterialIcon icon="dashboard" /></a>
          <a href="/"><MaterialIcon icon="notifications" /></a>
          <a href="/"><MaterialIcon icon="login" /></a>
        </li>
      </ul>
    </header>
  );
}

export default Header;