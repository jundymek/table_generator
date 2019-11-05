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

const tableHead = document.querySelector(".table__head-tr--js");
const editForm = document.querySelector(".form--js");
const tableBody = document.querySelector(".table__body--js");
const form = document.querySelector(".form--js");

const headers = Object.keys(users[0]).splice(1);

let selectedID;

createHeader(users);
createBody(users);
createEditForm(users);
addEventLiseners();

function createHeader(data) {
  for (const key of Object.keys(data[0])) {
    if (key !== "id") {
      tableHead.innerHTML += `<tr>
    <th>${key}</th>
    </tr>`;
    }
  }
}

function createBody(data) {
  for (let i = 0; i < data.length; i++) {
    const dataEntries = Object.entries(data[i]);
    console.log(dataEntries);
    tableBody.innerHTML += `<tr id="${data[i]["id"]}" class="table__body-row table__body-row--${data[i]["id"]}"></tr>`;
    for (let [key, value] of dataEntries) {
      const tableBodyRow = document.querySelector(`.table__body-row--${data[i]["id"]}`);
      if (key !== "id") {
        value = booleanConverts(value);
        tableBodyRow.innerHTML += `<td>${value}</td>`;
      }
    }
  }
}

function createEditForm(data) {
  const dataEntries = Object.entries(data[0]);
  for (let [key, value] of dataEntries) {
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
        <input required type="number" name="${key}" id="${key}" step=0.5>
    </p>`;
      }
    }
  }
  editForm.innerHTML += `<input id="btnsave" type="button" value="Save">`;
}

function addEventLiseners() {
  const tableRow = document.querySelectorAll(".table__body-row");
  for (const item of tableRow) {
    item.addEventListener("click", e => {
      const node = e.target.parentNode;
      selectedID = node.id;
      const cells = node.getElementsByTagName("td");
      for (let i = 0; i < cells.length; i++) {
        if (document.getElementById(headers[i]).type === "checkbox") {
          document.getElementById(headers[i]).checked = cells[i].innerHTML === "Yes" ? true : false;
        } else {
          document.getElementById(headers[i]).value = cells[i].innerHTML;
        }
      }
      document.getElementById("btnsave").addEventListener("click", () => handleEdit());
    });
  }
}

function handleEdit() {
  let newData = { id: selectedID };
  for (let i = 0; i < form.length - 1; i++) {
    if (form[i].type === "checkbox") {
      form[i].checked ? (newData[`${form[i].id}`] = true) : (newData[`${form[i].id}`] = false);
    } else {
      newData[`${form[i].id}`] = form[i].value;
    }
  }
  const data = Object.entries(newData);
  modifyTableRow(data);
}

function modifyTableRow(data) {
  const indexToEdit = users.findIndex(x => x.id == selectedID);
  const tableBodyRow = document.querySelector(`.table__body-row--${users[indexToEdit]["id"]}`);
  tableBodyRow.innerHTML = ``;
  for (let [key, value] of data) {
    console.log(value);
    if (key !== "id") {
      value = booleanConverts(value);
      tableBodyRow.innerHTML += `<td>${value}</td>`;
    }
  }
}

function booleanConverts(value) {
  if (typeof value === "boolean") {
    if (value === true) {
      value = "Yes";
    } else {
      value = "No";
    }
  }
  return value;
}
