import React from 'react';
import { connect } from 'react-redux';

import { setCurrentPage, searchCity } from '../../../actions/actions';

import { createPages } from '../../../utils/utils';

import './paginator.scss';

const Paginator = ({ onClick, currentPage, totalResults }) => {
  const propertiesOnPage = 10;
  const totalPages = Math.ceil(totalResults / propertiesOnPage);
  const pages = createPages(totalPages, currentPage);

  return (
    <>
      <div className="pages-btn">
        {pages.map((page, index) => (
          <button
            className={currentPage === page ? 'current-page-btn' : 'page-btn'}
            key={index}
            onClick={() => onClick(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </>
  );
};

const mapStateToProps = ({ currentPage, totalResults, locationName }) => {
  return { currentPage, totalResults, locationName };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (page, locationName) => {
      dispatch(setCurrentPage(page));
      dispatch(searchCity(locationName, page));
    },
  };
};

const mergeProps = (stateProps, dispatchProps) => {
  return {
    ...stateProps,
    ...dispatchProps,
    onClick: (page) => dispatchProps.onClick(page, stateProps.locationName),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Paginator);
