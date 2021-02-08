import * as React from 'react';

import { Header } from './Header/Header';
import { Form } from './Form/Form';
import { Output } from './Output/Output';

import './SearchPage.scss';

export function SearchPage() {
  return (
    <div className="search-page">
      <Header />
      <Form />
      <Output />
    </div>
  );
}
