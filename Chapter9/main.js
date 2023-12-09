// // ["Hi", "hi", "Hii", "hi World"]
// function stop(el){
//     console.dir(el)
//     console.dir(el.innerText)
//     document.querySelector("#Button1").style.backgroundColor = "red"
//     document.querySelector("Button1").style.backgroundColor = "green"
// }

// function toggleDisplay(){
//     let p = document.getElementById("magic").style.color = "yellow"
// }

// function disappear(){
//     // document.getElementById("shape").classList.add("hide");
//     document.getElementById("shape").classList.remove("blue");
// }

// function changeAttr(){
//     let el = document.getElementById("shape");
//     el.setAttribute("style", "background-color:red;border:1px")
//     el.setAttribute("id", "new");
//     el.setAttribute("class", "circle");

//     }
// 'let table = document.getElementById("html");
// let tbody = table.querySelector("tbody");
// let message = document.getElementById("message");

// const names = ["Bilal", "Hammad", "Rehan", "Ali", "Omer"];

// function build() {
//   names.forEach((name, index) => {
//     let row = document.createElement("tr");
//     let cell = document.createElement("td");
//     cell.className = "box";
//     cell.classList.add(`box-${index}`);

//     row.setAttribute("data-row", index);
//     row.setAttribute("data-name", name);

//     row.onclick = function () {
//       getData(this);
//     };

//     cell.innerText = name;
//     row.appendChild(cell);
//     tbody.appendChild(row);
//   });
// }

// build();

// function getData(element) {
//   let rowIndex = element.getAttribute("data-row");
//   let name = element.getAttribute("data-name");

//   message.innerHTML = `Row Index: ${rowIndex}, Name: ${name}`;
// }'

// window.onload = function () {
//     document.getElementById("square").addEventListener("click" , changeColor)
// }
// function changeColor(){
//     // console.log(this)
//     let red = Math.floor(Math.random() * 256);
//     let green = Math.floor(Math.random() * 256);
//     let blue = Math.floor(Math.random() * 256);

//     this.style.backgroundColor = `rgb(${red}, ${green}, ${blue}`
// };

// function newFunc(e){
//     console.log(e)
// }
// newFunc()

// =============================================== Creating New Element ============================= //
// appendChild means push new Elemnt //
// function addRandomNumber(){
//     let el = document.createElement("p");
//     el.innerText = Math.floor(Math.random() * 100)
//     document.body.appendChild(el);
// }

// =============================================== Exercise # 10.10 ============================= //

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", myFun);
// btn.removeEventListener("click", myFun);
// function myFun() {
//   console.log("clicked");
// }

//   const btn = document.querySelector(".btn");
//   btn.addEventListener("click", myFun);
//   function myFun() {
//     console.log("clicked");
//     btn.removeEventListener("click", myFun);
//   }

// =============================================== 11 Interactive Content and Event Listeners ============================= //

// =============================================== Mouse event handlers ============================= //

// =============================================== Interactive voting system ============================= //

// const myArray = [];
// const addFriendButton = document.getElementById('addFriend');
// const friendNameInput = document.getElementById('friendName');
// const friendTable = document.getElementById('friendTable');
// const friendList = document.getElementById('friendList');

// addFriendButton.addEventListener('click', addFriend);

// function addFriend() {
//     const friendName = friendNameInput.value;
//     if (friendName) {
//         myArray.push(friendName);
//         friendNameInput.value = '';
//         buildPage();
//     }
// }

// function buildPage() {
//     friendList.innerHTML = '';
//     myArray.forEach((name, index) => {
//         createTableRow(index, name);
//     });
// }

// function createTableRow(index, name) {
//     const row = document.createElement('tr');
//     const numberCell = document.createElement('td');
//     const nameCell = document.createElement('td');
//     const votesCell = document.createElement('td');

//     numberCell.textContent = index + 1;
//     nameCell.textContent = name;
//     votesCell.textContent = 0;

//     row.appendChild(numberCell);
//     row.appendChild(nameCell);
//     row.appendChild(votesCell);

//     friendList.appendChild(row);

//     row.addEventListener('click', increaseVotes);
// }

// function increaseVotes(event) {
//     const row = event.target.parentElement;
//     const votesCell = row.querySelector('td:last-child');
//     let votes = parseInt(votesCell.textContent, 10);
//     votes += 1;
//     votesCell.textContent = votes;
// }

// buildPage();

let myArray = [];

let friendNameInput = document.getElementById("friendNameInput");
let addFriendButton = document.getElementById("addFriendButton");
let friendList = document.getElementById("friendList");

addFriendButton.addEventListener("click", () => {
  const newFriendName = friendNameInput.value;
  if (newFriendName) {
    myArray.push(newFriendName);
    friendNameInput.value = "";
    buildPage();
  }
});

function buildPage() {
  friendList.innerHTML = "";
  myArray.forEach((name, index) => {
    createTableRow(index + 1, name);
  });
}

function createTableRow(index, name) {
  let row = document.createElement("tr");
  let indexCell = document.createElement("td");
  let nameCell = document.createElement("td");  
  let votesCell = document.createElement("td");
  let voteCounter = document.createElement("span");

  indexCell.textContent = index;
  nameCell.textContent = name;
  voteCounter.textContent = 0;
  votesCell.appendChild(voteCounter);

  votesCell.addEventListener("click", () => {
    let currentVotes = parseInt(voteCounter.textContent);
    currentVotes++;
    voteCounter.textContent = currentVotes;
  });

  row.appendChild(indexCell);
  row.appendChild(nameCell);
  row.appendChild(votesCell);
  friendList.appendChild(row);
}

buildPage();
