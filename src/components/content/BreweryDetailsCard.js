import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Oval from 'react-loading-icons/dist/components/oval';
import { useNavigate, useParams } from 'react-router-dom'
import breweryService from '../../services/breweriesServices';
import './content.css';

const BreweryDetailsCard = () => {
  const { breweryId } = useParams();
  let navigate = useNavigate();

  const [brewery, setBrewery] = useState({});

  console.log(breweryId);

  useEffect(() => {
    breweryService.getBreweryById(breweryId)
      .then(data => {
        const { name, brewery_type, street, city, state, postal_code, country, phone, website_url } = data;
        let object = {
          name, brewery_type, street, city, state, postal_code, country, phone, website_url
        }
        setBrewery(object)
      })
      .catch(err => console.error(err))
  }, [breweryId]);

  const backHomePage = () => {
    navigate('/');
  }

  return (
    <div className='containerCard'>
      <div className='breweryCard'>
        <h3>Details about the brewery</h3>
        {brewery ?
          <div>
            {Object.keys(brewery).map(key =>
              <p key={key}>
                {key}: {brewery[key]}
                {key === 'website_url' ? '.' : ','}
              </p>
            )}
          </div> :
          <Oval stroke="#725448" style={{ margin: 50 }} />
        }
        <Button
          className='backBtn'
          variant='contained'
          onClick={backHomePage}
        >
          Go Back
        </Button>
      </div>
    </div>
  )
}

export default BreweryDetailsCard;
