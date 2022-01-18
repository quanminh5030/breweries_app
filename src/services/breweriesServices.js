import axios from "axios";

const baseUrl = 'https://api.openbrewerydb.org/breweries';

const getAllBreweries = () => {
  return axios.get(baseUrl)
    .then(res => res.data)
}

const getBreweryById = id => {
  return axios.get(`${baseUrl}/${id}`)
    .then(res => res.data)
}

const breweryService = {
  getAllBreweries: getAllBreweries,
  getBreweryById: getBreweryById
}

export default breweryService;