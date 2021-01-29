import React from 'react';

import './App.scss';

import Img from './img/React.png';

export const App = () => {
  return (
    <div>
      <p>Hello, world!</p>
      <img src={Img} />
    </div>
  );
};
