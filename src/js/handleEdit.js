import { selectedID, form } from "./main";
import { modifyTableRow } from "./modifyTableRow";

export function handleEdit(e) {
  let newData = { id: selectedID };
  let requiredFieldsFiled = true;
  for (let i = 0; i < form.length - 1; i++) {
    if (form[i].type === "checkbox") {
      form[i].checked ? (newData[`${form[i].id}`] = true) : (newData[`${form[i].id}`] = false);
    } else {
      if (form[i].value.length) {
        newData[`${form[i].id}`] = form[i].value;
      }
      else {
        valid = false
      }
    }
  }
  const data = Object.entries(newData);
  if (requiredFieldsFiled) {
    e.preventDefault()
    modifyTableRow(data);
  }
}
