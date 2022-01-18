import { styled, TextField } from '@mui/material';
import React from 'react';
import './Header.css';

const CustomizedTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#ccae6e',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#ccae6e',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#ccae6e',
    },
  },
});

const Header = ({ handleSearch }) => {
  const findBrewery = (e) => handleSearch(e.target.value);

  return (
    <div className='containerHeader'>
      <CustomizedTextField
        label='Search Brewery'
        helperText='Search brewery(s) by its basic info (name, type, city, state, etc) '
        onChange={findBrewery}
      />
    </div>
  )
}

export default Header
