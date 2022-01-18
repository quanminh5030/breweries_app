import { Pagination, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import BreweryBasicCard from './BreweryBasicCard';
import './content.css';

const Content = ({ breweries }) => {
  const [slicedBreweries, setSlicedBreweries] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPage, setNumOfPage] = useState(0);

  useEffect(() => {
    let length = Math.ceil(breweries.length / 6);
    setNumOfPage(length);
    setPage(1);
  }, [breweries])

  useEffect(() => {
    let slicedBreweries = breweries.slice(page * 6 - 6, page * 6);
    setSlicedBreweries(slicedBreweries);
  }, [page, breweries]);

  const handleChange = (_, value) => setPage(value);

  return (
    <>
      <div className='contentContainer'>
        {slicedBreweries.map(brewery =>
          <BreweryBasicCard key={brewery.id} brewery={brewery} />
        )}
      </div>

      <div className='pagination'>
        <Stack spacing={2}>
          <Pagination
            count={numOfPage} page={page}
            variant='outlined' size='large'
            onChange={handleChange}
          />
        </Stack>
      </div>
    </>
  )
}

export default Content
