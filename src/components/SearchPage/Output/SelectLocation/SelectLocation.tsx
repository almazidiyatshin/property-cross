import * as React from 'react';

import '../Output.scss';

export function SelectLocation() {
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
