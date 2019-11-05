import { selectedID, form } from "./main";
import { modifyTableRow } from "./modifyTableRow";

export function handleEdit() {
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
