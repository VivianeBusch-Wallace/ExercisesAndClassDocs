//callback function
function firstfunction(cb) {
  return cb;
}
function cb() {
  //argument from call comes into cb function
  return "fun";
}
console.log(firstfunction(cb())); //callback function is being called with the argument
//nested function would not require being called
//nested functions are not callback anymore

//ARRAY METHODS:
// always need an array
//.map
//will never affect the original array
const names = ["Zain", "Olga", "Nancy", "Leonard", "Xena"];
// inside map is a callback
//map will take the array, do modifications and come back with exactly the same .length
const heyNames = names.map((item, index) => `Hi ${item}, you live in ${index}`); //you can pass more parameters, but this is enough for now
//the order of map parameters is always: item, index - name can be changed
//often the item parameter is singular of array:
const heyNames2 = names.map((name) => `Hi ${name}`); //you can pass more parameters, but this is enough for now
console.log(heyNames);
//if you just need a loop, then don't use .map

//reduce
//also a callback function
//will never affect the original array
const numArr = [2, 4, 6, 7, 1, 3, 5];
const totalArr = numArr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(totalArr);
//other shorter way of writing
const reducer = (acc, cur) => acc + cur;
//remember if you have curly brackets, then you need return, but if it is just one command you can leave curly brackets out
const totalArr2 = numArr.reduce(reducer, 0);
console.log(totalArr2);

//you can also put in index as parameter but super rare in reduce
//start value is professional to put
//start value can also be an array or an object, for that put [] or {}

//multiply:
const multipliedFromArr = numArr.reduce((acc, cur) => acc * cur, 1);
//starting value needs to be 1 here because if you put it to 0, then
//you multiply by 0, which only makes 0, no matter what
console.log(multipliedFromArr);

//counting letters example as an object:
const countLettersAdvanced = (str) => {
  let arr = str.toLowerCase().split("");
  let result = arr.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});
  return result;
};
console.log(countLettersAdvanced("tree")); //output: { t: 1, r: 1, e: 2 }

//counting letters example as an array:
//finish this on your own!!!

// const countLettersArray = (str) => {
//     let strArr = str.toLowerCase().split("");
//     let result = strArr.reduce((acc,cur)=>{return},[])
// }

//filter
//will always come back as an array
//will never affect the original array

const filterArr = names.filter((name) => name.length > 4);
console.log(filterArr);
//you will never use other parameters in filter

//get every second name from the array:
const filterArr2 = names.filter((name, index) => {
  if (index % 2 === 0) {
    return name[index];
  }
});
console.log(filterArr2);
//find
//will always come back with the first truthy value
//will never affect the original array
const findVal = names.find((item) => item.length > 0); //all names.length are bigger than 0 but
console.log(findVal); //only the first value will come back
const findVal2 = names.find((item) => item.length > 4); //several names.length are bigger than 4 but
console.log(findVal2); //only the first value will come back

//fill
//modifies the original array
//cannot add more values than there are indeces?
const numbers = [22, 49, 66, 79, 10, 3, 5, 101];
numbers.fill(11, 2, 5);
console.log(numbers);
numbers.fill(7, 3);
console.log(numbers);
numbers.fill(0);
console.log(numbers);

//.some()
//is always true or false
//checks whole array
const isEven = (item) => item % 2 == 0;
console.log(numbers.some(isEven));
console.log(numbers.some((item) => item % 3 == 0));
console.log(numbers.some((item) => item > 100)); //false because only one item is true
// for .some there need to be at least 2 values true so that the result is true

//.sort()
//based on UTF-16 languages
//affects
const alpha = ["a", "c", "b", 2, 1, "!", "ß", "ü", "?"];
console.log(alpha.sort());
console.log(alpha); //original array is affected
const words = ["hi", "z", "a", "web"];
const sortedWords = words.sort((a, b) => a.length - b.length); //here - is not math minus but more like "from small to big"
console.log(sortedWords);
const sortedWords2 = words.sort((a, b) => b.length - a.length); //"from big to small"
console.log(sortedWords2);
console.log([11, 2, 22, 1].sort((a, b) => a - b));

//reverse
//affects original array
const flipArr = ["a", "b", "c"];
const flippedArr = flipArr.reverse();
console.log(flippedArr);
console.log(flipArr);

//for ... in

const person = {
  userName: "Zain",
  age: 22,
  add: "H",
};
for (prop in person) {
  console.log(`${prop} : ${person[prop]}`); //cannot use this[prop], would be undefined because "this" has no object reference
}
const [userName] = person;

//for ... of

for (let [key, value] of person) {
  console.log("key: " + key + " value: " + value);
}
