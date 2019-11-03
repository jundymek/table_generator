"use strict";

// service worker registration - remove if you're not going to use it

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker.register("serviceworker.js").then(
      function(registration) {
        // Registration was successful
        console.log("ServiceWorker registration successful with scope: ", registration.scope);
      },
      function(err) {
        // registration failed :(
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}

// place your code below

console.log(`Hello world!`);

let users = [
  {
    id: 1,
    name: "Kevin",
    surname: "Durant",
    age: 30,
    retired: false
  },
  {
    id: 2,
    name: "Chris",
    surname: "Paul",
    age: 34,
    retired: false
  },
  {
    id: 3,
    name: "Tracy",
    surname: "McGrady",
    age: 40,
    retired: true
  },
  {
    id: 4,
    name: "Allen",
    surname: "Iverson",
    age: 44,
    retired: true
  }
];

function createHeader(data) {
  for (const key of Object.keys(data[0])) {
    if (key !== "id") {
      tableHead.innerHTML += `<tr>
    <th>${key}</th>
    </tr>`;
    }
  }
}

const tableHead = document.querySelector(".table__head-tr--js");
createHeader(users);

const tableBody = document.querySelector(".table__body--js");

for (let i = 0; i < users.length; i++) {
  const data = Object.entries(users[i]);
  tableBody.innerHTML += `<tr id="${users[i]["id"]}" class="table__body-row table__body-row--${users[i]["id"]}"></tr>`;
  for (let [key, value] of data) {
    const tableBodyRow = document.querySelector(`.table__body-row--${users[i]["id"]}`);
    if (key !== "id") {
      if (typeof value === "boolean") {
        if (value === true) {
          value = "Yes"
        } else {
          value = "No"
        }
      }
      tableBodyRow.innerHTML += `<td>${value}</td>`;
    }
  }
}

const tableRow = document.querySelectorAll(".table__body-row");
for (const item of tableRow) {
  item.addEventListener("click", e => {
    const node = e.target.parentNode;
    console.log(node.id);
    const cells = node.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
      console.log(cells[i].innerHTML);
    }
  });
}
