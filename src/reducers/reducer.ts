import {
  FETCH_PROPERTIES_REQUEST,
  FETCH_PROPERTIES_SUCCESS,
  FETCH_PROPERTIES_FAILURE,
  UPDATE_LOCATION_NAME,
  SET_CURRENT_PAGE,
} from '../constants/constants';

const initialState = {
  locationName: '',
  loading: true,
  properties: [],
  error: null,
  fetch: false,
  currentPage: 1,
  totalResults: 1,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROPERTIES_REQUEST:
      return {
        ...state,
        loading: true,
        properties: [],
        error: null,
        fetch: true,
      };
    case FETCH_PROPERTIES_SUCCESS:
      return {
        ...state,
        loading: false,
        properties: action.payload.properties,
        error: null,
        fetch: false,
        totalResults: action.payload.totalResults,
      };
    case FETCH_PROPERTIES_FAILURE:
      return {
        ...state,
        loading: false,
        properties: [],
        error: action.payload,
        fetch: false,
      };
    case UPDATE_LOCATION_NAME:
      return {
        ...state,
        locationName: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};
