// ======================================== Chater 12 JavaScript Intermedite ================================== //
// ======================================== Regular expressions ================================== //

// let text = "I love JavaScript!";
// console.log(text.match(/javascript/i));

// let text = "d";
// console.log(text.match(/[a-d]/));

// let text = "C";
// console.log(text.match(/[a-zA-Z0-9]/));

// let text = "äé!";
// console.log(text.match(/[a-zA-Z0-9]/));  // null

// ======================================== Searching and replacing strings ================================== //

// let text = "Coding is fun. Coding opens up a lot of opportunitie"
// console.log(text.replace(/Coding/g, "JavaScript"));

// ======================================== Practice exercise 12.1 ================================== //

// const output = document.getElementById("output");
// const findValue = document.getElementById("sText");
// const replaceValue = document.getElementById("rText");
// console.log("output", output);
// console.log("findValue", findValue);
// console.log("replaceValue", replaceValue);
// document.querySelector("button").addEventListener("click", lookUp);

// function lookUp() {
//   const s = output.textContent;
//   const rt = replaceValue.value;
//   const re = new RegExp(findValue.value, "gi");
//   let newValue = s.replace(re, rt);
//   output.textContent = newValue;
// }

// ======================================== JavaScript Hoisting ================================== //

// var x;
// x = 5;
// console.log(x);

// x = 5;
// console.log(x);
// var x;

// ======================================== Using strict mode ================================== //

// function sayHi() {
//     greeting = "Hello!";
//     console.log(greeting);
//    }
//    sayHi(); //Hello!

// // "use strict";
// function sayHi() {
//  greeting = "Hello!";
//  console.log(greeting);
// }
// sayHi();

// ======================================== Debugging ================================== //

// let val = 5;
// val += adder();
// val += adder();
// val += adder();
// console.log(val);
// function adder() {
//     let counter = val;
//     for (let i = 0; i < val; i++) {
//         counter++;
//     }
//     return counter;
// }

// ======================================== Error handling ================================== //
// function somethingVeryDangerous() {
//   throw RangeError();
// }
// function add(x, y) {
//     if (typeof x !== 'number') {
//         throw 'The first argument must be a number'
//     }
//     if (typeof y !== 'number') {
//         throw 'The second argument must be a number'
//     } else {
//       throw "1 error he"
//     }
//     return x + y;
// }
// try{
//     let result = add(1,3)
//     console.log(result);
// } catch (e) {

//     console.log(e);
// }

// try {
//     trySomething();
//    } catch (e) {
//     console.log("Oh oh");
//    }
// ======================================== Practice Exercise 12.5 ================================== //

// function checkNumber(val) {
//     try {
//         if (isNaN(val)) {
//             throw new Error("Not a number");
//         }
//         console.log("Got a number");
//     } catch (err) {
//         console.error(err.message);
//     } finally {
//         console.log("Value:", val);
//     }
// }
// checkNumber("Hello");
// checkNumber(10);

// ======================================== Using cookies ================================== //

// NO READ
// Practice Exercise 12.5

// ======================================== Local storage ================================== //

// local Storage is browser provide
// localStorage.setItem("myCat", "Tom");
// const cat = localStorage.getItem("myCat");
// localStorage.removeItem("myCat");
// localStorage.clear();

// setItem
// let message = "Hello Storage!";
// localStorage.setItem("example", message);
// console.log(localStorage.getItem("example"));

// let message1 = "Hello Storage!";
// localStorage.setItem("example1", message);
// window.localStorage.removeItem("example");
// console.log(localStorage.getItem("example"));

// ======================================== Practice Exercise 12.7 ================================== //

// Select all page elements as JavaScript objects
// const taskInput = document.getElementById('taskInput');
// const addButton = document.getElementById('addButton');
// const taskList = document.getElementById('taskList');

// Create a tasks array with a value of the local tasklist storage if it exists, otherwise set the tasks array to an empty array
// let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Loop through all the items in the tasklist array and create list items
// for (const task of tasks) {
//   buildTaskItem(task);
// }

// Function to build and add a task item to the page
// function buildTaskItem(task) {
//   const listItem = document.createElement('li');
//   const textNode = document.createTextNode(task.name);

//   if (task.checked) {
//     listItem.classList.add('ready');
//   }

//   listItem.appendChild(textNode);
//   taskList.appendChild(listItem);

//   Add event listener to toggle the ready class when clicked
//   listItem.addEventListener('click', () => {
//     task.checked = !task.checked;
//     listItem.classList.toggle('ready');
//     saveTasks();
//   });
// }

// Function to rebuild the visual list from the tasks array
// function rebuildTaskList() {
//   tasks = [];
//   taskList.innerHTML = '';

//   const listItems = document.querySelectorAll('li');
//   for (const listItem of listItems) {
//     const taskName = listItem.textContent.trim();
//     const taskChecked = listItem.classList.contains('ready');

//     const task = {
//       name: taskName,
//       checked: taskChecked,
//     };

//     tasks.push(task);
//     buildTaskItem(task);
//   }
// }

// Function to save the tasks array in local storage
// function saveTasks() {
//   localStorage.setItem('tasks', JSON.stringify(tasks));
// }

// Add event listener to add a new task
// addButton.addEventListener('click', () => {
//   const newTaskName = taskInput.value.trim();
//   if (newTaskName) {
//     const newTask = {
//       name: newTaskName,
//       checked: false,
//     };

//     tasks.push(newTask);
//     buildTaskItem(newTask);
//     taskInput.value = '';
//     saveTasks();
//   }
// });

// ======================================== Shopping List Application ================================== //

// let items = JSON.parse(localStorage.getItem("shoppingList") || "[]");
// let itemList = document.getElementById("itemList");


// let addItem = (itemName) => {
    //   let listItem = document.createElement("li");
    //   listItem.textContent = itemName;
    //   listItem.classList.add("item");
    
    //   listItem.addEventListener("click", () => {
//     listItem.classList.toggle("completed");
//   });


//   itemList.appendChild(listItem);
// };

// let saveList = () => {
    //   let itemsString = JSON.stringify(items);
    //   localStorage.setItem("shoppingList", itemsString);
    // };
    
    
// items.forEach(addItem);


// let addButton = document.getElementById("addButton");
// addButton.addEventListener("click", () => {
//   const itemInput = document.getElementById("itemInput");
//   const itemName = itemInput.value.trim();

//   if (itemName) {
//     items.push(itemName);
//     itemInput.value = "";
//     addItem(itemName);
//     saveList();
//   }
// });

// ======================================== JSON ================================== //

let dog = {
    "name": "wiseje",
    "breed": "dachsund"
};
let strdig = JSON.stringify(dog);
