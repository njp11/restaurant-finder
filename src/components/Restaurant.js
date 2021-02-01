import React from 'react';

const Restaurant = ({ item }) => {
  return (
    <div className="card">
      <div className="icon-container">
        <i className="fas fa-store-alt fa-2x"></i>
      </div>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>{item.restaurant.name}</td>
          </tr>
          <tr>
            <td>Cuisine:</td>
            <td>{item.restaurant.cuisines}</td>
          </tr>
          <tr>
            <td>Address:</td>
            <td>{item.restaurant.location.address}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Restaurant;
