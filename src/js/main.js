"use strict";
import { createHeader } from "./createHeader";
import { createBody } from "./createBody";
import { createEditForm } from "./createEditForm";
import { users } from "./users";
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

export let selectedID;

if (users.length) {
  createBasicHtml();
  createHeader(users);
  createBody(users);
  createEditForm(users);
  handleClickOnTableRow();
}

function createBasicHtml() {
  const main = document.querySelector(".main--js");
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
}

function handleClickOnTableRow() {
  const tableRows = document.querySelectorAll(".table__body-row");
  for (const item of tableRows) {
    item.addEventListener("click", e => {
      removeDisabledAttrFromForm();
      fillEditFormInputFields(e); 
    });
  }
}

function fillEditFormInputFields(e) {
  const headers = Object.keys(users[0]).splice(1);
  const node = e.target.parentNode;
  selectedID = node.id;
  const cells = node.getElementsByTagName("td");
  for (let i = 0; i < cells.length; i++) {
    if (document.getElementById(headers[i]).type === "checkbox") {
      document.getElementById(headers[i]).checked = cells[i].innerHTML === "Yes" ? true : false;
    }
    else {
      document.getElementById(headers[i]).value = cells[i].innerHTML;
    }
  }
}

function removeDisabledAttrFromForm() {
  const form = document.querySelector(".form--js");
  const formElements = document.querySelectorAll(".form__input--js");
  form.classList.remove("form--disabled");
  for (let i = 0; i < formElements.length; i++) {
    formElements[i].disabled = false;
  }
}

