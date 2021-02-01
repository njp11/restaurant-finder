import { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Restaurant from './components/Restaurant';
import loadingImg from '../src/loading2.gif';
import { clearError, addMore } from './actions/restaurantActions';
import Filter from './components/Filter';

const App = ({
  restaurant: {
    restaurants,
    loading,
    displayError,
    results_start,
    place,
    filteredResult,
  },
  addMore,
  clearError,
}) => {
  useEffect(() => {
    if (displayError) {
      setTimeout(() => clearError(), 3000);
    }
    // eslint-disable-next-line
  }, [displayError]);
  const addMoreResults = () => {
    addMore(place, results_start);
  };
  return (
    <div className="App">
      {console.log(process.env.REACT_APP_API_KEY)}
      <Navbar />
      <div className="search-container">
        <Search />
      </div>
      <div className="search-container">
        <Filter />
      </div>
      {displayError && (
        <div className="container text-center">
          <h2 className="errorMsg">{displayError}</h2>
        </div>
      )}
      {loading ? (
        <div className="loader-container">
          <img src={loadingImg} alt="loading" />
        </div>
      ) : filteredResult.length ? (
        <div className="container grid-sm">
          {filteredResult.map((item) => (
            <Restaurant item={item} key={item.restaurant.R.res_id} />
          ))}
        </div>
      ) : (
        <div>
          <div className="container grid-sm">
            {restaurants.length &&
              restaurants.map((item) => (
                <Restaurant item={item} key={item.restaurant.R.res_id} />
              ))}
          </div>
          {restaurants.length && (
            <div className="search-container">
              <button className="btn btn-red" onClick={addMoreResults}>
                Show more
              </button>
              <p className="instruction">
                click the button to load more results
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

App.propTypes = {
  restaurant: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  restaurant: state.restaurant,
});

export default connect(mapStateToProps, { addMore, clearError })(App);
