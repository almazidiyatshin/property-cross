import React from 'react';

import PropertyListContainer from '../../containers/PropertyListContainer';

import Paginator from './Paginator/Paginator';

export const ResultPage = () => {
  return (
    <div className="result-page">
      <PropertyListContainer />
      <Paginator onClick={null} currentPage={null} totalResults={null} />
    </div>
  );
};
