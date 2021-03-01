import React from 'react';

import './propertyListItem.scss';

export const PropertyListItem = ({ property }) => {
  const { title, priceFormatted, imgUrl } = property;
  return (
    <>
      <img className="item-img" src={imgUrl} alt={title} />
      <p className="item-title">{title}</p>
      <p className="item-priceFormatted">{priceFormatted}</p>
    </>
  );
};
