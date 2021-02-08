import * as React from 'react';

import './Form.scss';

export function Form() {
  return (
    <>
      <p>
        Use the form below to search for houses to buy. You can search by
        place-name, postcode, or click 'My location', to search in your current
        location.
      </p>
      <input className="input" type="text" placeholder="Type your place" />
      <button className="btn">Go</button>
      <button className="btn">My location</button>
    </>
  );
}
