!function(e){var n={};function t(c){if(n[c])return n[c].exports;var l=n[c]={i:c,l:!1,exports:{}};return e[c].call(l.exports,l,l.exports,t),l.l=!0,l.exports}t.m=e,t.c=n,t.d=function(e,n,c){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:c})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var l in e)t.d(c,l,function(n){return e[n]}.bind(null,l));return c},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=5)}([function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return users; });\n// place your code below\nlet users = [\n  {\n    id: 1,\n    name: "Kevin",\n    surname: "Durant",\n    age: 30,\n    retired: false\n  },\n  {\n    id: 2,\n    name: "Chris",\n    surname: "Paul",\n    age: 34,\n    retired: false\n  },\n  {\n    id: 3,\n    name: "Tracy",\n    surname: "McGrady",\n    age: 40,\n    retired: true\n  },\n  {\n    id: 4,\n    name: "Allen",\n    surname: "Iverson",\n    age: 44,\n    retired: true\n  }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvdXNlcnMuanM/YTA4NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwbGFjZSB5b3VyIGNvZGUgYmVsb3dcbmV4cG9ydCBsZXQgdXNlcnMgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBuYW1lOiBcIktldmluXCIsXG4gICAgc3VybmFtZTogXCJEdXJhbnRcIixcbiAgICBhZ2U6IDMwLFxuICAgIHJldGlyZWQ6IGZhbHNlXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBuYW1lOiBcIkNocmlzXCIsXG4gICAgc3VybmFtZTogXCJQYXVsXCIsXG4gICAgYWdlOiAzNCxcbiAgICByZXRpcmVkOiBmYWxzZVxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgbmFtZTogXCJUcmFjeVwiLFxuICAgIHN1cm5hbWU6IFwiTWNHcmFkeVwiLFxuICAgIGFnZTogNDAsXG4gICAgcmV0aXJlZDogdHJ1ZVxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgbmFtZTogXCJBbGxlblwiLFxuICAgIHN1cm5hbWU6IFwiSXZlcnNvblwiLFxuICAgIGFnZTogNDQsXG4gICAgcmV0aXJlZDogdHJ1ZVxuICB9XG5dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n')},function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./src/js/createHeader.js\n\n\nfunction createHeader(data) {\n  const tableHead = getHtmlElements().tableHead;\n  for (const key of Object.keys(data[0])) {\n    if (key !== "id") {\n      tableHead.innerHTML += `<tr>\n    <th class=\'table__head-th\'>${key.toUpperCase()}</th>\n    </tr>`;\n    }\n  }\n}\n\n// EXTERNAL MODULE: ./src/js/createBody.js\nvar createBody = __webpack_require__(4);\n\n// EXTERNAL MODULE: ./src/js/createEditForm.js\nvar createEditForm = __webpack_require__(3);\n\n// EXTERNAL MODULE: ./src/js/users.js\nvar users = __webpack_require__(0);\n\n// CONCATENATED MODULE: ./src/js/main.js\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedID", function() { return selectedID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHtmlElements", function() { return getHtmlElements; });\n\n\n\n\n\n// service worker registration - remove if you\'re not going to use it\n\nif ("serviceWorker" in navigator) {\n  window.addEventListener("load", function() {\n    navigator.serviceWorker.register("serviceworker.js").then(\n      function(registration) {\n        // Registration was successful\n        console.log("ServiceWorker registration successful with scope: ", registration.scope);\n      },\n      function(err) {\n        // registration failed :(\n        console.log("ServiceWorker registration failed: ", err);\n      }\n    );\n  });\n}\n\nlet selectedID;\n\nif (users["a" /* users */].length) {\n  createBasicHtml();\n  createHeader(users["a" /* users */]);\n  Object(createBody["createBody"])(users["a" /* users */]);\n  Object(createEditForm["createEditForm"])(users["a" /* users */]);\n  handleClickOnTableRow();\n}\n\nfunction createBasicHtml() {\n  const main = getHtmlElements().main\n  // const main = document.querySelector(".main--js");\n  main.innerHTML += `\n  \n  <div class="table-wrapper">\n    <table class="table table--js">\n      <thead class="table__head">\n        <tr class="table__head-tr table__head-tr--js">\n        </tr>\n      </thead>\n      <tbody class="table__body table__body--js"></tbody>\n    </table>\n  </div>\n    <section class="edit-form">\n    <h2 class="edit-form__header">Dynamicaly edit form data</h2>\n    <form action="#" class="form form--disabled form--js ">\n    </form>\n    </section>`;\n}\n\nfunction handleClickOnTableRow() {\n  const tableRows = getHtmlElements().tableRows;\n  for (const item of tableRows) {\n    item.addEventListener("click", e => {\n      removeDisabledAttrFromForm();\n      fillEditFormInputFields(e); \n    });\n  }\n}\n\nfunction fillEditFormInputFields(e) {\n  const headers = Object.keys(users["a" /* users */][0]).splice(1);\n  const node = e.target.parentNode;\n  selectedID = node.id;\n  const cells = node.getElementsByTagName("td");\n  for (let i = 0; i < cells.length; i++) {\n    if (document.getElementById(headers[i]).type === "checkbox") {\n      document.getElementById(headers[i]).checked = cells[i].innerHTML === "Yes" ? true : false;\n    }\n    else {\n      document.getElementById(headers[i]).value = cells[i].innerHTML;\n    }\n  }\n}\n\nfunction removeDisabledAttrFromForm() {\n  const form = getHtmlElements().form;\n  const formElements = getHtmlElements().formElements;\n  removeDisabledClass(form);\n  removeDisabledAttribute(formElements);\n}\n\nfunction removeDisabledClass(form) {\n  form.classList.remove("form--disabled");\n}\n\nfunction removeDisabledAttribute(formElements) {\n  formElements.forEach((element) => element.disabled = false)\n}\n\nfunction getHtmlElements() {\n  const elements = {\n    \'main\': document.querySelector(".main--js"),\n    \'tableRows\': document.querySelectorAll(".table__body-row"),\n    \'form\': document.querySelector(".form--js"),\n    \'formElements\': document.querySelectorAll(".form__input--js"),\n    \'tableHead\': document.querySelector(".table__head-tr--js")\n  }\n  return elements\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY3JlYXRlSGVhZGVyLmpzP2MyNjciLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanM/OTI5MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBeUM7O0FBRWxDO0FBQ1Asb0JBQW9CLGVBQWU7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDWEE7QUFBQTtBQUFhO0FBQ2lDO0FBQ0o7QUFDUTtBQUNsQjtBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTzs7QUFFUCxJQUFJLHNCQUFLO0FBQ1Q7QUFDQSxFQUFFLFlBQVksQ0FBQyxzQkFBSztBQUNwQixFQUFFLGdDQUFVLENBQUMsc0JBQUs7QUFDbEIsRUFBRSx3Q0FBYyxDQUFDLHNCQUFLO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQztBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLHNCQUFLO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0SHRtbEVsZW1lbnRzIH0gZnJvbSBcIi4vbWFpblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKGRhdGEpIHtcbiAgY29uc3QgdGFibGVIZWFkID0gZ2V0SHRtbEVsZW1lbnRzKCkudGFibGVIZWFkO1xuICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhkYXRhWzBdKSkge1xuICAgIGlmIChrZXkgIT09IFwiaWRcIikge1xuICAgICAgdGFibGVIZWFkLmlubmVySFRNTCArPSBgPHRyPlxuICAgIDx0aCBjbGFzcz0ndGFibGVfX2hlYWQtdGgnPiR7a2V5LnRvVXBwZXJDYXNlKCl9PC90aD5cbiAgICA8L3RyPmA7XG4gICAgfVxuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbmltcG9ydCB7IGNyZWF0ZUhlYWRlciB9IGZyb20gXCIuL2NyZWF0ZUhlYWRlclwiO1xuaW1wb3J0IHsgY3JlYXRlQm9keSB9IGZyb20gXCIuL2NyZWF0ZUJvZHlcIjtcbmltcG9ydCB7IGNyZWF0ZUVkaXRGb3JtIH0gZnJvbSBcIi4vY3JlYXRlRWRpdEZvcm1cIjtcbmltcG9ydCB7IHVzZXJzIH0gZnJvbSBcIi4vdXNlcnNcIjtcbi8vIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiAtIHJlbW92ZSBpZiB5b3UncmUgbm90IGdvaW5nIHRvIHVzZSBpdFxuXG5pZiAoXCJzZXJ2aWNlV29ya2VyXCIgaW4gbmF2aWdhdG9yKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbigpIHtcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcihcInNlcnZpY2V3b3JrZXIuanNcIikudGhlbihcbiAgICAgIGZ1bmN0aW9uKHJlZ2lzdHJhdGlvbikge1xuICAgICAgICAvLyBSZWdpc3RyYXRpb24gd2FzIHN1Y2Nlc3NmdWxcbiAgICAgICAgY29uc29sZS5sb2coXCJTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6IFwiLCByZWdpc3RyYXRpb24uc2NvcGUpO1xuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAvLyByZWdpc3RyYXRpb24gZmFpbGVkIDooXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiBcIiwgZXJyKTtcbiAgICAgIH1cbiAgICApO1xuICB9KTtcbn1cblxuZXhwb3J0IGxldCBzZWxlY3RlZElEO1xuXG5pZiAodXNlcnMubGVuZ3RoKSB7XG4gIGNyZWF0ZUJhc2ljSHRtbCgpO1xuICBjcmVhdGVIZWFkZXIodXNlcnMpO1xuICBjcmVhdGVCb2R5KHVzZXJzKTtcbiAgY3JlYXRlRWRpdEZvcm0odXNlcnMpO1xuICBoYW5kbGVDbGlja09uVGFibGVSb3coKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQmFzaWNIdG1sKCkge1xuICBjb25zdCBtYWluID0gZ2V0SHRtbEVsZW1lbnRzKCkubWFpblxuICAvLyBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLS1qc1wiKTtcbiAgbWFpbi5pbm5lckhUTUwgKz0gYFxuICBcbiAgPGRpdiBjbGFzcz1cInRhYmxlLXdyYXBwZXJcIj5cbiAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS0tanNcIj5cbiAgICAgIDx0aGVhZCBjbGFzcz1cInRhYmxlX19oZWFkXCI+XG4gICAgICAgIDx0ciBjbGFzcz1cInRhYmxlX19oZWFkLXRyIHRhYmxlX19oZWFkLXRyLS1qc1wiPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keSBjbGFzcz1cInRhYmxlX19ib2R5IHRhYmxlX19ib2R5LS1qc1wiPjwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgPC9kaXY+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJlZGl0LWZvcm1cIj5cbiAgICA8aDIgY2xhc3M9XCJlZGl0LWZvcm1fX2hlYWRlclwiPkR5bmFtaWNhbHkgZWRpdCBmb3JtIGRhdGE8L2gyPlxuICAgIDxmb3JtIGFjdGlvbj1cIiNcIiBjbGFzcz1cImZvcm0gZm9ybS0tZGlzYWJsZWQgZm9ybS0tanMgXCI+XG4gICAgPC9mb3JtPlxuICAgIDwvc2VjdGlvbj5gO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVDbGlja09uVGFibGVSb3coKSB7XG4gIGNvbnN0IHRhYmxlUm93cyA9IGdldEh0bWxFbGVtZW50cygpLnRhYmxlUm93cztcbiAgZm9yIChjb25zdCBpdGVtIG9mIHRhYmxlUm93cykge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgcmVtb3ZlRGlzYWJsZWRBdHRyRnJvbUZvcm0oKTtcbiAgICAgIGZpbGxFZGl0Rm9ybUlucHV0RmllbGRzKGUpOyBcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaWxsRWRpdEZvcm1JbnB1dEZpZWxkcyhlKSB7XG4gIGNvbnN0IGhlYWRlcnMgPSBPYmplY3Qua2V5cyh1c2Vyc1swXSkuc3BsaWNlKDEpO1xuICBjb25zdCBub2RlID0gZS50YXJnZXQucGFyZW50Tm9kZTtcbiAgc2VsZWN0ZWRJRCA9IG5vZGUuaWQ7XG4gIGNvbnN0IGNlbGxzID0gbm9kZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRkXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhlYWRlcnNbaV0pLnR5cGUgPT09IFwiY2hlY2tib3hcIikge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGVhZGVyc1tpXSkuY2hlY2tlZCA9IGNlbGxzW2ldLmlubmVySFRNTCA9PT0gXCJZZXNcIiA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoZWFkZXJzW2ldKS52YWx1ZSA9IGNlbGxzW2ldLmlubmVySFRNTDtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlRGlzYWJsZWRBdHRyRnJvbUZvcm0oKSB7XG4gIGNvbnN0IGZvcm0gPSBnZXRIdG1sRWxlbWVudHMoKS5mb3JtO1xuICBjb25zdCBmb3JtRWxlbWVudHMgPSBnZXRIdG1sRWxlbWVudHMoKS5mb3JtRWxlbWVudHM7XG4gIHJlbW92ZURpc2FibGVkQ2xhc3MoZm9ybSk7XG4gIHJlbW92ZURpc2FibGVkQXR0cmlidXRlKGZvcm1FbGVtZW50cyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZURpc2FibGVkQ2xhc3MoZm9ybSkge1xuICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJmb3JtLS1kaXNhYmxlZFwiKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRGlzYWJsZWRBdHRyaWJ1dGUoZm9ybUVsZW1lbnRzKSB7XG4gIGZvcm1FbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiBlbGVtZW50LmRpc2FibGVkID0gZmFsc2UpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRIdG1sRWxlbWVudHMoKSB7XG4gIGNvbnN0IGVsZW1lbnRzID0ge1xuICAgICdtYWluJzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLS1qc1wiKSxcbiAgICAndGFibGVSb3dzJzogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJsZV9fYm9keS1yb3dcIiksXG4gICAgJ2Zvcm0nOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tLWpzXCIpLFxuICAgICdmb3JtRWxlbWVudHMnOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcm1fX2lucHV0LS1qc1wiKSxcbiAgICAndGFibGVIZWFkJzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJsZV9faGVhZC10ci0tanNcIilcbiAgfVxuICByZXR1cm4gZWxlbWVudHNcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n')},function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "booleanConverts", function() { return booleanConverts; });\nfunction booleanConverts(value) {\n  if (typeof value === "boolean") {\n    return value ? "Yes" : "No"\n  }\n  return value\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYm9vbGVhbkNvbnZlcnRzLmpzP2U4YmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGJvb2xlYW5Db252ZXJ0cyh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIikge1xuICAgIHJldHVybiB2YWx1ZSA/IFwiWWVzXCIgOiBcIk5vXCJcbiAgfVxuICByZXR1cm4gdmFsdWVcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n')},function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeValidationData", function() { return typeValidationData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEditForm", function() { return createEditForm; });\n/* harmony import */ var _handleEdit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);\n\n\n\nlet typeValidationData = [];\nfunction createEditForm(data) {\n  const dataEntries = Object.entries(data[0]);\n  const form = Object(_main__WEBPACK_IMPORTED_MODULE_1__["getHtmlElements"])().form\n  for (let [key, value] of dataEntries) {\n    if (key !== "id") {\n      if (typeof value === "boolean") {\n        typeValidationData.push("checkbox");\n        form.innerHTML += `<p class="form__element form__element--js">\n        <label class="form__label" for="checkbox">${key}</label>\n        <input class="form__input form__input--js" disabled type="checkbox" name="${key}" id="${key}">\n    </p>`;\n      }\n      if (typeof value === "string") {\n        typeValidationData.push("text");\n        form.innerHTML += `<p class="form__element form__element--js">\n        <label class="form__label" for="${key}">${key}</label>\n        <input class="form__input form__input--js" disabled required type="text" name="${key}" id="${key}" placeholder="">\n    </p>`;\n      }\n      if (typeof value === "number") {\n        typeValidationData.push("number");\n        form.innerHTML += `<p class="form__element form__element--js">\n        <label class="form__label" for="${key}">${key}</label>\n        <input class="form__input form__input--js" disabled required type="number" name="${key}" id="${key}" step=0.5>\n    </p>`;\n      }\n    }\n  }\n  form.innerHTML += `<input class="form__input form__input--js" disabled class="form__btn-submit form__element--js" id="btnsave" type="submit" value="Save">`;\n  document.getElementById("btnsave").addEventListener("click", _handleEdit__WEBPACK_IMPORTED_MODULE_0__["handleEdit"]);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY3JlYXRlRWRpdEZvcm0uanM/YWZhZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBDO0FBQ0Q7O0FBRWxDO0FBQ0E7QUFDUDtBQUNBLGVBQWUsNkRBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxJQUFJO0FBQ3hELG9GQUFvRixJQUFJLFFBQVEsSUFBSTtBQUNwRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLElBQUksSUFBSSxJQUFJO0FBQ3RELHlGQUF5RixJQUFJLFFBQVEsSUFBSTtBQUN6RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLElBQUksSUFBSSxJQUFJO0FBQ3RELDJGQUEyRixJQUFJLFFBQVEsSUFBSTtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStELHNEQUFVO0FBQ3pFIiwiZmlsZSI6IjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVFZGl0IH0gZnJvbSBcIi4vaGFuZGxlRWRpdFwiO1xuaW1wb3J0IHsgZ2V0SHRtbEVsZW1lbnRzIH0gZnJvbSBcIi4vbWFpblwiO1xuXG5leHBvcnQgbGV0IHR5cGVWYWxpZGF0aW9uRGF0YSA9IFtdO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVkaXRGb3JtKGRhdGEpIHtcbiAgY29uc3QgZGF0YUVudHJpZXMgPSBPYmplY3QuZW50cmllcyhkYXRhWzBdKTtcbiAgY29uc3QgZm9ybSA9IGdldEh0bWxFbGVtZW50cygpLmZvcm1cbiAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIGRhdGFFbnRyaWVzKSB7XG4gICAgaWYgKGtleSAhPT0gXCJpZFwiKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICB0eXBlVmFsaWRhdGlvbkRhdGEucHVzaChcImNoZWNrYm94XCIpO1xuICAgICAgICBmb3JtLmlubmVySFRNTCArPSBgPHAgY2xhc3M9XCJmb3JtX19lbGVtZW50IGZvcm1fX2VsZW1lbnQtLWpzXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm1fX2xhYmVsXCIgZm9yPVwiY2hlY2tib3hcIj4ke2tleX08L2xhYmVsPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtX19pbnB1dCBmb3JtX19pbnB1dC0tanNcIiBkaXNhYmxlZCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiJHtrZXl9XCIgaWQ9XCIke2tleX1cIj5cbiAgICA8L3A+YDtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgdHlwZVZhbGlkYXRpb25EYXRhLnB1c2goXCJ0ZXh0XCIpO1xuICAgICAgICBmb3JtLmlubmVySFRNTCArPSBgPHAgY2xhc3M9XCJmb3JtX19lbGVtZW50IGZvcm1fX2VsZW1lbnQtLWpzXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm1fX2xhYmVsXCIgZm9yPVwiJHtrZXl9XCI+JHtrZXl9PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybV9faW5wdXQgZm9ybV9faW5wdXQtLWpzXCIgZGlzYWJsZWQgcmVxdWlyZWQgdHlwZT1cInRleHRcIiBuYW1lPVwiJHtrZXl9XCIgaWQ9XCIke2tleX1cIiBwbGFjZWhvbGRlcj1cIlwiPlxuICAgIDwvcD5gO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICB0eXBlVmFsaWRhdGlvbkRhdGEucHVzaChcIm51bWJlclwiKTtcbiAgICAgICAgZm9ybS5pbm5lckhUTUwgKz0gYDxwIGNsYXNzPVwiZm9ybV9fZWxlbWVudCBmb3JtX19lbGVtZW50LS1qc1wiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtX19sYWJlbFwiIGZvcj1cIiR7a2V5fVwiPiR7a2V5fTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm1fX2lucHV0IGZvcm1fX2lucHV0LS1qc1wiIGRpc2FibGVkIHJlcXVpcmVkIHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiJHtrZXl9XCIgaWQ9XCIke2tleX1cIiBzdGVwPTAuNT5cbiAgICA8L3A+YDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZm9ybS5pbm5lckhUTUwgKz0gYDxpbnB1dCBjbGFzcz1cImZvcm1fX2lucHV0IGZvcm1fX2lucHV0LS1qc1wiIGRpc2FibGVkIGNsYXNzPVwiZm9ybV9fYnRuLXN1Ym1pdCBmb3JtX19lbGVtZW50LS1qc1wiIGlkPVwiYnRuc2F2ZVwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNhdmVcIj5gO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bnNhdmVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUVkaXQpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n')},function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBody", function() { return createBody; });\n/* harmony import */ var _booleanConverts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);\n\n\nfunction createBody(data) {\n  const tableBody = document.querySelector(".table__body--js");\n  for (let i = 0; i < data.length; i++) {\n    const dataEntries = Object.entries(data[i]);\n    tableBody.innerHTML += `<tr id="${data[i]["id"]}" class="table__body-row">${fillTableRow(dataEntries)}</tr>`;\n    ;\n  }\n}\n\nfunction fillTableRow(dataEntries) {\n  const items = dataEntries.map((item) => {\n    if (item[0] !== "id") {\n    return `<td class="table__body-td">${Object(_booleanConverts__WEBPACK_IMPORTED_MODULE_0__["booleanConverts"])(item[1])}</td>`\n    }\n  })\n  return items.join(" ")\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY3JlYXRlQm9keS5qcz9kNjhmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFvRDs7QUFFN0M7QUFDUDtBQUNBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQSxzQ0FBc0MsY0FBYyw0QkFBNEIsMEJBQTBCO0FBQzFHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsd0VBQWUsVUFBVTtBQUNsRTtBQUNBLEdBQUc7QUFDSDtBQUNBIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBib29sZWFuQ29udmVydHMgfSBmcm9tIFwiLi9ib29sZWFuQ29udmVydHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJvZHkoZGF0YSkge1xuICBjb25zdCB0YWJsZUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX19ib2R5LS1qc1wiKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZGF0YUVudHJpZXMgPSBPYmplY3QuZW50cmllcyhkYXRhW2ldKTtcbiAgICB0YWJsZUJvZHkuaW5uZXJIVE1MICs9IGA8dHIgaWQ9XCIke2RhdGFbaV1bXCJpZFwiXX1cIiBjbGFzcz1cInRhYmxlX19ib2R5LXJvd1wiPiR7ZmlsbFRhYmxlUm93KGRhdGFFbnRyaWVzKX08L3RyPmA7XG4gICAgO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbGxUYWJsZVJvdyhkYXRhRW50cmllcykge1xuICBjb25zdCBpdGVtcyA9IGRhdGFFbnRyaWVzLm1hcCgoaXRlbSkgPT4ge1xuICAgIGlmIChpdGVtWzBdICE9PSBcImlkXCIpIHtcbiAgICByZXR1cm4gYDx0ZCBjbGFzcz1cInRhYmxlX19ib2R5LXRkXCI+JHtib29sZWFuQ29udmVydHMoaXRlbVsxXSl9PC90ZD5gXG4gICAgfVxuICB9KVxuICByZXR1cm4gaXRlbXMuam9pbihcIiBcIilcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n')},function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleEdit", function() { return handleEdit; });\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n/* harmony import */ var _modifyTableRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);\n/* harmony import */ var _createEditForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);\n\n\n\n\nfunction handleEdit(e) {\n  const form = document.querySelector(".form--js");\n  let newData = { id: _main__WEBPACK_IMPORTED_MODULE_0__["selectedID"] };\n  if (validateFormData(form)) {\n    for (let i = 0; i < form.length - 1; i++) {\n      if (form[i].type === "checkbox") {\n        form[i].checked ? (newData[`${form[i].id}`] = true) : (newData[`${form[i].id}`] = false);\n      } else {\n          newData[`${form[i].id}`] = form[i].value;\n        }\n      }\n      e.preventDefault()\n      const data = Object.entries(newData);\n      Object(_modifyTableRow__WEBPACK_IMPORTED_MODULE_1__["modifyTableRow"])(data);\n    }\n}\n\nfunction validateFormData(form) {\n  for (let i = 0; i < form.length - 1; i++) {\n    if (form[i].value.length === 0) {\n        return false\n        }\n    if ((form[i].type !== _createEditForm__WEBPACK_IMPORTED_MODULE_2__["typeValidationData"][i])) {\n      form[i].setCustomValidity(`Expected ${_createEditForm__WEBPACK_IMPORTED_MODULE_2__["typeValidationData"][i]} value`);\n      return false\n    }\n  }\n  return true\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaGFuZGxlRWRpdC5qcz83MWFkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEM7QUFDUTtBQUNJOztBQUUvQztBQUNQO0FBQ0EsaUJBQWlCLEtBQUssZ0RBQVU7QUFDaEM7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0Esc0NBQXNDLFdBQVcseUJBQXlCLFdBQVc7QUFDckYsT0FBTztBQUNQLHFCQUFxQixXQUFXO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxzRUFBYztBQUNwQjtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsa0VBQWtCO0FBQzVDLDRDQUE0QyxrRUFBa0IsSUFBSTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZWxlY3RlZElELCBmb3JtIH0gZnJvbSBcIi4vbWFpblwiO1xuaW1wb3J0IHsgbW9kaWZ5VGFibGVSb3cgfSBmcm9tIFwiLi9tb2RpZnlUYWJsZVJvd1wiO1xuaW1wb3J0IHsgdHlwZVZhbGlkYXRpb25EYXRhIH0gZnJvbSBcIi4vY3JlYXRlRWRpdEZvcm1cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUVkaXQoZSkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLS1qc1wiKTtcbiAgbGV0IG5ld0RhdGEgPSB7IGlkOiBzZWxlY3RlZElEIH07XG4gIGlmICh2YWxpZGF0ZUZvcm1EYXRhKGZvcm0pKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgaWYgKGZvcm1baV0udHlwZSA9PT0gXCJjaGVja2JveFwiKSB7XG4gICAgICAgIGZvcm1baV0uY2hlY2tlZCA/IChuZXdEYXRhW2Ake2Zvcm1baV0uaWR9YF0gPSB0cnVlKSA6IChuZXdEYXRhW2Ake2Zvcm1baV0uaWR9YF0gPSBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0RhdGFbYCR7Zm9ybVtpXS5pZH1gXSA9IGZvcm1baV0udmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgY29uc3QgZGF0YSA9IE9iamVjdC5lbnRyaWVzKG5ld0RhdGEpO1xuICAgICAgbW9kaWZ5VGFibGVSb3coZGF0YSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZvcm1EYXRhKGZvcm0pIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGlmIChmb3JtW2ldLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgIGlmICgoZm9ybVtpXS50eXBlICE9PSB0eXBlVmFsaWRhdGlvbkRhdGFbaV0pKSB7XG4gICAgICBmb3JtW2ldLnNldEN1c3RvbVZhbGlkaXR5KGBFeHBlY3RlZCAke3R5cGVWYWxpZGF0aW9uRGF0YVtpXX0gdmFsdWVgKTtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n')},function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifyTableRow", function() { return modifyTableRow; });\n/* harmony import */ var _booleanConverts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);\n/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);\n\n\n\n\nfunction modifyTableRow(data) {\n  const indexToEdit = _users__WEBPACK_IMPORTED_MODULE_2__[/* users */ "a"].findIndex(x => x.id == _main__WEBPACK_IMPORTED_MODULE_1__["selectedID"]);\n  const tableBodyRow = document.getElementById(`${_users__WEBPACK_IMPORTED_MODULE_2__[/* users */ "a"][indexToEdit]["id"]}`);\n  tableBodyRow.innerHTML = ``;\n  for (let [key, value] of data) {\n    if (key !== "id") {\n      tableBodyRow.innerHTML += `<td class="table__body-td">${Object(_booleanConverts__WEBPACK_IMPORTED_MODULE_0__["booleanConverts"])(value)}</td>`;\n    }\n  }\n  tableBodyRow.classList.add(`table__body-row--edited`)\n  setTimeout(() => {\n    tableBodyRow.classList.remove(`table__body-row--edited`)\n  }, 1000);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kaWZ5VGFibGVSb3cuanM/M2M5ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9EO0FBQ2hCO0FBQ0o7O0FBRXpCO0FBQ1Asc0JBQXNCLG9EQUFLLHdCQUF3QixnREFBVTtBQUM3RCxrREFBa0Qsb0RBQUssb0JBQW9CO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCx3RUFBZSxRQUFRO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJmaWxlIjoiNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJvb2xlYW5Db252ZXJ0cyB9IGZyb20gXCIuL2Jvb2xlYW5Db252ZXJ0c1wiO1xuaW1wb3J0IHsgc2VsZWN0ZWRJRCB9IGZyb20gXCIuL21haW5cIjtcbmltcG9ydCB7IHVzZXJzIH0gZnJvbSBcIi4vdXNlcnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1vZGlmeVRhYmxlUm93KGRhdGEpIHtcbiAgY29uc3QgaW5kZXhUb0VkaXQgPSB1c2Vycy5maW5kSW5kZXgoeCA9PiB4LmlkID09IHNlbGVjdGVkSUQpO1xuICBjb25zdCB0YWJsZUJvZHlSb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt1c2Vyc1tpbmRleFRvRWRpdF1bXCJpZFwiXX1gKTtcbiAgdGFibGVCb2R5Um93LmlubmVySFRNTCA9IGBgO1xuICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgZGF0YSkge1xuICAgIGlmIChrZXkgIT09IFwiaWRcIikge1xuICAgICAgdGFibGVCb2R5Um93LmlubmVySFRNTCArPSBgPHRkIGNsYXNzPVwidGFibGVfX2JvZHktdGRcIj4ke2Jvb2xlYW5Db252ZXJ0cyh2YWx1ZSl9PC90ZD5gO1xuICAgIH1cbiAgfVxuICB0YWJsZUJvZHlSb3cuY2xhc3NMaXN0LmFkZChgdGFibGVfX2JvZHktcm93LS1lZGl0ZWRgKVxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB0YWJsZUJvZHlSb3cuY2xhc3NMaXN0LnJlbW92ZShgdGFibGVfX2JvZHktcm93LS1lZGl0ZWRgKVxuICB9LCAxMDAwKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n')}]);