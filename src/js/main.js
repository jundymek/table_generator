"use strict";
import { createHeader } from "./createHeader";
import { createBody } from "./createBody";
import { createEditForm } from "./createEditForm";
import { handleEdit } from "./handleEdit";
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

export let users = [
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

const main = document.querySelector(".main--js");
const headers = Object.keys(users[0]).splice(1);

export let selectedID;
export let tableHead;
export let editForm;
export let tableBody;
export let form;
export let formElements;

if (users.length) {
  main.innerHTML += `
  
  <div class="table-wrapper">
    <table class="table table--js">
      <thead class="table__head">
        <tr class="table__head-tr table__head-tr--js">
        </tr>
      </thead>
      <tbody class="table__body table__body--js"></tbody>
    </table>
  </div>
    <section class="edit-form">
    <h2 class="edit-form__header">Dynamicaly edit form data</h2>
    <form action="#" class="form form--disabled form--js ">
    </form>
    </section>`;

  tableHead = document.querySelector(".table__head-tr--js");
  tableBody = document.querySelector(".table__body--js");
  form = document.querySelector(".form--js");

  createHeader(users);
  createBody(users);
  createEditForm(users);
  fillEditFormOnClick();

  formElements = document.querySelectorAll(".form__input--js");
}

function fillEditFormOnClick() {
  const tableRow = document.querySelectorAll(".table__body-row");
  for (const item of tableRow) {
    item.addEventListener("click", e => {
      form.classList.remove("form--disabled");
      for (let i = 0; i < formElements.length; i++) {
        formElements[i].disabled = false;
      }
      const node = e.target.parentNode;
      selectedID = node.id;
      const cells = node.getElementsByTagName("td");
      for (let i = 0; i < cells.length; i++) {
        console.log(cells[i]);
        if (document.getElementById(headers[i]).type === "checkbox") {
          document.getElementById(headers[i]).checked = cells[i].innerHTML === "Yes" ? true : false;
        } else {
          document.getElementById(headers[i]).value = cells[i].innerHTML;
        }
      }
      document.getElementById("btnsave").addEventListener("click", handleEdit);
    });
  }
}
