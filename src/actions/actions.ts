import {
  FETCH_PROPERTIES_REQUEST,
  FETCH_PROPERTIES_SUCCESS,
  FETCH_PROPERTIES_FAILURE,
  UPDATE_LOCATION_NAME,
  PROPERTY_REQUEST,
  SET_CURRENT_PAGE,
} from './../constants/constants';

const propertiesLoaded = (newProperties, totalResults) => {
  return {
    type: FETCH_PROPERTIES_SUCCESS,
    payload: {
      properties: newProperties,
      totalResults: totalResults,
    },
  };
};

const propertiesRequested = () => {
  return {
    type: FETCH_PROPERTIES_REQUEST,
  };
};

const propertiesError = (error) => {
  return {
    type: FETCH_PROPERTIES_FAILURE,
    payload: error,
  };
};

export const getLocationName = (locationName) => {
  return {
    type: UPDATE_LOCATION_NAME,
    payload: locationName,
  };
};

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: currentPage,
  };
};

export const searchCity = (locationName, currentPage) => {
  const normalizeLocationName = locationName
    .toLowerCase()
    .split('')
    .map((item) => (item === ',' ? '_' : item))
    .join('')
    .split(' ')
    .join('');

  const request = {
    url: `/locations/${normalizeLocationName}/properties?page=${currentPage}`,
    onStart: propertiesRequested,
    onSuccess: propertiesLoaded,
    onError: propertiesError,
  };
  return {
    type: PROPERTY_REQUEST,
    request,
  };
};
