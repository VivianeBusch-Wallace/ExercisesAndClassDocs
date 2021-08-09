const axios = require("axios");
const url = require("url");

class OpenWeatherClient {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = "http://api.openweathermap.org/data/2.5/";
  }
  get(endpoint) {
    const URL =
      url.resolve(this.baseURL, endpoint) +
      `&units=metric&appid=${this.apiKey}`;
    return axios
      .get(URL)
      .then((res) => res.data)
      .catch((err) => Promise.reject(err.response.data.message));
  }
  async getWeather(city, country) {
    let endpoint = `weather?q=${city}`; // getting endpoint here, in this case city and if the user gives: country
    if (country) {
      endpoint += `,${country}`; // only if user gives country, then add it
    }
    return await this.get(endpoint); // await operator is for promise must be used in async function
  }
}
// export class OpenWeatherClient
module.exports = OpenWeatherClient;

// if you want to use asynchronous then use async

// endpoint is for example city and country of url
// api url:
// http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${this.apiKey}

// little other thing: how to convert between F° and C°
// °C to °F: Divide by 5, then multiply by 9, then add 32°,
// F to °C: Deduct 32, then multiply by 5, then divide by 9
