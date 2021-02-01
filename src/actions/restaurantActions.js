import {
  GET_RESTAURANTS,
  SET_LOADING,
  RESTAURANT_ERROR,
  CITY_ERROR,
  FILTER_RESTAURANTS,
  CLEAR_FILTER,
  CLEAR_ERROR,
  GET_MORE,
} from './types';

export const getRestaurants = (city, start = 0) => async (dispatch) => {
  try {
    const config = {
      headers: {
        Accept: 'application/json',
        'user-key': '83cf762fa28744d19097f1338243c7b7',
      },
    };
    const firstRes = await fetch(
      `https://developers.zomato.com/api/v2.1/cities?q=${city}`,
      config
    );
    const cityData = await firstRes.json();
    let data;
    if (cityData.location_suggestions.length) {
      const city_id = await cityData.location_suggestions[0].id;
      const res = await fetch(
        `https://developers.zomato.com/api/v2.1/search?entity_id=${city_id}&entity_type=city&start=${start}`,
        config
      );
      data = await res.json();
      dispatch({
        type: GET_RESTAURANTS,
        payload: data,
      });
    } else {
      dispatch({
        type: CITY_ERROR,
        payload: 'Sorry! We did not find any restaurant for this city',
      });
    }
  } catch (err) {
    dispatch({
      type: RESTAURANT_ERROR,
      payload: 'Sorry something went wrong on our side.',
    });
  }
};

// Filter Restaurants
export const filterRestaurants = (filterText) => (dispatch) => {
  dispatch({
    type: FILTER_RESTAURANTS,
    payload: filterText,
  });
};
// Clear all filters
export const clearFilters = () => (dispatch) => {
  dispatch({
    type: CLEAR_FILTER,
  });
};

// Set Loading
export const setLoading = () => (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });
};

// Clear Error
export const clearError = () => {
  return {
    type: CLEAR_ERROR,
  };
};

// add More results
export const addMore = (city, start) => async (dispatch) => {
  const config = {
    headers: {
      Accept: 'application/json',
      'user-key': process.env.REACT_APP_API_KEY,
    },
  };
  const res = await fetch(
    `https://developers.zomato.com/api/v2.1/search?entity_id=${city}&entity_type=city&start=${start}`,
    config
  );
  const data = await res.json();
  dispatch({
    type: GET_MORE,
    payload: data,
  });
};
