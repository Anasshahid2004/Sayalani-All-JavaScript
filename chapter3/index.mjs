// let array = ["Milk", "Bread", "Apples"];
// console.log(array.length)

// let array = ["Milk", "Bread", "Apples"];
// console.log("Shopping list length: " + shoppingList.length);
// shoppingList[1] = "Bananas";
// console.log("Updated Shopping List: ");
// console.log(shoppingList);

// PUSH
// array.push("Orange")
// console.log(array)

// Splice
// let array = ["Milk", "Bread", "Apples"];
// console.log(array)
// array.splice(1,2, "orange", "kiwi", "pineapple")
// console.log(array)
// array.splice(2,0, "orange")
// console.log(array)

// concat

// let array1 = [1, 2, 3]
// let array2 = [4, 5, 6]
// let array3 = array1.concat(array2)
// console.log(array1)
// console.log(array2)
// console.log(array3)

// let array1 = ["Milk", 2 , "apples" ]
// let array2 = ["orange", true , "pineapple" ];
// let megaArray = array1.concat(array2)

// console.log(megaArray)
// megaArray.pop();
// console.log(megaArray)

// SHIFT UNSHIFT

// let array1 = ["Milk", 2 , "apples" ];
// array1.shift();
// console.log(array1);

// splice
// let array1 = ["Milk", 2 , "apples" ];
// array1.splice()
// console.log(array1);

// Sorting
// let name = ["Taha", "Saad", "James", "Bert"]
// name.sort()
// console.log(name)

// let ages = [18, 25 , 35 , 85 , 48 , 44, 12]
// ages.sort()
// console.log(ages)

// Reversing
// let names = [ 'Alicia', 'Bert', 'Fatiha', 'James', 'Maria' ]
// names.reverse();
// console.log(names)

// Pratice TEst

// // Q1
// let shoppingList;
// // Q2
// shoppingList = ["Milk", "Bread", "Apples"];
// // Q3
// shoppingList.splice(1,1, "Bananas" , "Eggs")
// // Q4
// shoppingList.pop()
// console.log(shoppingList)
// // Q5
// shoppingList.sort()
// // Q7
// shoppingList.splice(1,0, "Carrots" , "Lettuce")
// console.log(shoppingList)
// // Q8
// let newShoppingList = ["Juice" , "Pop"]
// let finalShoppingList = shoppingList.concat(newShoppingList);
// console.log(finalShoppingList)

// let names = ["James" , "Ali" , "Fatima" , "Maira" , "Bert" , "James" ];
// let findIndexOfFatima = names.indexOf("James")
// // let lastItem = names
// let lastItem = names.lastIndexOf("James")

// console.log(names);
// console.log(findIndexOfFatima);
// console.log(lastItem);

// Multidimensional arrays

// let someValues1 = [10, 20, 30];
// let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// // console.log(someValues1[1])
// console.log(arrOfArrays2[1][2]);

// pratice test//
// let array = [1, 2, 3];
// let array2= [[1, 2, 3], [1, 2, 3], [1, 2, 3]];
// console.log(array2[2][1]);

// Objects in JavaScript //

// let array = ["anas" , 22 , false];
// console.log(array)

// let object = {
//     name: "anas",
//     age: 22,
//     married: false
// }
// console.log(object)
// console.log("getting from array" , [0]);
// console.log("getting from object" , ["names"])
// console.log("getting from object" , object.name)
// console.log("getting from object" , object.age)
// console.log("getting from object" , object.married)

// UPDATE OBJECT //
//  object["name"] = "junaid"
//  console.log(object);

//  object.name = "jawad";
//  console.log(object);

//  Practice exercise 3.4 //

// let myCar = {
//     Brand : "Volvo",
//     color : "White",
//     model : 2023,
//     forSale : true
// }
// let myCarColor = "color"

// console.log(myCar[myCarColor]);

// myCar.forSale = false

// console.log(myCar);

// Working with objects and arrays //

// let company = {
//   companyName: "Healthy Candy",
//   activity: "food manufacturing",
//   address: {
//     street: "2nd street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida",
//   },
//   yearOfEstablishment: 2021,
// };
// console.log(company.address.number)

// let addresses = [{
//   street: "2nd street",
//   number: "123",
//   zipcode: "33116",
//   city: "Miami",
//   state: "Florida"
//   },
//   {
//   street: "1st West avenue",
//   number: "5",
//   zipcode: "75001",
//   city: "Addison",
//   state: "Texas"
//   }];

//   console.log(addresses[1].state)

// Objects in arrays in object

// company = { companyName: "Healthy Candy",
// activities: [ "food manufacturing",
// "improving kids' health",
// "manufacturing toys"],
// address: [{
// street: "2nd street",
// number: "123",
// zipcode: "33116",
// city: "Miami",
// state: "Florida"
// },
// {
// street: "1st West avenue",
// number: "5",
// zipcode: "75001",
// city: "Addison",
// state: "Texas"
// }],
// yearOfEstablishment: 2021
// };

// console.log(company.address[0].state)
// console.log(company.address[1].zipcode)


// Practice Exeercise 3.5

// let people = {
//   friend: []
// }

// let friend1 = {
//   firstName: "Anas",
//   lastName: "Shahid",
//   ID : 555
// }
// let friend2 = {
//   firstName: "Amna",
//   lastName: "Shahid",
//   ID : 555
// }
// let friend3 = {
//   firstName: "Ali",
//   lastName: "Shahid",
//   ID : 555
// }

// people.friend.push( friend1,friend2,friend3);
// console.log(people)

// Self-check quiz
// 1. Can you use const and update values within an array?
  
// 2. Which property in an array gives the number of items contained in the
// array?

// 3. What is the output in the console?
// const myArr1 = [1,3,5,6,8,9,15];
// console.log(myArr1.indexOf(0));
// console.log(myArr1.indexOf(3));

// 4. How do you replace the second element in an array myArr =
// [1,3,5,6,8,9,15] with the value 4?

// 5. What is the output in the console?
// const myArr2 = [];
// myArr2[10] = 'test'
// console.log(myArr2);
// console.log(myArr2[2]);

// 6. What is the output in the console?
// const myArr3 = [3,6,8,9,3,55,553,434];
// myArr3.sort();
// myArr3.length = 0;
// console.log(myArr3[0]);






