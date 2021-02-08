import * as React from 'react';

import '../Output.scss';

export function RecentSearches() {
  return (
    <>
      <h2 className="title-output-area">Recent searches:</h2>
      <div className="output-area">
        <ul className="list">
          <li className="list-item">Search 1</li>
          <li className="list-item">Search 2</li>
          <li className="list-item">Search 3</li>
        </ul>
      </div>
    </>
  );
}
