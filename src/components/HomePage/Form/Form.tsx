import React from 'react';
import { connect } from 'react-redux';

import { getLocationName, searchCity } from '../../../actions/actions';

import './form.scss';

const Form = ({ onSubmit, onChange }) => {
  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <input
          onChange={onChange}
          className="input"
          type="text"
          placeholder="Type your place"
        />
        <button type="submit" className="btn">
          Go
        </button>
        <button type="button" className="btn">
          My location
        </button>
      </form>
    </>
  );
};

const mapStateToProps = ({
  locationName,
  properties,
  loading,
  error,
  currentPage,
}) => {
  return {
    locationName,
    properties,
    loading,
    error,
    currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (event) => dispatch(getLocationName(event.target.value)),
    onSubmit: (event, locationName, currentPage) => {
      event.preventDefault();
      dispatch(searchCity(locationName, currentPage));
    },
  };
};

const mergeProps = (stateProps, dispatchProps) => {
  return {
    ...stateProps,
    ...dispatchProps,
    onSubmit: (event) =>
      dispatchProps.onSubmit(
        event,
        stateProps.locationName,
        stateProps.currentPage
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Form);
