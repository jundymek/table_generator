import { handleEdit } from "./handleEdit";
import { getHtmlElements } from "./main";

export let typeValidationData = [];
export function createEditForm(data) {
  const dataEntries = Object.entries(data[0]);
  const form = getHtmlElements().form
  for (let [key, value] of dataEntries) {
    if (key !== "id") {
      if (typeof value === "boolean") {
        typeValidationData.push("checkbox");
        form.innerHTML += `<p class="form__element form__element--js">
        <label class="form__label" for="checkbox">${key}</label>
        <input class="form__input form__input--js" disabled type="checkbox" name="${key}" id="${key}">
    </p>`;
      }
      if (typeof value === "string") {
        typeValidationData.push("text");
        form.innerHTML += `<p class="form__element form__element--js">
        <label class="form__label" for="${key}">${key}</label>
        <input class="form__input form__input--js" disabled required type="text" name="${key}" id="${key}" placeholder="">
    </p>`;
      }
      if (typeof value === "number") {
        typeValidationData.push("number");
        form.innerHTML += `<p class="form__element form__element--js">
        <label class="form__label" for="${key}">${key}</label>
        <input class="form__input form__input--js" disabled required type="number" name="${key}" id="${key}" step=0.5>
    </p>`;
      }
    }
  }
  form.innerHTML += `<input class="form__input form__input--js" disabled class="form__btn-submit form__element--js" id="btnsave" type="submit" value="Save">`;
  document.getElementById("btnsave").addEventListener("click", handleEdit);
}
