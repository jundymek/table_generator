import { booleanConverts } from "./booleanConverts";
import { users, selectedID } from "./main";

export function modifyTableRow(data) {
  const indexToEdit = users.findIndex(x => x.id == selectedID);
  const tableBodyRow = document.querySelector(`.table__body-row--${users[indexToEdit]["id"]}`);
  tableBodyRow.innerHTML = ``;
  for (let [key, value] of data) {
    console.log(value);
    if (key !== "id") {
      value = booleanConverts(value);
      tableBodyRow.innerHTML += `<td class="table__body-td">${value}</td>`;
    }
  }
}
