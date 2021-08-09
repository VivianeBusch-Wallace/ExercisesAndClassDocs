const OpenWeatherClient = require("./weather-client");
const myKey = require("../../config");

const API_KEY = myKey.apiKey;

module.exports = async function weather(city, country) {
  const client = new OpenWeatherClient(API_KEY);
};
