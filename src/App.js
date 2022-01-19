import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import BreweryDetailsCard from './components/content/BreweryDetailsCard';
import Home from "./components/Home";

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/breweries/:breweryId' element={<BreweryDetailsCard />} />
      </Routes>
    </Router>
  );
}

export default App;
