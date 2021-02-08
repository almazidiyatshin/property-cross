import * as React from 'react';

import './Header.scss';

export function Header() {
  return (
    <div className="menu">
      <h1 className="title">PropertyCross</h1>
      <button className="btn-faves">Faves</button>
    </div>
  );
}
