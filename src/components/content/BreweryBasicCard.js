import React from 'react';
import { Link } from 'react-router-dom';
import './content.css';

const BreweryBasicCard = ({ brewery }) => {
  return (
    <div className='card'>
      <div className='basicInfo'>
        <p>Name: {brewery.name}</p>
        <p>Brewery_type: {brewery.brewery_type}</p>
        <p>City: {brewery.city}</p>
      </div>

      <div className='linkDetails'>
        <Link to={`/breweries/${brewery.id}`}>
          View Details
        </Link>
      </div>
    </div>
  )
}

export default BreweryBasicCard
