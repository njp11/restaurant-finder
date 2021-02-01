import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  filterRestaurants,
  getRestaurants,
  setLoading,
  clearFilters,
} from '../actions/restaurantActions';

const Search = ({
  restaurant: { results_start },
  setLoading,
  filterRestaurants,
  clearFilters,
}) => {
  const [text, setText] = useState('');

  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading();
    filterRestaurants(text);
  };
  const handleClick = () => {
    clearFilters();
    setText('');
  };
  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="filter by name, address or cuisines..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="filter"
          className="btn btn-light btn-filter"
        />
        <input
          type="button"
          value="Clear filter"
          className="btn btn-red btn-clear"
          onClick={handleClick}
        />
      </form>
    </div>
  );
};

Search.propTypes = {
  restaurant: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  restaurant: state.restaurant,
});

export default connect(mapStateToProps, {
  getRestaurants,
  setLoading,
  filterRestaurants,
  clearFilters,
})(Search);
