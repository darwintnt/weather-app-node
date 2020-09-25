const argv = require('./config/yargs').argv;
const { getCoordinatesCity, getWeather } = require('./config/api');


const getData = async (city) => {

  try {

    const coordinates = await getCoordinatesCity(city);

    const weather = await getWeather(coordinates.lat, coordinates.lon);

    return `El clima de ${city} es de ${weather.temp} ºC`;

  } catch (error) {
    return `No se pudo determinar el clima para ${city}`;
  }

};

getData(argv.city)
  .then(console.log)
  .catch(console.log);

