// WHILE LOOPS
// let i = 0;
// while(i < 5){
//     // true the value of
//     console.log(i)
//     i++;
// }

// let number = 0;
// let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jac"];
// while (number < 5) {
//   if (someArray[0] === "Louiza") {
//     console.log("Found her!");
//     console.log(someArray);
//   } else {
//     someArray.shift();
//   }
//   number++
// }

// let maxValue = 5;
// let correct = true;
// while(correct){
//     let ranNumber = Math.floor(Math.random()*maxValue) + 1;
//     console.log(ranNumber);
//     let guess = prompt("Guess a Number 1 - " + maxValue)
//     guess = Number(guess);
//     if(guess === ranNumber){
//         correct = false;
//         console.log("You got it " + ranNumber);
//     } else if (guess > ranNumber) {
//         console.log("Too high");
//     } else {
//         console.log("Too Low");
//     }
// }

// DO WHILE LOOPS
// let i = 0;
// do{
//     console.log(i)
//     i++;
// } while (i < 10)

// ======================== Practice exercise 5.2 ====================================== //
// let counter = 0;
// let step = 5;
// while (counter < 100) {
//     console.log("Counter:", counter);
//     counter += step;
// }

// ======================== For Of Loops ====================================== //
// let names = ["taha" , "Ali" , "bilal" , "saad"]
// for(let name of names){
//     console.log(name)
// }

// ======================== For Loops ====================================== //

// for(let i = 0; i<names.length; i++){
//     console.log(names[i]);
// }

// ======================== Pratice 5.6 ====================================== //

// let emptyArray = [];

// for (let i = 0; i < 10; i++) {
//     emptyArray.push(i + 1);
//   }

// console.log(emptyArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let i = 0; i < emptyArray.length; i++) {
//   console.log(emptyArray[i]);
// }

// for (const value of emptyArray) {
//   console.log(value);
// }

// ======================== Loops and objects and for in loop ====================================== //

// let car = {
//   model: "Golf",
//   make: "Volkswagen",
//   year: 1999,
//   color: "black",
// };
// for (let prop in car) {
//   console.log(car[prop]);
// }

// ======================== Pratice 5.7 ====================================== //

// OBJECT

// let student = {
//   name : "taha",
//   result : 15,
//   language : "Urdu",
// };

// // FOR IN LOOP

// for(let key in student){
//   console.log(`Property name: ${key}, ProPerty value : ${student[key]}`);
// }

// // Array

// let student1 = ["taha" , 15 , "Urdu"];

// // FOR LOOPS

// for(let i = 0; i < student1.length; i++){
//   console.log(student1[i])
// }
// ======================== Looping over objects by converting to an array ============================ //

// let car = {
//   model: "Golf",
//   make: "Volkswagen",
//   year: 1999,
//   color: "black",
//  };

// let arrKeys = Object.keys(car)
// console.log(arrKeys);

// let arrValues = Object.values(car)
// console.log(arrValues);

// for(let values of arrValues){
//   console.log(values)
// }

// ======================== Object.values(nameOfObject) ============================ //

// let car = {
//   model: "Golf",
//   make: "Volkswagen",
//   year: 1999,
//   color: "black",
// };

// for (let key of Object.values(car)) {
//   console.log(key);
// }

// let arrKeys = Object.keys(car);
// for (let i = 0; i < arrKeys.length; i++) {
//   console.log(arrKeys[i] + ": " + car[arrKeys[i]]);
// }

// ========================  Object.entries()  ============================ //

// let car = {
//   model: "Golf",
//   make: "Volkswagen",
//   year: 1999,
// };

// let arrArray = Object.entries(car);
// console.log(arrArray);

// for (const [key, value] of Object.entries(car)) {
//   console.log(key, ":", value);
//  }

// ========================  Break and Continue ============================ //

// let cars = [
//   {
//   model: "Golf",
//   make: "Volkswagen",
//   year: 1999,
//   color: "black",
//   },
//   {
//   model: "Picanto",
//   make: "Kia",
//   year: 2020,
//   color: "red",
//   },
//   {
//   model: "Peugeot",
//   make: "208",
//   year: 2021,
//   color: "black",
//   },
//   {
//   model: "Fiat",
//   make: "Punto",
//   year: 2020,
//   color: "black",
//   }
//  ];

//  for (let i = 0; i < cars.length; i++) {
//   if (cars[i].year >= 2020) {
//   if (cars[i].color === "black") {
//   console.log("I have found my new car:", cars[i]);
//   break;
//   }
//   }
//  }

//  ================================ Function =============================== //

// function name(){

// }

// function sayHello() {
//   let name = prompt("What's your name? ");
//   console.log("Hello", name);
//  }

// sayHello();
// sayHello();
// sayHello();

//  ================================ Parameters and arguments =============================== //

// function texter(a , b){
//   console.log(a)
//   console.log(b)
// }
// let name = prompt("Enter your name")
// let age = prompt("age");

// texter(age, name);

//  ================================ Partice Exercise 6.1 =============================== //\

// 1)
// let a = add(1, 2)
// function add(a, b) {
//   return a + b;
// }
// console.log(a);

// // 2)
// let num1 = 1;
// let num2 = 2;

// // 3)

// let sum = add(num1, num2);
// console.log(sum);

// // 4)

// let sum2 = add(3, 4);
// console.log(sum2);

//  ================================ Partice Exercise 6.2 =============================== //

// const adjectives = ['Mango', 'apple', 'Orange', 'graph', 'lemon', 'Pineapple', 'Melon', 'Kiwi', 'cherry', 'banaana', 'Papaya'];

// function generateRandomDescription(name) {

// const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];

//   console.log(`The ${name} is a ${randomAdjective} Fruit.`);
// }

// const name = prompt('What is your name?');
// generateRandomDescription(name);

//  ================================ Default or unsuitable parameter =============================== //

// function greeting(number = 1){
//     console.log(number)
//     console.log(number * 10)
// }
// greeting(+prompt("Enter your Number"))

// function addTwoNuber(x = 12 , y = 10){
//     console.log(x + y);
// }
// addTwoNuber(2, 2);

//  ================================ Special functions and operators =============================== //

// function tester(a, b){
//     let result = a + b
//     return result;
// }
// let a = tester(2, 2)
// console.log("a" , a)
// let a = 2;
// let b = 3;
// let c = (a,b) => (a + b)
// console.log((a, b) => (a + b))

//  ================================ Arrow functions =============================== //

// let array = (x , y) => {
//     let name = prompt("Enter the name");
//     console.log(name);
//     return x+y;
// }
// console.log(array(2,3))

//  ================================ Spread operator =============================== //

// let arr1 = ["zubair" , "junaid"];
// let arr2 = ['asim', 'ahmed', 234,...arr1]
// console.log(arr2)

// function taha(x, y){
//     console.log(x + y);
// }
// let arr = [5 , 9 , 9];
// taha(...arr)

//  ================================ Rest parameter =============================== //

// function someFunction(param1, ...param2) {
//     console.log(param1, param2);
//    }
//    someFunction("hi", "there!", "How are you?");

//  ================================ Pratice Exercise 6.4 =============================== //

// let arr1 = [];

// for (let i = 0; i < 10; i++) {
//   const firstValue = i * 5;
//   const secondValue = i * i;

//   let smitFunction = (a, b) => a + b;

//   let Anas = smitFunction(firstValue, secondValue);

//   arr1.push(Anas);
// }

// console.log(arr1);

//  ================================ Variable scope in functions =============================== //

// let is blockScope
//  var is functionalScope

//  ================================ Const scope =============================== //
// const is blockScope

//  ================================ Global Scope =============================== //
// let x = "global";
// function doingStuff(x) {
//   console.log(x);
// }
// doingStuff("param");
//  ================================ Immediately invoked function expression =============================== //
// (function () {
//     console.log("Anas!");
// })();
//  ================================ Recursive functions =============================== //
// function getRecursive(nr) {
//     console.log(nr);
//     getRecursive(--nr);
//    }
//    getRecursive(3);

//  ================================ Pratice Excercise 6.5 =============================== //

// HOME WORK

//  ================================  Pratice Exercise 6.6  =============================== //

// function check(a){
//     console.log(a)
//     if(a === 0){

//         return 1
//     }

//     return a * check(--a)

//     }
//     console.log(check(5))

// function caculater(nr){
//     console.log(nr)
//       if(nr === 0){
//         return 1
//     } else {
//         return nr * caculater(--nr)
//     }
// }
// console.log(caculater(5));

//  ================================ Nested functions  =============================== //

// function doOuterFunctionStuff(nr) {
//     console.log("Outer function");
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x) {
//         console.log(x + 7);
//         console.log("I can access outer variables:", nr);
//   }
// }
// doOuterFunctionStuff(2);

//  ================================ Pratice Excercise 6.7 =============================== //

// HOME WORK

//  ================================ Anonymous functions =============================== //

// let functionVariable = function () {
//     console.log("Not so secret though.");
//    };

//    functionVariable();

//  ================================ Pratice Excercise 6.8 =============================== //

// HOME WORK

//  ================================ Function callbacks =============================== //

// let functionVariable = function () {
//   console.log("Not so secret though.");
// };

// function doFlexibleStuff(executeStuff) {
//   executeStuff();
//   console.log("Inside doFlexibleStuffFunction.");
// }

// doFlexibleStuff(functionVariable);

//  ================================ Introduction to built-in JavaScript methods =============================== //

//     const date = new Date("2000-01-17T16:45:30");
// const [month, day, year] = [
//   date.getMonth(),
//   date.getDate(),
//   date.getFullYear(),
// ];
// // [0, 17, 2000] as month are 0-indexed
// const [hour, minutes, seconds] = [
//   date.getHours(),
//   date.getMinutes(),
//   date.getSeconds(),
// ];
// // [16, 45, 30]

//  ================================ Date methods & Creating dates =============================== //

// let date = new Date();
// console.log(date);

// millisecond

// let now2 = Date.now();
// console.log(now2);

// let milliDate = new Date(1000);
// console.log(milliDate);

// let stringDate = new Date("Sat Jun 05 2021 12:40:12 GMT+0200");
// console.log(stringDate);

// let specificDate = new Date(2022, 1, 10, 12, 10, 15, 100);
// console.log(specificDate);

//  ================================ Methods to get and set the elements of a date =============================== //

// let d = new Date();
// console.log("Day of week:", d.getDay());
// console.log("Day of month:", d.getDate());
// console.log("Month:", d.getMonth());
// console.log("Year:", d.getFullYear());
// console.log("Seconds:", d.getSeconds());
// console.log("Milliseconds:", d.getMilliseconds());
// console.log("Time:", d.getTime());

//  ================================ How to Add AM/PM in Time with JavaScript =============================== //

// let currentDate = new Date();
// let am_pm = currentDate.toLocaleTimeString();
// console.log(am_pm);

//  ================================ Converting a date to a string =============================== //

// console.log(d.toDateString());

//  ================================ Practice exercise 8.7 =============================== //

// let dateObject = new Date();
// console.log(dateObject);
// let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let day = dateObject.getDate();
// let year = dateObject.getFullYear();
// let month = dateObject.getMonth();
// let monthName = monthNames[month - 1];
// console.log(`The date is ${day} ${monthName} ${year}. The month is ${monthName}.`);

//  ================================  =============================== //
// let caps = "HI HOW ARE YOU?";
// let fixed_caps = caps.toLocaleLowerCase();
// console.log(fixed_caps);
// let first_captial = fixed_caps.charAt(0).toLocaleLowerCase().concat
// (fixed_caps.slice(1))
// console.log(first_captial)

// let mixedCaseString = `
// This is a string with mixed case words.
// Some words are uppercase, and some words are lowercase.
// `;

// let convertedString = mixedCaseString.replace("This", "THIS");

//  ================================ 8.5 =============================== //
// // 1.
// let over = "I Hate Javascrcipt";
// let lowercase = over.toLowerCase();
// console.log(over)

// // 2.
// let vowels = ["a", "e", "i", "o", "u"];
// console.log(vowels)

// // 3.
// let vowel = ["a", "e", "i", "o", "u"];
// for (let i = 0; i < vowel.length; i++) {
//   console.log(vowel[i]);
// }

// 4.

//  ================================ internet solve this question =============================== //

// let inputString = "I love Javascript!";
// let vowels = ['a', 'e', 'i', 'o', 'u'];

// for (let i = 0; i < vowels.length; i++) {
//   let vowel = vowels[i];
//   let index = i.toString();
//   inputString = inputString.replaceAll(vowel, index);
// }
// console.log(inputString);

//  ================================ this question in sir solve  =============================== //

// let val = "I love Javascript";
// val = val.toLowerCase();
// let vowels = ["a", "e", "i", "o", "u"];
// for(let i = 0; i < vowels.length; i++){
//     val = val.replaceAll(vowels[i], i);
// }
// console.log(val);

//  ================================ toFixed =============================== //

// let x = 1.23456;
// let newX = x.toFixed(3);
// console.log(x, newX);
//  ================================ Finding the highest and lowest number max(), min() =============================== //

// let highest = Math.max(2, 56, 12, 1, 233, 4);
// console.log(highest);
// let lowest = Math.min(2, 56, 12, 1, 233, 4);
// console.log(lowest);
// let highestOfWords = Math.max("hi", 3, "bye");
// console.log(highestOfWords);

//  ================================ Square root and raising to the power of (pow) (sqrt) =============================== //

// let result = Math.sqrt(64);
// console.log(result);

// let result2 = Math.pow(5, 3);
// console.log(result2);

//  ================================ Turning decimals into integers (round) =============================== //

// let x = 6.78; decmial check the rule
// let y = 5.34;
// console.log("X:", x, "becomes", Math.round(x));
// console.log("Y:", y, "becomes", Math.round(y));

//  ================================ celi(increase) and floor(same value) =============================== //

//  ================================ Practice exercise 8.6 =============================== //
// 1.
// let x = Math.PI;
// console.log(x);

// 2.
// let y = 5.7;
// console.log(Math.ceil(5.7))
// console.log(Math.floor(5.7));
// console.log(Math.round(5.7));

// 3.
// console.log(Math.floor(Math.random() * 100) + 1);

// 4.
// let randomNumber0To10 = Math.floor(Math.random() * 11);

// 5.
// let randomNumber1To10 = Math.floor(Math.random() * 10) + 1;

// 6.
// let randomNumber1To100 = Math.floor(Math.random() * 100) + 1;

// 7.
// function generateRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
//   for (let i = 0; i < 100; i++) {
//     const randomNumber = generateRandomNumber(1, 100);
//     console.log(randomNumber);
//   }

// function ranNum(min, max) {
//     return Math.floor(Math.random()*(max - min + 1))
// }

//  ================================ Array All Method =============================== //

// "constructor", "toLocaleString", "toString", "valueOf", "length", "concat", "copyWithin", "entries", "every", "fill", "filter", "find", "findIndex", "forEach", "includes", "indexOf", "join", "keys", "lastIndexOf", "map", "pop", "push", "reduce", "reduceRight", "reverse", "shift", "slice", "some", "sort", "splice", "unshift"

//  ================================ String All Method =============================== //

// "constructor", "charAt", "charCodeAt", "codePointAt", "concat", "endsWith", "includes", "indexOf", "lastIndexOf", "localeCompare", "match", "normalize", "padEnd", "padStart", "repeat", "replace", "search", "slice", "split", "startsWith", "subarray", "substring", "toLocaleLowerCase", "toLocaleUpperCase", "toLowerCase", "toUpperCase", "trim", "trimEnd", "trimStart", "valueOf"

// let arr = [anas, 4, "hello", 5.6, true];

//  ================================ filter Method =============================== //

// let arr = [2, 5, 5, new Date(), true];
// function checkString(element, index) {
//  return typeof element === "string";
// }
// let filterArr = arr.filter(checkString);
// console.log(filterArr);

// FOREACH UNdefined kar ta hau

//  ================================ Mapping the values of an array =============================== //

// let arr = [1, 2, 3, 4];
// let mapped_arr = arr.map(x => x + 1);
// console.log(mapped_arr);
// let arr = [1, 2, 3, 4];
// let mapped_arr = arr.map((anas , index) => {
//   console.log(anas + 1)
// });
// console.log(mapped_arr);
// Create an array of names of people, including duplicates.

//  ================================ Mapping the values of an array =============================== //

// let names = ["Ali", "bilal", "Ali", "taha", "Bob"];
// let uniqueNames = names.filter(function(name, index, array) => {
//       console.log(`Index: ${index}, Value: ${name}`);
//       return array.indexOf(name) === index;
//     });
//     console.log(uniqueNames);
//  ================================ Practice exercise 8.2 =============================== //

// let arr = ["lie", "bilal", "tlis", "taha", "bilal"];
// let arr2 = arr.filter((value, index, array) => {
//   console.log(value, index, array.indexOf(value));
//   return array, indexOf(value) === index;
// });
// console.log(arr2);

//  ================================ Practice exercise 8.3 =============================== //

// 1.
// let numbers = [1, 2, 3, 4, 5];

// // 2.
// let doubled = numbers.map(function (number) {
//     return number * 2;
// });
// console.log(doubled);

// // 3.
// let doubledNumbers1 = numbers.map((number) => number * 2);
// console.log(doubledNumbers1);

//  ================================ Practice exercise 8.4 =============================== //

// Home Work

//  ================================ Practice exercise 8.5 =============================== //

//  =============================== =============================== //
