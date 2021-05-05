// create objects with data >>
const recipes = [
  {
    id: 1,
    title: "Sourdough",
    ingredients: ["water", "flour", "salt", "yeast"],
    image:
      "https://amyinthekitchen.com/wp-content/uploads/2018/11/Beginners-Sourdough-Bread-AITK.jpg",
  },
  {
    id: 2,
    title: "Baguettes",
    ingredients: ["water", "flour", "salt", "yeast"],
    image:
      "https://www.thespruceeats.com/thmb/mCTU2pQ6A-WZ7qQqxH4C8gSbR9E=/1428x1428/smart/filters:no_upscale()/GettyImages-636741221-e5442b2f0b3a4d33a26ebf7deb237fed.jpg",
  },
  {
    id: 3,
    title: "Sliced bread",
    ingredients: ["water", "flour"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdfaG5Cv4oOjewDMyFitnCpsOBH3ifA5fkycKUy0_y_4Vv2P4IkA",
  },
];

let data = JSON.stringify(recipes);
export { data };
// if you have more data to export you can just add it with a comma into the curly brackets of export

// my own examples >>
const people = [
  {
    name: "Mirco",
    age: 23,
    married: false,
    occupation: "repairman",
  },
  {
    name: "Sandra",
    age: 27,
    married: false,
    occupation: "secretary",
  },
  {
    name: "Jason",
    age: 48,
    married: true,
    occupation: "adventurer",
  },
  {
    name: "Lyra",
    age: 33,
    married: false,
    occupation: "national geographic photographer",
  },
];

const math = {
  algebra: "easy",
  geometry: "easy",
  fomula: "hard",
  probability: "hard",
};

export { people, math };
