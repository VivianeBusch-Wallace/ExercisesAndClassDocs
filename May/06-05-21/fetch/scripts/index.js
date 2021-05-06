// copied frrom Hadi https://github.com/Fbw-48/live-coding/blob/main/may/06-05/fetch/scripts/index.js

// Fetch

function fetchTextFile() {
  fetch("./plain.txt")
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      document.querySelector(".result").innerHTML = data;
    })
    .catch((err) => console.log(err));
}
function fetchJsonFile() {
  fetch("./data.json")
    .then((response) => response.json())
    // .json() is a method!!!
    .then((data) => {
      console.log(data);
      let userCard = "<h2>All Users </h2>";
      data.forEach((user) => {
        let { id, name, city, age, photo } = user;
        userCard += `
          <div class='card' id=${id}>
          <div class='avatar'>${photo}</div>
        ${name}, <span>${age}</span> old, and I live in <span>${city}</span>
          </div>
          `;
      });
      document.querySelector(".result").innerHTML = userCard;
    })
    .catch((err) => console.log(err));
  // if the source path is wrong then it won't even show the error message
}

// API
//  Application Programming Interface

// https://jsonplaceholder.typicode.com/

// we will use
// https://jsonplaceholder.typicode.com/photos
function fetchApi() {
  fetch("https://jsonplaceholder.typicode.com/photos/?_limit=5") // "/?_limit=5" limits the data to 5 objects, BUT it is unique to this API provider
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let userCard = "<h2>Images API response </h2>";
      data.forEach((img) => {
        let { albumId, id, title, url, thumbnailUrl } = img;
        userCard += `
          <div id=${id}>
          <img src=${thumbnailUrl} >
          <h3>${title}</h3>
          <img src=${url} alt=${title}>
          </div>
          `;
      });
      document.querySelector(".result").innerHTML = userCard;
      //   userCard = document.querySelector(".result").innerHTML;
    })
    .catch((err) => console.log(err));
}

// PRACTICE
// API project time
// please use https://jsonplaceholder.typicode.com/
// to fetch
// todos
// and
// comments

function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((user) => {
        document.querySelector(".result").innerHTML += `<h2>${user.name}</h2>
        <h3>${user.username}</h3>`;
      });
    })
    .catch((error) => {
      console.log(`Something went wrong: ${error}`);
      document.querySelector(".result").innerHTML =
        "Something went wrong, try again.";
    });
}
