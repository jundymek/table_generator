!function(e){var n={};function t(l){if(n[l])return n[l].exports;var i=n[l]={i:l,l:!1,exports:{}};return e[l].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,l){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:l})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(l,i,function(n){return e[n]}.bind(null,i));return l},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./src/js/createHeader.js\n\n\nfunction createHeader(data) {\n  for (const key of Object.keys(data[0])) {\n    if (key !== "id") {\n      tableHead.innerHTML += `<tr>\n    <th class=\'table__head-th\'>${key.toUpperCase()}</th>\n    </tr>`;\n    }\n  }\n}\n\n// CONCATENATED MODULE: ./src/js/booleanConverts.js\nfunction booleanConverts(value) {\n  if (typeof value === "boolean") {\n    if (value === true) {\n      value = "Yes";\n    } else {\n      value = "No";\n    }\n  }\n  return value;\n}\n\n// CONCATENATED MODULE: ./src/js/createBody.js\n\n\n\nfunction createBody(data) {\n  for (let i = 0; i < data.length; i++) {\n    const dataEntries = Object.entries(data[i]);\n    console.log(dataEntries);\n    tableBody.innerHTML += `<tr id="${data[i]["id"]}" class="table__body-row table__body-row--${data[i]["id"]}"></tr>`;\n    for (let [key, value] of dataEntries) {\n      const tableBodyRow = document.querySelector(`.table__body-row--${data[i]["id"]}`);\n      if (key !== "id") {\n        value = booleanConverts(value);\n        tableBodyRow.innerHTML += `<td class="table__body-td">${value}</td>`;\n      }\n    }\n  }\n}\n\n// CONCATENATED MODULE: ./src/js/createEditForm.js\n\n\nfunction createEditForm(data) {\n  const dataEntries = Object.entries(data[0]);\n  for (let [key, value] of dataEntries) {\n    if (key !== "id") {\n      if (typeof value === "boolean") {\n        main_form.innerHTML += `<p class="form__element form__element--inactive form__element--js">\n        <label class="form__label" for="checkbox">${key}</label>\n        <input type="checkbox" name="${key}" id="${key}">\n    </p>`;\n      }\n      if (typeof value === "string") {\n        main_form.innerHTML += `<p class="form__element form__element--inactive form__element--js">\n        <label class="form__label" for="${key}">${key}</label>\n        <input required type="text" name="${key}" id="${key}" placeholder="">\n    </p>`;\n      }\n      if (typeof value === "number") {\n        main_form.innerHTML += `<p class="form__element form__element--inactive form__element--js">\n        <label class="form__label" for="${key}">${key}</label>\n        <input required type="number" name="${key}" id="${key}" step=0.5>\n    </p>`;\n      }\n    }\n  }\n  main_form.innerHTML += `<input class="form__btn-submit form__element--inactive form__element--js" id="btnsave" type="submit" value="Save">`;\n}\n\n// CONCATENATED MODULE: ./src/js/modifyTableRow.js\n\n\n\nfunction modifyTableRow(data) {\n  const indexToEdit = users.findIndex(x => x.id == selectedID);\n  const tableBodyRow = document.querySelector(`.table__body-row--${users[indexToEdit]["id"]}`);\n  tableBodyRow.innerHTML = ``;\n  for (let [key, value] of data) {\n    console.log(value);\n    if (key !== "id") {\n      value = booleanConverts(value);\n      tableBodyRow.innerHTML += `<td class="table__body-td">${value}</td>`;\n    }\n  }\n  tableBodyRow.classList.add(`table__body-row--edited`)\n  setTimeout(() => {\n    tableBodyRow.classList.remove(`table__body-row--edited`)\n  }, 1000);\n}\n\n// CONCATENATED MODULE: ./src/js/handleEdit.js\n\n\n\nfunction handleEdit(e) {\n  let newData = { id: selectedID };\n  let requiredFieldsFiled = true;\n  for (let i = 0; i < main_form.length - 1; i++) {\n    if (main_form[i].type === "checkbox") {\n      main_form[i].checked ? (newData[`${main_form[i].id}`] = true) : (newData[`${main_form[i].id}`] = false);\n    } else {\n      if (main_form[i].value.length) {\n        console.log(main_form[i].type)\n        newData[`${main_form[i].id}`] = main_form[i].value;\n      }\n      else {\n        valid = false\n      }\n    }\n  }\n  const data = Object.entries(newData);\n  if (requiredFieldsFiled) {\n    e.preventDefault()\n    modifyTableRow(data);\n  }\n}\n\n// CONCATENATED MODULE: ./src/js/main.js\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "users", function() { return users; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedID", function() { return selectedID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableHead", function() { return tableHead; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editForm", function() { return editForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableBody", function() { return tableBody; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "form", function() { return main_form; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formElements", function() { return formElements; });\n\n\n\n\n\n// service worker registration - remove if you\'re not going to use it\n\nif ("serviceWorker" in navigator) {\n  window.addEventListener("load", function() {\n    navigator.serviceWorker.register("serviceworker.js").then(\n      function(registration) {\n        // Registration was successful\n        console.log("ServiceWorker registration successful with scope: ", registration.scope);\n      },\n      function(err) {\n        // registration failed :(\n        console.log("ServiceWorker registration failed: ", err);\n      }\n    );\n  });\n}\n\n// place your code below\n\nlet users = [\n  {\n    id: 1,\n    name: "Kevin",\n    surname: "Durant",\n    age: 30,\n    retired: false\n  },\n  {\n    id: 2,\n    name: "Chris",\n    surname: "Paul",\n    age: 34,\n    retired: false\n  },\n  {\n    id: 3,\n    name: "Tracy",\n    surname: "McGrady",\n    age: 40,\n    retired: true\n  },\n  {\n    id: 4,\n    name: "Allen",\n    surname: "Iverson",\n    age: 44,\n    retired: true\n  }\n];\n\nconst main = document.querySelector(".main--js");\nconst headers = Object.keys(users[0]).splice(1);\n\nlet selectedID;\nlet tableHead;\nlet editForm;\nlet tableBody;\nlet main_form;\nlet formElements;\n\nif (users.length) {\n  main.innerHTML += `\n  \n  <div class="table-wrapper">\n    <table class="table table--js">\n      <thead class="table__head">\n        <tr class="table__head-tr table__head-tr--js">\n        </tr>\n      </thead>\n      <tbody class="table__body table__body--js"></tbody>\n    </table>\n  </div>\n    <section class="edit-form">\n    <h2 class="edit-form__header">Dynamicaly edit form data</h2>\n    <form action="#" class="form form--blurred form--js ">\n    </form>\n    </section>`;\n\n  tableHead = document.querySelector(".table__head-tr--js");\n  tableBody = document.querySelector(".table__body--js");\n  main_form = document.querySelector(".form--js");\n\n  createHeader(users);\n  createBody(users);\n  createEditForm(users);\n  fillEditFormOnClick();\n\n  formElements = document.querySelectorAll(".form__element--js");\n}\n\nfunction fillEditFormOnClick() {\n  const tableRow = document.querySelectorAll(".table__body-row");\n  for (const item of tableRow) {\n    item.addEventListener("click", e => {\n      main_form.classList.remove("form--blurred");\n      for (let i = 0; i < formElements.length; i++) {\n        formElements[i].classList.remove("form__element--inactive");\n      }\n      const node = e.target.parentNode;\n      selectedID = node.id;\n      const cells = node.getElementsByTagName("td");\n      for (let i = 0; i < cells.length; i++) {\n        console.log(cells[i]);\n        if (document.getElementById(headers[i]).type === "checkbox") {\n          document.getElementById(headers[i]).checked = cells[i].innerHTML === "Yes" ? true : false;\n        } else {\n          document.getElementById(headers[i]).value = cells[i].innerHTML;\n        }\n      }\n      document.getElementById("btnsave").addEventListener("click", handleEdit);\n    });\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY3JlYXRlSGVhZGVyLmpzP2MyNjciLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Jvb2xlYW5Db252ZXJ0cy5qcz9lOGJiIiwid2VicGFjazovLy8uL3NyYy9qcy9jcmVhdGVCb2R5LmpzP2Q2OGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NyZWF0ZUVkaXRGb3JtLmpzP2FmYWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZGlmeVRhYmxlUm93LmpzPzNjOWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hhbmRsZUVkaXQuanM/NzFhZCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFtQzs7QUFFNUI7QUFDUDtBQUNBO0FBQ0EsTUFBTSxTQUFTO0FBQ2YsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTs7O0FDVk87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDVG9EO0FBQ2pCOztBQUU1QjtBQUNQLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBLElBQUksU0FBUyx5QkFBeUIsY0FBYyw0Q0FBNEMsY0FBYztBQUM5RztBQUNBLHVFQUF1RSxjQUFjO0FBQ3JGO0FBQ0EsZ0JBQWdCLGVBQWU7QUFDL0IsZ0VBQWdFLE1BQU07QUFDdEU7QUFDQTtBQUNBO0FBQ0E7OztBQ2hCOEI7O0FBRXZCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLFNBQUk7QUFDWixvREFBb0QsSUFBSTtBQUN4RCx1Q0FBdUMsSUFBSSxRQUFRLElBQUk7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsUUFBUSxTQUFJO0FBQ1osMENBQTBDLElBQUksSUFBSSxJQUFJO0FBQ3RELDRDQUE0QyxJQUFJLFFBQVEsSUFBSTtBQUM1RDtBQUNBO0FBQ0E7QUFDQSxRQUFRLFNBQUk7QUFDWiwwQ0FBMEMsSUFBSSxJQUFJLElBQUk7QUFDdEQsOENBQThDLElBQUksUUFBUSxJQUFJO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxTQUFJO0FBQ047OztBQzNCb0Q7QUFDVDs7QUFFcEM7QUFDUCxzQkFBc0IsS0FBSyx3QkFBd0IsVUFBVTtBQUM3RCxtRUFBbUUsS0FBSyxvQkFBb0I7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGVBQWU7QUFDN0IsOERBQThELE1BQU07QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FDbEIwQztBQUNROztBQUUzQztBQUNQLGlCQUFpQixLQUFLLFVBQVU7QUFDaEM7QUFDQSxpQkFBaUIsS0FBSyxTQUFJLFlBQVk7QUFDdEMsUUFBUSxTQUFJO0FBQ1osTUFBTSxTQUFJLDBCQUEwQixTQUFJLE9BQU8seUJBQXlCLFNBQUksT0FBTztBQUNuRixLQUFLO0FBQ0wsVUFBVSxTQUFJO0FBQ2Qsb0JBQW9CLFNBQUk7QUFDeEIsbUJBQW1CLFNBQUksT0FBTyxLQUFLLFNBQUk7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxjQUFjO0FBQ2xCO0FBQ0E7OztBQ3hCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFhO0FBQ2lDO0FBQ0o7QUFDUTtBQUNSO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxTQUFJO0FBQ1I7O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLFNBQUk7O0FBRU4sRUFBRSxZQUFZO0FBQ2QsRUFBRSxVQUFVO0FBQ1osRUFBRSxjQUFjO0FBQ2hCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLFNBQUk7QUFDVixxQkFBcUIseUJBQXlCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsa0JBQWtCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsVUFBVTtBQUM3RSxLQUFLO0FBQ0w7QUFDQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGFibGVIZWFkIH0gZnJvbSBcIi4vbWFpblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKGRhdGEpIHtcbiAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoZGF0YVswXSkpIHtcbiAgICBpZiAoa2V5ICE9PSBcImlkXCIpIHtcbiAgICAgIHRhYmxlSGVhZC5pbm5lckhUTUwgKz0gYDx0cj5cbiAgICA8dGggY2xhc3M9J3RhYmxlX19oZWFkLXRoJz4ke2tleS50b1VwcGVyQ2FzZSgpfTwvdGg+XG4gICAgPC90cj5gO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGJvb2xlYW5Db252ZXJ0cyh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIikge1xuICAgIGlmICh2YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgdmFsdWUgPSBcIlllc1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IFwiTm9cIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuIiwiaW1wb3J0IHsgYm9vbGVhbkNvbnZlcnRzIH0gZnJvbSBcIi4vYm9vbGVhbkNvbnZlcnRzXCI7XG5pbXBvcnQgeyB0YWJsZUJvZHkgfSBmcm9tIFwiLi9tYWluXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCb2R5KGRhdGEpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZGF0YUVudHJpZXMgPSBPYmplY3QuZW50cmllcyhkYXRhW2ldKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhRW50cmllcyk7XG4gICAgdGFibGVCb2R5LmlubmVySFRNTCArPSBgPHRyIGlkPVwiJHtkYXRhW2ldW1wiaWRcIl19XCIgY2xhc3M9XCJ0YWJsZV9fYm9keS1yb3cgdGFibGVfX2JvZHktcm93LS0ke2RhdGFbaV1bXCJpZFwiXX1cIj48L3RyPmA7XG4gICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIGRhdGFFbnRyaWVzKSB7XG4gICAgICBjb25zdCB0YWJsZUJvZHlSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGFibGVfX2JvZHktcm93LS0ke2RhdGFbaV1bXCJpZFwiXX1gKTtcbiAgICAgIGlmIChrZXkgIT09IFwiaWRcIikge1xuICAgICAgICB2YWx1ZSA9IGJvb2xlYW5Db252ZXJ0cyh2YWx1ZSk7XG4gICAgICAgIHRhYmxlQm9keVJvdy5pbm5lckhUTUwgKz0gYDx0ZCBjbGFzcz1cInRhYmxlX19ib2R5LXRkXCI+JHt2YWx1ZX08L3RkPmA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBmb3JtIH0gZnJvbSBcIi4vbWFpblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWRpdEZvcm0oZGF0YSkge1xuICBjb25zdCBkYXRhRW50cmllcyA9IE9iamVjdC5lbnRyaWVzKGRhdGFbMF0pO1xuICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgZGF0YUVudHJpZXMpIHtcbiAgICBpZiAoa2V5ICE9PSBcImlkXCIpIHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgIGZvcm0uaW5uZXJIVE1MICs9IGA8cCBjbGFzcz1cImZvcm1fX2VsZW1lbnQgZm9ybV9fZWxlbWVudC0taW5hY3RpdmUgZm9ybV9fZWxlbWVudC0tanNcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybV9fbGFiZWxcIiBmb3I9XCJjaGVja2JveFwiPiR7a2V5fTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiJHtrZXl9XCIgaWQ9XCIke2tleX1cIj5cbiAgICA8L3A+YDtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgZm9ybS5pbm5lckhUTUwgKz0gYDxwIGNsYXNzPVwiZm9ybV9fZWxlbWVudCBmb3JtX19lbGVtZW50LS1pbmFjdGl2ZSBmb3JtX19lbGVtZW50LS1qc1wiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtX19sYWJlbFwiIGZvcj1cIiR7a2V5fVwiPiR7a2V5fTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVwidGV4dFwiIG5hbWU9XCIke2tleX1cIiBpZD1cIiR7a2V5fVwiIHBsYWNlaG9sZGVyPVwiXCI+XG4gICAgPC9wPmA7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIGZvcm0uaW5uZXJIVE1MICs9IGA8cCBjbGFzcz1cImZvcm1fX2VsZW1lbnQgZm9ybV9fZWxlbWVudC0taW5hY3RpdmUgZm9ybV9fZWxlbWVudC0tanNcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybV9fbGFiZWxcIiBmb3I9XCIke2tleX1cIj4ke2tleX08L2xhYmVsPlxuICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCIke2tleX1cIiBpZD1cIiR7a2V5fVwiIHN0ZXA9MC41PlxuICAgIDwvcD5gO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBmb3JtLmlubmVySFRNTCArPSBgPGlucHV0IGNsYXNzPVwiZm9ybV9fYnRuLXN1Ym1pdCBmb3JtX19lbGVtZW50LS1pbmFjdGl2ZSBmb3JtX19lbGVtZW50LS1qc1wiIGlkPVwiYnRuc2F2ZVwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNhdmVcIj5gO1xufVxuIiwiaW1wb3J0IHsgYm9vbGVhbkNvbnZlcnRzIH0gZnJvbSBcIi4vYm9vbGVhbkNvbnZlcnRzXCI7XG5pbXBvcnQgeyB1c2Vycywgc2VsZWN0ZWRJRCB9IGZyb20gXCIuL21haW5cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1vZGlmeVRhYmxlUm93KGRhdGEpIHtcbiAgY29uc3QgaW5kZXhUb0VkaXQgPSB1c2Vycy5maW5kSW5kZXgoeCA9PiB4LmlkID09IHNlbGVjdGVkSUQpO1xuICBjb25zdCB0YWJsZUJvZHlSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGFibGVfX2JvZHktcm93LS0ke3VzZXJzW2luZGV4VG9FZGl0XVtcImlkXCJdfWApO1xuICB0YWJsZUJvZHlSb3cuaW5uZXJIVE1MID0gYGA7XG4gIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBkYXRhKSB7XG4gICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgIGlmIChrZXkgIT09IFwiaWRcIikge1xuICAgICAgdmFsdWUgPSBib29sZWFuQ29udmVydHModmFsdWUpO1xuICAgICAgdGFibGVCb2R5Um93LmlubmVySFRNTCArPSBgPHRkIGNsYXNzPVwidGFibGVfX2JvZHktdGRcIj4ke3ZhbHVlfTwvdGQ+YDtcbiAgICB9XG4gIH1cbiAgdGFibGVCb2R5Um93LmNsYXNzTGlzdC5hZGQoYHRhYmxlX19ib2R5LXJvdy0tZWRpdGVkYClcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdGFibGVCb2R5Um93LmNsYXNzTGlzdC5yZW1vdmUoYHRhYmxlX19ib2R5LXJvdy0tZWRpdGVkYClcbiAgfSwgMTAwMCk7XG59XG4iLCJpbXBvcnQgeyBzZWxlY3RlZElELCBmb3JtIH0gZnJvbSBcIi4vbWFpblwiO1xuaW1wb3J0IHsgbW9kaWZ5VGFibGVSb3cgfSBmcm9tIFwiLi9tb2RpZnlUYWJsZVJvd1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRWRpdChlKSB7XG4gIGxldCBuZXdEYXRhID0geyBpZDogc2VsZWN0ZWRJRCB9O1xuICBsZXQgcmVxdWlyZWRGaWVsZHNGaWxlZCA9IHRydWU7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybS5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBpZiAoZm9ybVtpXS50eXBlID09PSBcImNoZWNrYm94XCIpIHtcbiAgICAgIGZvcm1baV0uY2hlY2tlZCA/IChuZXdEYXRhW2Ake2Zvcm1baV0uaWR9YF0gPSB0cnVlKSA6IChuZXdEYXRhW2Ake2Zvcm1baV0uaWR9YF0gPSBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChmb3JtW2ldLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICBjb25zb2xlLmxvZyhmb3JtW2ldLnR5cGUpXG4gICAgICAgIG5ld0RhdGFbYCR7Zm9ybVtpXS5pZH1gXSA9IGZvcm1baV0udmFsdWU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFsaWQgPSBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zdCBkYXRhID0gT2JqZWN0LmVudHJpZXMobmV3RGF0YSk7XG4gIGlmIChyZXF1aXJlZEZpZWxkc0ZpbGVkKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgbW9kaWZ5VGFibGVSb3coZGF0YSk7XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSBcIi4vY3JlYXRlSGVhZGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVCb2R5IH0gZnJvbSBcIi4vY3JlYXRlQm9keVwiO1xuaW1wb3J0IHsgY3JlYXRlRWRpdEZvcm0gfSBmcm9tIFwiLi9jcmVhdGVFZGl0Rm9ybVwiO1xuaW1wb3J0IHsgaGFuZGxlRWRpdCB9IGZyb20gXCIuL2hhbmRsZUVkaXRcIjtcbi8vIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiAtIHJlbW92ZSBpZiB5b3UncmUgbm90IGdvaW5nIHRvIHVzZSBpdFxuXG5pZiAoXCJzZXJ2aWNlV29ya2VyXCIgaW4gbmF2aWdhdG9yKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbigpIHtcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcihcInNlcnZpY2V3b3JrZXIuanNcIikudGhlbihcbiAgICAgIGZ1bmN0aW9uKHJlZ2lzdHJhdGlvbikge1xuICAgICAgICAvLyBSZWdpc3RyYXRpb24gd2FzIHN1Y2Nlc3NmdWxcbiAgICAgICAgY29uc29sZS5sb2coXCJTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6IFwiLCByZWdpc3RyYXRpb24uc2NvcGUpO1xuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAvLyByZWdpc3RyYXRpb24gZmFpbGVkIDooXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiBcIiwgZXJyKTtcbiAgICAgIH1cbiAgICApO1xuICB9KTtcbn1cblxuLy8gcGxhY2UgeW91ciBjb2RlIGJlbG93XG5cbmV4cG9ydCBsZXQgdXNlcnMgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBuYW1lOiBcIktldmluXCIsXG4gICAgc3VybmFtZTogXCJEdXJhbnRcIixcbiAgICBhZ2U6IDMwLFxuICAgIHJldGlyZWQ6IGZhbHNlXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBuYW1lOiBcIkNocmlzXCIsXG4gICAgc3VybmFtZTogXCJQYXVsXCIsXG4gICAgYWdlOiAzNCxcbiAgICByZXRpcmVkOiBmYWxzZVxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgbmFtZTogXCJUcmFjeVwiLFxuICAgIHN1cm5hbWU6IFwiTWNHcmFkeVwiLFxuICAgIGFnZTogNDAsXG4gICAgcmV0aXJlZDogdHJ1ZVxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgbmFtZTogXCJBbGxlblwiLFxuICAgIHN1cm5hbWU6IFwiSXZlcnNvblwiLFxuICAgIGFnZTogNDQsXG4gICAgcmV0aXJlZDogdHJ1ZVxuICB9XG5dO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLS1qc1wiKTtcbmNvbnN0IGhlYWRlcnMgPSBPYmplY3Qua2V5cyh1c2Vyc1swXSkuc3BsaWNlKDEpO1xuXG5leHBvcnQgbGV0IHNlbGVjdGVkSUQ7XG5leHBvcnQgbGV0IHRhYmxlSGVhZDtcbmV4cG9ydCBsZXQgZWRpdEZvcm07XG5leHBvcnQgbGV0IHRhYmxlQm9keTtcbmV4cG9ydCBsZXQgZm9ybTtcbmV4cG9ydCBsZXQgZm9ybUVsZW1lbnRzO1xuXG5pZiAodXNlcnMubGVuZ3RoKSB7XG4gIG1haW4uaW5uZXJIVE1MICs9IGBcbiAgXG4gIDxkaXYgY2xhc3M9XCJ0YWJsZS13cmFwcGVyXCI+XG4gICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtLWpzXCI+XG4gICAgICA8dGhlYWQgY2xhc3M9XCJ0YWJsZV9faGVhZFwiPlxuICAgICAgICA8dHIgY2xhc3M9XCJ0YWJsZV9faGVhZC10ciB0YWJsZV9faGVhZC10ci0tanNcIj5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHkgY2xhc3M9XCJ0YWJsZV9fYm9keSB0YWJsZV9fYm9keS0tanNcIj48L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gIDwvZGl2PlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZWRpdC1mb3JtXCI+XG4gICAgPGgyIGNsYXNzPVwiZWRpdC1mb3JtX19oZWFkZXJcIj5EeW5hbWljYWx5IGVkaXQgZm9ybSBkYXRhPC9oMj5cbiAgICA8Zm9ybSBhY3Rpb249XCIjXCIgY2xhc3M9XCJmb3JtIGZvcm0tLWJsdXJyZWQgZm9ybS0tanMgXCI+XG4gICAgPC9mb3JtPlxuICAgIDwvc2VjdGlvbj5gO1xuXG4gIHRhYmxlSGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVfX2hlYWQtdHItLWpzXCIpO1xuICB0YWJsZUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX19ib2R5LS1qc1wiKTtcbiAgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS0tanNcIik7XG5cbiAgY3JlYXRlSGVhZGVyKHVzZXJzKTtcbiAgY3JlYXRlQm9keSh1c2Vycyk7XG4gIGNyZWF0ZUVkaXRGb3JtKHVzZXJzKTtcbiAgZmlsbEVkaXRGb3JtT25DbGljaygpO1xuXG4gIGZvcm1FbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9ybV9fZWxlbWVudC0tanNcIik7XG59XG5cbmZ1bmN0aW9uIGZpbGxFZGl0Rm9ybU9uQ2xpY2soKSB7XG4gIGNvbnN0IHRhYmxlUm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJsZV9fYm9keS1yb3dcIik7XG4gIGZvciAoY29uc3QgaXRlbSBvZiB0YWJsZVJvdykge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiZm9ybS0tYmx1cnJlZFwiKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybUVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvcm1FbGVtZW50c1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiZm9ybV9fZWxlbWVudC0taW5hY3RpdmVcIik7XG4gICAgICB9XG4gICAgICBjb25zdCBub2RlID0gZS50YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgIHNlbGVjdGVkSUQgPSBub2RlLmlkO1xuICAgICAgY29uc3QgY2VsbHMgPSBub2RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGRcIik7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNlbGxzW2ldKTtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhlYWRlcnNbaV0pLnR5cGUgPT09IFwiY2hlY2tib3hcIikge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhlYWRlcnNbaV0pLmNoZWNrZWQgPSBjZWxsc1tpXS5pbm5lckhUTUwgPT09IFwiWWVzXCIgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGVhZGVyc1tpXSkudmFsdWUgPSBjZWxsc1tpXS5pbm5lckhUTUw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuc2F2ZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRWRpdCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n')}]);