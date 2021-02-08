import * as React from 'react';

import { Header } from './Header/Header';
import { Form } from './Form/Form';
import { Output } from './Output/Output';

import './searchPage.scss';

export const SearchPage = () => (
  <div className="search-page">
    <Header />
    <Form />
    <Output />
  </div>
);
