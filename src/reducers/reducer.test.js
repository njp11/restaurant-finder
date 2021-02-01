import { GET_RESTAURANTS } from '../actions/types';
import restaurantReducer from './restaurantReducer';
import { mockData } from '../utils';

describe('Restaurant Reducer', () => {
  it('Should return default state', () => {
    const newState = restaurantReducer(undefined, {});
    expect(newState).toEqual({
      displayError: null,
      error: null,
      filteredResult: [],
      loading: false,
      place: null,
      restaurants: [],
      results_found: null,
      results_shown: null,
      results_start: 0,
    });
  });
  it('Should return new state if received type', () => {
    const data = mockData;
    const newState = restaurantReducer(undefined, {
      type: GET_RESTAURANTS,
      payload: data,
    });
    expect(newState).toEqual({
      results_found: data.results_found,
      results_start: data.results_start + 20,
      results_shown: data.results_shown,
      restaurants: data.restaurants,
      filteredResult: [],
      place: data.restaurants[0].restaurant.location.city,
      displayError: null,
      loading: false,
      error: null,
    });
  });
});
