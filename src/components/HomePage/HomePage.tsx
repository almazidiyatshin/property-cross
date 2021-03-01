import React from 'react';

import Form from './Form/Form';

export const HomePage = () => (
  <div className="home-page">
    <p>
      Use the form below to search for houses to buy. You can search by
      place-name, postcode, or click 'My location', to search in your current
      location.
    </p>
    <Form onChange={null} onSubmit={null} />
  </div>
);
