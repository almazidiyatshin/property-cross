import React from 'react';
import { Component } from 'react';

import '../homePage.scss';

export class SelectLocation extends Component {
  render() {
    return (
      <>
        <h2 className="title-output-area">Please, select a location below:</h2>
        <div className="output-area">
          <ul className="list">
            <li className="list-item">Location 1</li>
            <li className="list-item">Location 2</li>
            <li className="list-item">Location 3</li>
          </ul>
        </div>
      </>
    );
  }
}
