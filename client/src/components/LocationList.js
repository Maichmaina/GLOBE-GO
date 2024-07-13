import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LocationsList.css'; 

const LocationList = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch('/traveler/locations')
      .then(response => response.json())
      .then(data => setLocations(data))
      .catch(error => console.error('Error fetching locations:', error));
  }, []);

  return (
    <div className="location-list">
      <h2>Locations</h2>
      <ul>
        {locations.map(location => (
          <li key={location.id} className="location-item">
            <h3>{location.name}</h3>
            <p>{location.description}</p>
            <Link to={`/location/${location.id}`} className="view-details">View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationList;