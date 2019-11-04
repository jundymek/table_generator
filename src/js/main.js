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
console.log(users);

function handleEdit(id) {
  console.log(id);
  const indexToEdit = users.findIndex(x => x.id == id);
  console.log(indexToEdit);
  const form = document.querySelector(".form--js");
  let newData = { id: id };
  for (let i = 0; i < form.length - 1; i++) {
    newData[`${form[i].id}`] = form[i].value;
    console.log(form[i].id);
    console.log(newData);
  }
  console.log(users);
  const data = Object.entries(newData);
  const tableBodyRow = document.querySelector(`.table__body-row--${users[indexToEdit]["id"]}`);
  tableBodyRow.innerHTML = ``;
  for (let [key, value] of data) {
    console.log(value);
    if (key !== "id") {
      if (typeof value === "boolean") {
        if (value === true) {
          value = "Yes";
        } else {
          value = "No";
        }
      }
      tableBodyRow.innerHTML += `<td>${value}</td>`;
    }
  }
}

function createHeader(data) {
  for (const key of Object.keys(data[0])) {
    if (key !== "id") {
      tableHead.innerHTML += `<tr>
    <th>${key}</th>
    </tr>`;
    }
  }
}

const tableBody = document.querySelector(".table__body--js");

function createBody(users) {
  for (let i = 0; i < users.length; i++) {
    const data = Object.entries(users[i]);
    tableBody.innerHTML += `<tr id="${users[i]["id"]}" class="table__body-row table__body-row--${
      users[i]["id"]
    }"></tr>`;
    for (let [key, value] of data) {
      const tableBodyRow = document.querySelector(`.table__body-row--${users[i]["id"]}`);
      if (key !== "id") {
        if (typeof value === "boolean") {
          if (value === true) {
            value = "Yes";
          } else {
            value = "No";
          }
        }
        tableBodyRow.innerHTML += `<td>${value}</td>`;
      }
    }
  }
}

function createEditForm(users) {
  const data = Object.entries(users[0]);
  for (let [key, value] of data) {
    if (key !== "id") {
      if (typeof value === "boolean") {
        editForm.innerHTML += `<p>
        <label for="checkbox">${key}</label>
        <input type="checkbox" name="${key}" id="${key}">
    </p>`;
      }
      if (typeof value === "string") {
        editForm.innerHTML += `<p>
        <label for="${key}">${key}</label>
        <input required type="text" name="${key}" id="${key}" placeholder="">
    </p>`;
      }
      if (typeof value === "number") {
        editForm.innerHTML += `<p>
        <label for="${key}">${key}</label>
        <input required type="number" name="${key}" id="${key}">
    </p>`;
      }
    }
  }
  editForm.innerHTML += `<input id="btnsave" type="button" value="Save">`;
}

const tableHead = document.querySelector(".table__head-tr--js");
const editForm = document.querySelector(".form--js");
createHeader(users);
createBody(users);
createEditForm(users);

const headers = Object.keys(users[0]).splice(1);

const tableRow = document.querySelectorAll(".table__body-row");
for (const item of tableRow) {
  item.addEventListener("click", e => {
    const node = e.target.parentNode;
    console.log(node.id);
    const cells = node.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
      if (document.getElementById(headers[i]).type === "checkbox") {
        document.getElementById(headers[i]).checked = cells[i].innerHTML === "Yes" ? true : false;
      } else {
        document.getElementById(headers[i]).value = cells[i].innerHTML;
      }
      console.log(cells[i].innerHTML);
      console.log(headers[i]);
    }
    document.getElementById("btnsave").addEventListener("click", e => handleEdit(node.id), false);
  });
}
