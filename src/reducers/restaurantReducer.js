import {
  GET_RESTAURANTS,
  SET_LOADING,
  RESTAURANT_ERROR,
  CITY_ERROR,
  FILTER_RESTAURANTS,
  CLEAR_FILTER,
  CLEAR_ERROR,
  GET_MORE,
} from '../actions/types';

const initialState = {
  restaurants: [],
  filteredResult: [],
  results_found: null,
  results_start: 0,
  results_shown: null,
  place: null,
  loading: false,
  error: null,
  displayError: null,
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESTAURANTS:
      const { restaurants, results_found, results_shown } = action.payload;
      const restaurantsData = {
        ...state,
        results_found,
        results_start: state.results_start + 20,
        results_shown,
        restaurants: [...restaurants],
        place: action.payload.restaurants[0].restaurant.location.city_id,
        displayError: null,
        loading: false,
        error: null,
      };
      return restaurantsData;

    case GET_MORE:
      const moreResults = {
        ...state,
        restaurants: [...state.restaurants, ...action.payload.restaurants],
        loading: false,
        displayError: null,
        error: null,
      };
      return moreResults;
    case FILTER_RESTAURANTS:
      const filtered = {
        ...state,
        filteredResult: state.restaurants.filter(
          (item) =>
            item.restaurant.cuisines
              .toLowerCase()
              .includes(action.payload.toLowerCase()) ||
            item.restaurant.name
              .toLowerCase()
              .includes(action.payload.toLowerCase()) ||
            item.restaurant.location.address
              .toLowerCase()
              .includes(action.payload.toLowerCase())
        ),
        displayError: null,
        loading: false,
      };
      return filtered;

    case CLEAR_FILTER:
      const clearF = {
        ...state,
        filteredResult: [],
        loading: false,
        displayError: null,
      };
      return clearF;

    case SET_LOADING:
      const load = {
        ...state,
        loading: true,
      };
      return load;

    case RESTAURANT_ERROR:
      console.error(action.payload);
      const errors = {
        ...state,
        error: action.payload,
        displayError: action.payload,
        results_found: null,
        results_start: 0,
        results_shown: null,
        place: null,
        loading: false,
      };
      return errors;

    case CITY_ERROR:
      console.error(action.payload);
      const cityError = {
        ...state,
        restaurants: [],
        displayError: action.payload,
        results_found: null,
        results_start: 0,
        results_shown: null,
        place: null,
        loading: false,
      };
      return cityError;

    case CLEAR_ERROR:
      const removeError = {
        ...state,
        error: null,
        displayError: null,
        results_found: null,
        results_start: 0,
        results_shown: null,
        place: null,
        loading: false,
      };
      return removeError;

    default:
      return state;
  }
};

export default restaurantReducer;
