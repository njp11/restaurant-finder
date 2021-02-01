import {
  GET_RESTAURANTS,
  SET_LOADING,
  RESTAURANT_ERROR,
  CITY_ERROR,
  FILTER_RESTAURANTS,
  CLEAR_FILTER,
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
        restaurants: [...state.restaurants, ...restaurants],
        place: action.payload.restaurants[0].restaurant.location.city,
        displayError: null,
        loading: false,
        error: null,
      };
      return restaurantsData;

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
        loading: false,
      };
      return errors;

    case CITY_ERROR:
      console.error(action.payload);
      const cityError = {
        ...state,
        displayError: action.payload,
        loading: false,
      };
      return cityError;

    default:
      return state;
  }
};

export default restaurantReducer;
