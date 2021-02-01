import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRestaurants, setLoading } from '../actions/restaurantActions';

const Search = ({
  restaurant: { results_start },
  getRestaurants,
  setLoading,
}) => {
  const [text, setText] = useState('');

  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading();
    getRestaurants(text, results_start);
  };
  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search by city..."
          value={text}
          onChange={onChange}
        />
        <input type="submit" value="search" className="btn btn-light" />
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

export default connect(mapStateToProps, { getRestaurants, setLoading })(Search);
