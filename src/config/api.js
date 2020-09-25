const axios = require('axios');

const APIKEY = 'c360862ba8a4c52dea058a0b18bfce58';

const getCoordinatesCity = async (city) => {

  const instance = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${ encodeURI(city) }&appid=${APIKEY}`,
  });

  const response = await instance.get();

  const data = response.data;

  return {
    city: data.name,
    lat: data.coord.lat,
    lon: data.coord.lon,
    cod: data.cod
  };

};


const getWeather = async (lat, lon) => {

  const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`);

  const main = weather.data.main;

  return {
    temp: main.temp,
    temp_min: main.temp_min,
    temp_max: main.temp_max,
  };

};

module.exports = {
  getCoordinatesCity,
  getWeather
};

