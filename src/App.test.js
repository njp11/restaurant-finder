import App from './App';
import { testStore, mockData } from './utils';
import { shallow } from 'enzyme';

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      restaurant: {
        restaurants: mockData.restaurants,
        filteredResult: [],
        results_found: mockData.results_found,
        results_start: mockData.results_start,
        results_shown: mockData.results_shown,
        place: mockData.restaurants[0].restaurant.location.city,
        loading: false,
        error: null,
        displayError: null,
      },
    };
    wrapper = setUp(initialState);
  });

  it('Should reder without errors', () => {
    const component = wrapper.find('div.App');
    expect(component.length).toBe(1);
  });
});
