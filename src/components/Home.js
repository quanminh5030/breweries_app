import React, { useEffect, useState } from "react";
import breweryService from "../services/breweriesServices";
import Header from './header/Header';
import Content from './content/Content';
import '../App.css';


const Home = () => {
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
  )
}

export default Home
