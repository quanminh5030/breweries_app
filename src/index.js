import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import BreweryDetailsCard from './components/content/BreweryDetailsCard';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='breweries/:breweryId' element={<BreweryDetailsCard />} />
      </Routes>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);


