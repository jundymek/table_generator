import { form } from "./main";

export function createEditForm(data) {
  const dataEntries = Object.entries(data[0]);
  for (let [key, value] of dataEntries) {
    if (key !== "id") {
      if (typeof value === "boolean") {
        form.innerHTML += `<p class="form__element form__element--inactive form__element--js">
        <label class="form__label" for="checkbox">${key}</label>
        <input type="checkbox" name="${key}" id="${key}">
    </p>`;
      }
      if (typeof value === "string") {
        form.innerHTML += `<p class="form__element form__element--inactive form__element--js">
        <label class="form__label" for="${key}">${key}</label>
        <input required type="text" name="${key}" id="${key}" placeholder="">
    </p>`;
      }
      if (typeof value === "number") {
        form.innerHTML += `<p class="form__element form__element--inactive form__element--js">
        <label class="form__label" for="${key}">${key}</label>
        <input required type="number" name="${key}" id="${key}" step=0.5>
    </p>`;
      }
    }
  }
  form.innerHTML += `<input class="form__btn-submit form__element--inactive form__element--js" id="btnsave" type="button" value="Save">`;
}
