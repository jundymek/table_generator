import { selectedID, form } from "./main";
import { modifyTableRow } from "./modifyTableRow";
import { typeValidationData } from "./createEditForm";

export function handleEdit(e) {
  const form = document.querySelector(".form--js");
  let newData = { id: selectedID };
  if (validateFormData(form)) {
    for (let i = 0; i < form.length - 1; i++) {
      if (form[i].type === "checkbox") {
        form[i].checked ? (newData[`${form[i].id}`] = true) : (newData[`${form[i].id}`] = false);
      } else {
          newData[`${form[i].id}`] = form[i].value;
        }
      }
      e.preventDefault()
      const data = Object.entries(newData);
      modifyTableRow(data);
    }
}

function validateFormData(form) {
  for (let i = 0; i < form.length - 1; i++) {
    if (form[i].value.length === 0) {
        return false
        }
    if ((form[i].type !== typeValidationData[i])) {
      form[i].setCustomValidity(`Expected ${typeValidationData[i]} value`);
      return false
    }
  }
  return true
}
