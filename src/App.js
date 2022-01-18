import React, { useEffect, useState } from "react";
import './App.css';
import Content from "./components/content/Content";
import Header from "./components/header/Header";
import breweryService from "./services/breweriesServices";

function App() {
  const [breweries, setBreweries] = useState([]); //to store initial data
  const [filteredBreweries, setFilterBreweries] = useState([]); //to store filter data

  useEffect(() => {
    breweryService.getAllBreweries()
      .then(data => {
        setBreweries(data);
        setFilterBreweries(data);
      })
      .catch(err => console.error(err))
  }, []);

  const handleSearch = userInput => {
    //filter based on initial data
    let filteredBreweries = breweries.filter(item => {
      return Object.values(item).join('').toLowerCase().includes(userInput.toLowerCase());
    })

    setFilterBreweries(filteredBreweries);
  }

  return (
    <div className="container">
      <Header handleSearch={handleSearch} />
      <Content breweries={filteredBreweries} />
    </div>
  );
}

export default App;
