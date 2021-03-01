import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

export const Header = () => (
  <div className="header">
    <Link to="/" className="link">
      <p className="logo">PropertyCross</p>
    </Link>
    <Link to="/result" className="link">
      <p>Result page</p>
    </Link>
    <button className="btn-faves">Faves</button>
  </div>
);
