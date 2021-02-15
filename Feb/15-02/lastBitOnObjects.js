class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  printData() {
    return `Hey ${this.name}, you are too old ${this.age}`;
  }
}
const newBuddy = new Person("Steel", 21);
console.log(newBuddy.printData());

//extends && super
//extends and super()
//extends --> inheriting the methods from the Original class which is being called
//super --> gets access to the parent's properties and methods
class Kid extends Person {
  constructor(_name, _age, _height) {
    super(_name, _age);
    this.height = _height;
  }
  show() {
    return `${this.name} is a kid class from Person`;
  }
}
const zain = new Kid("Zain", 21, 179);
console.log(zain);
//everything inherited can be used as normal
//extends cannot be used as a copy
//extends only belongs to classes

//Date

//UTC coordinated Universal Time
//CET Central European Time
//GMT Greenwich Mean Time
//More about that: www.24timezones.com/#/map
let time = new Date();
console.log(time);
time = new Date().getFullYear();
console.log(time);
time = new Date().getMonth() + 1; //add 1 because otherwise shows month according to index
console.log(time);
time = new Date().getDay(); //day of the week
console.log(time);
time = new Date().getHours(); //Returns the hour (0–23) in the specified date according to local time.
console.log(time);
time = new Date().getMilliseconds();
console.log(time);

//extends (example with date): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends
