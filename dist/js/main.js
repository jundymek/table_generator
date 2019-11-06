!function(e){var n={};function t(c){if(n[c])return n[c].exports;var i=n[c]={i:c,l:!1,exports:{}};return e[c].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,c){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:c})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(c,i,function(n){return e[n]}.bind(null,i));return c},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./src/js/createHeader.js\n\n\nfunction createHeader(data) {\n  for (const key of Object.keys(data[0])) {\n    if (key !== "id") {\n      tableHead.innerHTML += `<tr>\n    <th class=\'table__head-th\'>${key.toUpperCase()}</th>\n    </tr>`;\n    }\n  }\n}\n\n// CONCATENATED MODULE: ./src/js/booleanConverts.js\nfunction booleanConverts(value) {\n  if (typeof value === "boolean") {\n    if (value === true) {\n      value = "Yes";\n    } else {\n      value = "No";\n    }\n  }\n  return value;\n}\n\n// CONCATENATED MODULE: ./src/js/createBody.js\n\n\n\nfunction createBody(data) {\n  for (let i = 0; i < data.length; i++) {\n    const dataEntries = Object.entries(data[i]);\n    console.log(dataEntries);\n    tableBody.innerHTML += `<tr id="${data[i]["id"]}" class="table__body-row table__body-row--${data[i]["id"]}"></tr>`;\n    for (let [key, value] of dataEntries) {\n      const tableBodyRow = document.querySelector(`.table__body-row--${data[i]["id"]}`);\n      if (key !== "id") {\n        value = booleanConverts(value);\n        tableBodyRow.innerHTML += `<td class="table__body-td">${value}</td>`;\n      }\n    }\n  }\n}\n\n// CONCATENATED MODULE: ./src/js/createEditForm.js\n\n\nfunction createEditForm(data) {\n  const dataEntries = Object.entries(data[0]);\n  for (let [key, value] of dataEntries) {\n    if (key !== "id") {\n      if (typeof value === "boolean") {\n        editForm.innerHTML += `<p class="form__element form__element--inactive form__element--js">\n        <label class="form__label" for="checkbox">${key}</label>\n        <input type="checkbox" name="${key}" id="${key}">\n    </p>`;\n      }\n      if (typeof value === "string") {\n        editForm.innerHTML += `<p class="form__element form__element--inactive form__element--js">\n        <label class="form__label" for="${key}">${key}</label>\n        <input required type="text" name="${key}" id="${key}" placeholder="">\n    </p>`;\n      }\n      if (typeof value === "number") {\n        editForm.innerHTML += `<p class="form__element form__element--inactive form__element--js">\n        <label class="form__label" for="${key}">${key}</label>\n        <input required type="number" name="${key}" id="${key}" step=0.5>\n    </p>`;\n      }\n    }\n  }\n  editForm.innerHTML += `<input class="form__btn-submit form__element--inactive form__element--js" id="btnsave" type="button" value="Save">`;\n}\n\n// CONCATENATED MODULE: ./src/js/modifyTableRow.js\n\n\n\nfunction modifyTableRow(data) {\n  const indexToEdit = users.findIndex(x => x.id == selectedID);\n  const tableBodyRow = document.querySelector(`.table__body-row--${users[indexToEdit]["id"]}`);\n  tableBodyRow.innerHTML = ``;\n  for (let [key, value] of data) {\n    console.log(value);\n    if (key !== "id") {\n      value = booleanConverts(value);\n      tableBodyRow.innerHTML += `<td class="table__body-td">${value}</td>`;\n    }\n  }\n}\n\n// CONCATENATED MODULE: ./src/js/handleEdit.js\n\n\n\nfunction handleEdit() {\n  let newData = { id: selectedID };\n  for (let i = 0; i < main_form.length - 1; i++) {\n    if (main_form[i].type === "checkbox") {\n      main_form[i].checked ? (newData[`${main_form[i].id}`] = true) : (newData[`${main_form[i].id}`] = false);\n    } else {\n      newData[`${main_form[i].id}`] = main_form[i].value;\n    }\n  }\n  const data = Object.entries(newData);\n  modifyTableRow(data);\n}\n\n// CONCATENATED MODULE: ./src/js/main.js\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "users", function() { return users; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedID", function() { return selectedID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableHead", function() { return tableHead; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editForm", function() { return editForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableBody", function() { return tableBody; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "form", function() { return main_form; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formElements", function() { return formElements; });\n\n\n\n\n\n// service worker registration - remove if you\'re not going to use it\n\nif ("serviceWorker" in navigator) {\n  window.addEventListener("load", function() {\n    navigator.serviceWorker.register("serviceworker.js").then(\n      function(registration) {\n        // Registration was successful\n        console.log("ServiceWorker registration successful with scope: ", registration.scope);\n      },\n      function(err) {\n        // registration failed :(\n        console.log("ServiceWorker registration failed: ", err);\n      }\n    );\n  });\n}\n\n// place your code below\n\nconsole.log(`Hello world!`);\n\nlet users = [\n  {\n    id: 1,\n    name: "Kevin",\n    surname: "Durant",\n    age: 30,\n    retired: false\n  },\n  {\n    id: 2,\n    name: "Chris",\n    surname: "Paul",\n    age: 34,\n    retired: false\n  },\n  {\n    id: 3,\n    name: "Tracy",\n    surname: "McGrady",\n    age: 40,\n    retired: true\n  },\n  {\n    id: 4,\n    name: "Allen",\n    surname: "Iverson",\n    age: 44,\n    retired: true\n  }\n];\nconsole.log(users);\n\nconst main = document.querySelector(".main--js");\nconst headers = Object.keys(users[0]).splice(1);\n\nlet selectedID;\n\nif (users.length) {\n  main.innerHTML += `\n  \n  <table class="table table--js">\n      <thead class="table__head">\n        <tr class="table__head-tr table__head-tr--js">\n        </tr>\n      </thead>\n      <tbody class="table__body table__body--js"></tbody>\n    </table>\n    <section class="edit-form">\n    <h2 class="edit-form__header">Dynamicaly edit form data</h2>\n    <form action="#" class="form form--blurred form--js ">\n    </form>\n    </section>`;\n}\n\nconst tableHead = document.querySelector(".table__head-tr--js");\nconst editForm = document.querySelector(".form--js");\nconst tableBody = document.querySelector(".table__body--js");\nconst main_form = document.querySelector(".form--js");\n\ncreateHeader(users);\ncreateBody(users);\ncreateEditForm(users);\nfillEditFormOnClick();\n\nconst formElements = document.querySelectorAll(".form__element--js");\n\nfunction fillEditFormOnClick() {\n  const tableRow = document.querySelectorAll(".table__body-row");\n  for (const item of tableRow) {\n    item.addEventListener("click", e => {\n      main_form.classList.remove("form--blurred")\n      for (let i=0; i<formElements.length; i++) {\n        formElements[i].classList.remove("form__element--inactive")\n      }\n      const node = e.target.parentNode;\n      selectedID = node.id;\n      const cells = node.getElementsByTagName("td");\n      for (let i = 0; i < cells.length; i++) {\n        if (document.getElementById(headers[i]).type === "checkbox") {\n          document.getElementById(headers[i]).checked = cells[i].innerHTML === "Yes" ? true : false;\n        } else {\n          document.getElementById(headers[i]).value = cells[i].innerHTML;\n        }\n      }\n      document.getElementById("btnsave").addEventListener("click", () => handleEdit());\n    });\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY3JlYXRlSGVhZGVyLmpzP2MyNjciLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Jvb2xlYW5Db252ZXJ0cy5qcz9lOGJiIiwid2VicGFjazovLy8uL3NyYy9qcy9jcmVhdGVCb2R5LmpzP2Q2OGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NyZWF0ZUVkaXRGb3JtLmpzP2FmYWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZGlmeVRhYmxlUm93LmpzPzNjOWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hhbmRsZUVkaXQuanM/NzFhZCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFtQzs7QUFFNUI7QUFDUDtBQUNBO0FBQ0EsTUFBTSxTQUFTO0FBQ2YsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTs7O0FDVk87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDVG9EO0FBQ2pCOztBQUU1QjtBQUNQLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBLElBQUksU0FBUyx5QkFBeUIsY0FBYyw0Q0FBNEMsY0FBYztBQUM5RztBQUNBLHVFQUF1RSxjQUFjO0FBQ3JGO0FBQ0EsZ0JBQWdCLGVBQWU7QUFDL0IsZ0VBQWdFLE1BQU07QUFDdEU7QUFDQTtBQUNBO0FBQ0E7OztBQ2hCa0M7O0FBRTNCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLFFBQVE7QUFDaEIsb0RBQW9ELElBQUk7QUFDeEQsdUNBQXVDLElBQUksUUFBUSxJQUFJO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsUUFBUTtBQUNoQiwwQ0FBMEMsSUFBSSxJQUFJLElBQUk7QUFDdEQsNENBQTRDLElBQUksUUFBUSxJQUFJO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsUUFBUTtBQUNoQiwwQ0FBMEMsSUFBSSxJQUFJLElBQUk7QUFDdEQsOENBQThDLElBQUksUUFBUSxJQUFJO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxRQUFRO0FBQ1Y7OztBQzNCb0Q7QUFDVDs7QUFFcEM7QUFDUCxzQkFBc0IsS0FBSyx3QkFBd0IsVUFBVTtBQUM3RCxtRUFBbUUsS0FBSyxvQkFBb0I7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGVBQWU7QUFDN0IsOERBQThELE1BQU07QUFDcEU7QUFDQTtBQUNBOzs7QUNkMEM7QUFDUTs7QUFFM0M7QUFDUCxpQkFBaUIsS0FBSyxVQUFVO0FBQ2hDLGlCQUFpQixLQUFLLFNBQUksWUFBWTtBQUN0QyxRQUFRLFNBQUk7QUFDWixNQUFNLFNBQUksMEJBQTBCLFNBQUksT0FBTyx5QkFBeUIsU0FBSSxPQUFPO0FBQ25GLEtBQUs7QUFDTCxpQkFBaUIsU0FBSSxPQUFPLEtBQUssU0FBSTtBQUNyQztBQUNBO0FBQ0E7QUFDQSxFQUFFLGNBQWM7QUFDaEI7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWE7QUFDaUM7QUFDSjtBQUNRO0FBQ1I7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ0E7QUFDQTtBQUNBLE1BQU0sU0FBSTs7QUFFakIsWUFBWTtBQUNaLFVBQVU7QUFDVixjQUFjO0FBQ2Q7O0FBRU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLFNBQUk7QUFDVixtQkFBbUIsdUJBQXVCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsa0JBQWtCO0FBQ3ZDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EseUVBQXlFLFVBQVU7QUFDbkYsS0FBSztBQUNMO0FBQ0EiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRhYmxlSGVhZCB9IGZyb20gXCIuL21haW5cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcihkYXRhKSB7XG4gIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGRhdGFbMF0pKSB7XG4gICAgaWYgKGtleSAhPT0gXCJpZFwiKSB7XG4gICAgICB0YWJsZUhlYWQuaW5uZXJIVE1MICs9IGA8dHI+XG4gICAgPHRoIGNsYXNzPSd0YWJsZV9faGVhZC10aCc+JHtrZXkudG9VcHBlckNhc2UoKX08L3RoPlxuICAgIDwvdHI+YDtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBib29sZWFuQ29udmVydHModmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICBpZiAodmFsdWUgPT09IHRydWUpIHtcbiAgICAgIHZhbHVlID0gXCJZZXNcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBcIk5vXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cbiIsImltcG9ydCB7IGJvb2xlYW5Db252ZXJ0cyB9IGZyb20gXCIuL2Jvb2xlYW5Db252ZXJ0c1wiO1xuaW1wb3J0IHsgdGFibGVCb2R5IH0gZnJvbSBcIi4vbWFpblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQm9keShkYXRhKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGRhdGFFbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoZGF0YVtpXSk7XG4gICAgY29uc29sZS5sb2coZGF0YUVudHJpZXMpO1xuICAgIHRhYmxlQm9keS5pbm5lckhUTUwgKz0gYDx0ciBpZD1cIiR7ZGF0YVtpXVtcImlkXCJdfVwiIGNsYXNzPVwidGFibGVfX2JvZHktcm93IHRhYmxlX19ib2R5LXJvdy0tJHtkYXRhW2ldW1wiaWRcIl19XCI+PC90cj5gO1xuICAgIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBkYXRhRW50cmllcykge1xuICAgICAgY29uc3QgdGFibGVCb2R5Um93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRhYmxlX19ib2R5LXJvdy0tJHtkYXRhW2ldW1wiaWRcIl19YCk7XG4gICAgICBpZiAoa2V5ICE9PSBcImlkXCIpIHtcbiAgICAgICAgdmFsdWUgPSBib29sZWFuQ29udmVydHModmFsdWUpO1xuICAgICAgICB0YWJsZUJvZHlSb3cuaW5uZXJIVE1MICs9IGA8dGQgY2xhc3M9XCJ0YWJsZV9fYm9keS10ZFwiPiR7dmFsdWV9PC90ZD5gO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgZWRpdEZvcm0gfSBmcm9tIFwiLi9tYWluXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFZGl0Rm9ybShkYXRhKSB7XG4gIGNvbnN0IGRhdGFFbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoZGF0YVswXSk7XG4gIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBkYXRhRW50cmllcykge1xuICAgIGlmIChrZXkgIT09IFwiaWRcIikge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgZWRpdEZvcm0uaW5uZXJIVE1MICs9IGA8cCBjbGFzcz1cImZvcm1fX2VsZW1lbnQgZm9ybV9fZWxlbWVudC0taW5hY3RpdmUgZm9ybV9fZWxlbWVudC0tanNcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybV9fbGFiZWxcIiBmb3I9XCJjaGVja2JveFwiPiR7a2V5fTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiJHtrZXl9XCIgaWQ9XCIke2tleX1cIj5cbiAgICA8L3A+YDtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgZWRpdEZvcm0uaW5uZXJIVE1MICs9IGA8cCBjbGFzcz1cImZvcm1fX2VsZW1lbnQgZm9ybV9fZWxlbWVudC0taW5hY3RpdmUgZm9ybV9fZWxlbWVudC0tanNcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybV9fbGFiZWxcIiBmb3I9XCIke2tleX1cIj4ke2tleX08L2xhYmVsPlxuICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cInRleHRcIiBuYW1lPVwiJHtrZXl9XCIgaWQ9XCIke2tleX1cIiBwbGFjZWhvbGRlcj1cIlwiPlxuICAgIDwvcD5gO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICBlZGl0Rm9ybS5pbm5lckhUTUwgKz0gYDxwIGNsYXNzPVwiZm9ybV9fZWxlbWVudCBmb3JtX19lbGVtZW50LS1pbmFjdGl2ZSBmb3JtX19lbGVtZW50LS1qc1wiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtX19sYWJlbFwiIGZvcj1cIiR7a2V5fVwiPiR7a2V5fTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cIiR7a2V5fVwiIGlkPVwiJHtrZXl9XCIgc3RlcD0wLjU+XG4gICAgPC9wPmA7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVkaXRGb3JtLmlubmVySFRNTCArPSBgPGlucHV0IGNsYXNzPVwiZm9ybV9fYnRuLXN1Ym1pdCBmb3JtX19lbGVtZW50LS1pbmFjdGl2ZSBmb3JtX19lbGVtZW50LS1qc1wiIGlkPVwiYnRuc2F2ZVwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIlNhdmVcIj5gO1xufVxuIiwiaW1wb3J0IHsgYm9vbGVhbkNvbnZlcnRzIH0gZnJvbSBcIi4vYm9vbGVhbkNvbnZlcnRzXCI7XG5pbXBvcnQgeyB1c2Vycywgc2VsZWN0ZWRJRCB9IGZyb20gXCIuL21haW5cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1vZGlmeVRhYmxlUm93KGRhdGEpIHtcbiAgY29uc3QgaW5kZXhUb0VkaXQgPSB1c2Vycy5maW5kSW5kZXgoeCA9PiB4LmlkID09IHNlbGVjdGVkSUQpO1xuICBjb25zdCB0YWJsZUJvZHlSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGFibGVfX2JvZHktcm93LS0ke3VzZXJzW2luZGV4VG9FZGl0XVtcImlkXCJdfWApO1xuICB0YWJsZUJvZHlSb3cuaW5uZXJIVE1MID0gYGA7XG4gIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBkYXRhKSB7XG4gICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgIGlmIChrZXkgIT09IFwiaWRcIikge1xuICAgICAgdmFsdWUgPSBib29sZWFuQ29udmVydHModmFsdWUpO1xuICAgICAgdGFibGVCb2R5Um93LmlubmVySFRNTCArPSBgPHRkIGNsYXNzPVwidGFibGVfX2JvZHktdGRcIj4ke3ZhbHVlfTwvdGQ+YDtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IHNlbGVjdGVkSUQsIGZvcm0gfSBmcm9tIFwiLi9tYWluXCI7XG5pbXBvcnQgeyBtb2RpZnlUYWJsZVJvdyB9IGZyb20gXCIuL21vZGlmeVRhYmxlUm93XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVFZGl0KCkge1xuICBsZXQgbmV3RGF0YSA9IHsgaWQ6IHNlbGVjdGVkSUQgfTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGlmIChmb3JtW2ldLnR5cGUgPT09IFwiY2hlY2tib3hcIikge1xuICAgICAgZm9ybVtpXS5jaGVja2VkID8gKG5ld0RhdGFbYCR7Zm9ybVtpXS5pZH1gXSA9IHRydWUpIDogKG5ld0RhdGFbYCR7Zm9ybVtpXS5pZH1gXSA9IGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3RGF0YVtgJHtmb3JtW2ldLmlkfWBdID0gZm9ybVtpXS52YWx1ZTtcbiAgICB9XG4gIH1cbiAgY29uc3QgZGF0YSA9IE9iamVjdC5lbnRyaWVzKG5ld0RhdGEpO1xuICBtb2RpZnlUYWJsZVJvdyhkYXRhKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSBcIi4vY3JlYXRlSGVhZGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVCb2R5IH0gZnJvbSBcIi4vY3JlYXRlQm9keVwiO1xuaW1wb3J0IHsgY3JlYXRlRWRpdEZvcm0gfSBmcm9tIFwiLi9jcmVhdGVFZGl0Rm9ybVwiO1xuaW1wb3J0IHsgaGFuZGxlRWRpdCB9IGZyb20gXCIuL2hhbmRsZUVkaXRcIjtcbi8vIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiAtIHJlbW92ZSBpZiB5b3UncmUgbm90IGdvaW5nIHRvIHVzZSBpdFxuXG5pZiAoXCJzZXJ2aWNlV29ya2VyXCIgaW4gbmF2aWdhdG9yKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbigpIHtcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcihcInNlcnZpY2V3b3JrZXIuanNcIikudGhlbihcbiAgICAgIGZ1bmN0aW9uKHJlZ2lzdHJhdGlvbikge1xuICAgICAgICAvLyBSZWdpc3RyYXRpb24gd2FzIHN1Y2Nlc3NmdWxcbiAgICAgICAgY29uc29sZS5sb2coXCJTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6IFwiLCByZWdpc3RyYXRpb24uc2NvcGUpO1xuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAvLyByZWdpc3RyYXRpb24gZmFpbGVkIDooXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiBcIiwgZXJyKTtcbiAgICAgIH1cbiAgICApO1xuICB9KTtcbn1cblxuLy8gcGxhY2UgeW91ciBjb2RlIGJlbG93XG5cbmNvbnNvbGUubG9nKGBIZWxsbyB3b3JsZCFgKTtcblxuZXhwb3J0IGxldCB1c2VycyA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIG5hbWU6IFwiS2V2aW5cIixcbiAgICBzdXJuYW1lOiBcIkR1cmFudFwiLFxuICAgIGFnZTogMzAsXG4gICAgcmV0aXJlZDogZmFsc2VcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIG5hbWU6IFwiQ2hyaXNcIixcbiAgICBzdXJuYW1lOiBcIlBhdWxcIixcbiAgICBhZ2U6IDM0LFxuICAgIHJldGlyZWQ6IGZhbHNlXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBuYW1lOiBcIlRyYWN5XCIsXG4gICAgc3VybmFtZTogXCJNY0dyYWR5XCIsXG4gICAgYWdlOiA0MCxcbiAgICByZXRpcmVkOiB0cnVlXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICBuYW1lOiBcIkFsbGVuXCIsXG4gICAgc3VybmFtZTogXCJJdmVyc29uXCIsXG4gICAgYWdlOiA0NCxcbiAgICByZXRpcmVkOiB0cnVlXG4gIH1cbl07XG5jb25zb2xlLmxvZyh1c2Vycyk7XG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tLWpzXCIpO1xuY29uc3QgaGVhZGVycyA9IE9iamVjdC5rZXlzKHVzZXJzWzBdKS5zcGxpY2UoMSk7XG5cbmV4cG9ydCBsZXQgc2VsZWN0ZWRJRDtcblxuaWYgKHVzZXJzLmxlbmd0aCkge1xuICBtYWluLmlubmVySFRNTCArPSBgXG4gIFxuICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS0tanNcIj5cbiAgICAgIDx0aGVhZCBjbGFzcz1cInRhYmxlX19oZWFkXCI+XG4gICAgICAgIDx0ciBjbGFzcz1cInRhYmxlX19oZWFkLXRyIHRhYmxlX19oZWFkLXRyLS1qc1wiPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keSBjbGFzcz1cInRhYmxlX19ib2R5IHRhYmxlX19ib2R5LS1qc1wiPjwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImVkaXQtZm9ybVwiPlxuICAgIDxoMiBjbGFzcz1cImVkaXQtZm9ybV9faGVhZGVyXCI+RHluYW1pY2FseSBlZGl0IGZvcm0gZGF0YTwvaDI+XG4gICAgPGZvcm0gYWN0aW9uPVwiI1wiIGNsYXNzPVwiZm9ybSBmb3JtLS1ibHVycmVkIGZvcm0tLWpzIFwiPlxuICAgIDwvZm9ybT5cbiAgICA8L3NlY3Rpb24+YDtcbn1cblxuZXhwb3J0IGNvbnN0IHRhYmxlSGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVfX2hlYWQtdHItLWpzXCIpO1xuZXhwb3J0IGNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLS1qc1wiKTtcbmV4cG9ydCBjb25zdCB0YWJsZUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX19ib2R5LS1qc1wiKTtcbmV4cG9ydCBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLS1qc1wiKTtcblxuY3JlYXRlSGVhZGVyKHVzZXJzKTtcbmNyZWF0ZUJvZHkodXNlcnMpO1xuY3JlYXRlRWRpdEZvcm0odXNlcnMpO1xuZmlsbEVkaXRGb3JtT25DbGljaygpO1xuXG5leHBvcnQgY29uc3QgZm9ybUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JtX19lbGVtZW50LS1qc1wiKTtcblxuZnVuY3Rpb24gZmlsbEVkaXRGb3JtT25DbGljaygpIHtcbiAgY29uc3QgdGFibGVSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmxlX19ib2R5LXJvd1wiKTtcbiAgZm9yIChjb25zdCBpdGVtIG9mIHRhYmxlUm93KSB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJmb3JtLS1ibHVycmVkXCIpXG4gICAgICBmb3IgKGxldCBpPTA7IGk8Zm9ybUVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvcm1FbGVtZW50c1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiZm9ybV9fZWxlbWVudC0taW5hY3RpdmVcIilcbiAgICAgIH1cbiAgICAgIGNvbnN0IG5vZGUgPSBlLnRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgc2VsZWN0ZWRJRCA9IG5vZGUuaWQ7XG4gICAgICBjb25zdCBjZWxscyA9IG5vZGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0ZFwiKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhlYWRlcnNbaV0pLnR5cGUgPT09IFwiY2hlY2tib3hcIikge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhlYWRlcnNbaV0pLmNoZWNrZWQgPSBjZWxsc1tpXS5pbm5lckhUTUwgPT09IFwiWWVzXCIgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGVhZGVyc1tpXSkudmFsdWUgPSBjZWxsc1tpXS5pbm5lckhUTUw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuc2F2ZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gaGFuZGxlRWRpdCgpKTtcbiAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n')}]);