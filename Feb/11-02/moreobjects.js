// Hadi's: https://github.com/Fbw-48/live-coding/blob/main/feb/11-09/index.js

//destructuring objects as function parameters
//destructing my object inside my parameters
function fun(num, { name = "defaultName" }) {
  //heed: here the default value is written with = !!! not with colon!
  console.log(num);
  let firstName = { name };
  console.log(firstName);
}
fun(2, { age: 22 });

//getter method and setter method:
//getter and setter should use the same function name
const userData = {
  firstName: "Steel",
  lastName: "Man",
  age: 21,
  single: true,
  get fullName() {
    //no parameter because not working with arguments
    console.log(
      `${this.firstName} ${this.lastName}, is ${this.age}, and is ${this.single}`
    );
  },
  set fullName(str) {
    let arr = str.split(" ");
    console.log(arr);
    this.firstName = arr[0];
    this.lastName = arr[1];
    this.age = arr[2];
    this.single = arr[3];
  },
};

//getter
userData.fullName; // getting object data
//can only work with data from objects?

//can the () also be in the call?

//setter
userData.fullName = "Hadi Nsreeny 31 true"; // filling the object
userData.fullName; // getting new data

//constructor
//this must be an old fashioned function!!! Cannot be ES6!
//recruiter question: "can you build me a constructor function?"
//constructor is a reserved word in JS, cannot be renamed
//when we build a template, then we capitalize the first letter of the function name
//here: constructor = template
function Person(name, age, act) {
  this.name = name; //you are turning whatever input you get into objects
  this.age = age;
  this.act = act;
  this.printOut = function () {
    console.log(
      `Hey ${this.name}, you are ${this.age} years old and activities: ${this.act}`
    );
  };
}
let zain = new Person("Zain", 21, ["sleep", "eat"]);
console.log(zain);
zain.printOut();
const olga = new Person("Olga", 40, "no activities");
olga.printOut();

//isDivisble function explained
//divisible works with integers (remainder), dividable means you can get decimals

//for in object
//if you want to loop the entire object
//does this work for arrays???
for (let prop in zain) {
  console.log(`zain.${prop}:${zain[prop]}`);
}

let family = [
  ["Zain", 22, "teacher"],
  ["Olga", 40, "chef"],
];
for (let i = 0; i < family.length; i++) {
  for (let j = 0; j < family[i].length; j++) {
    console.log(family[i][j]);
  }
}
//what does a nested .map look like???
//for of needs an array
//if you use for of with obj you get "obj is not iterable" error!

//forEach with arrays
//outputs the elements from each index
//nested forEach:
family.forEach((arr) => arr.forEach((element) => console.log(element)));

//for of arr
for (let [key, val] of Object.entries(zain)) {
  console.log(`${key}:${val}`);
}
//because Object.entries(zain) gives you an array [key, value] [key, value] [key, value]
//[key,val] from the loop are just references/parameters

//class
//always start with capital letter
//there can be classes without a constructor
class Animals {
  // latinName: "animus", //does not work because the class Animals is a function
  constructor(_kind, _hometown) {
    //constructor parameters have underscores
    this.kind = _kind;
    this.hometown = _hometown;
  }
  display() {
    console.log(`this very cute ${this.kind} lives in ${this.hometown}`);
  }
}

const cat = new Animals("tabby", "LA");
cat.display();
console.log(cat);
const newPet = new Animals("golden retriever", "NY");
newPet.display();
console.log(Animals); //outputs:[Function: Animals]

newPet.displayAge = () => {
  console.log("Hi, displayAge is a new property/method for newPet");
};
newPet.displayAge();
console.log(newPet);

class Color {
  constructor() {
    this.name = "";
    this.temperature = 0;
  }
}
const red = new Color();
console.log(red);
red.name = "RED";
red.temperature = 322;
console.log(red);

console.log("------TV APP------");
// TV app
class TV {
  constructor(_brand, _channels = 1, _volume = 5) {
    this.brand = _brand;
    this.channel = _channels;
    this.volume = _volume;
  }
  increaseVolume() {
    if (this.volume < 20) {
      this.volume++;
    }
    console.log(this.volume);
  }
  decreaseVolume() {
    if (this.volume > 0) {
      this.volume--;
    } else {
      console.log("This is already the lowest volume setting");
    }
    console.log(this.volume);
  }
  resetVolumeAndChannel() {
    this.channel = 1;
    this.volume = 5;
  }
  randomChannel() {
    this.channel = Math.floor(Math.random() * 100) + 1;
    console.log(`You are watching channel ${this.channel}`);
  }
  display() {
    console.log(this.brand, this.channel, this.volume);
  }
}
const niceTV = new TV("Panasonic", 50, 20);
console.log(niceTV);
niceTV.increaseVolume(); //does not increase because it is at maximum
niceTV.decreaseVolume();
niceTV.decreaseVolume();
niceTV.decreaseVolume();

niceTV.display();
const samsung = new TV("Samsung");
console.log(samsung);
//
//
//=========================
console.log("===============Practice==============");
//Practice:
// Create a constructor function that receives product details
// (productName,prise,inventory)
// then build a method to display this data in clear outputted form
// build two products using your constructor function
// i.e : (Pepsi,2.33,2232) -> Form item Pepsi selling price 2.33€. we have 2232 in our store
function CheckInventory(product, price, amountInInventory) {
  this.productName = product;
  this.price = price;
  this.inInventory = amountInInventory;
  this.printMethod = function () {
    console.log(
      `Item: ${this.productName}, price: ${this.price}, we only have ${this.inInventory} of these left in stock. Buy now!`
    );
  };
}
let pepsi = new CheckInventory("Pepsi", 2.33, 2232);
pepsi.printMethod();
let coke = new CheckInventory("Coca - Cola", 1.99, 1120);
coke.printMethod();

// get & set, create a car object that uses getter and setter method to get and set the following (modelName,modelNumber,engineCapacity)
// first get the data
// then set the data
const car = {
  modelName: "Audi",
  modelNumber: "A6",
  engineCapacity: 300,
  get fullCarInfo() {
    return `Your ${this.modelName} of the model ${this.modelNumber} has ${this.engineCapacity} horsepower!`;
  },
  set fullCarInfo(arr) {
    this.modelName = arr[0];
    this.modelNumber = arr[1];
    this.engineCapacity = arr[2];
    return `Your new car  ${this.modelName} of the model ${this.modelNumber} has ${this.engineCapacity} horsepower!`;
  },
};
console.log(car.fullCarInfo);
car.fullCarInfo = ["Opel", "someNumber", 256];
console.log(car.fullCarInfo);

//====================================================

//!!! I need to practice writing old fash funct, swtich cases, object funct by heart

//small tidbit for the future:
// if (!user.id) {
//   console.log("User ID missing");
// }
// //can be shorter:
// console.assert(user.id, "User ID is missing");
