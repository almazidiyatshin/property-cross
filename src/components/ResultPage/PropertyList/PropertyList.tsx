import React from 'react';

import { PropertyListItem } from '../PropertyListItem/PropertyListItem';

import './propertyList.scss';

export const PropertyList = ({ properties }) => {
  return (
    <ul className="property-list">
      {properties.map((property) => {
        const { id } = property;
        return (
          <li key={id} className="property-list-item">
            <PropertyListItem property={property} />
          </li>
        );
      })}
    </ul>
  );
};
