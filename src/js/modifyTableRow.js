import { booleanConverts } from "./booleanConverts";
import { selectedID } from "./main";
import { users } from "./users";

export function modifyTableRow(data) {
  const indexToEdit = users.findIndex(x => x.id == selectedID);
  const tableBodyRow = document.getElementById(`${users[indexToEdit]["id"]}`);
  tableBodyRow.innerHTML = ``;
  for (let [key, value] of data) {
    if (key !== "id") {
      tableBodyRow.innerHTML += `<td class="table__body-td">${booleanConverts(value)}</td>`;
    }
  }
  tableBodyRow.classList.add(`table__body-row--edited`)
  setTimeout(() => {
    tableBodyRow.classList.remove(`table__body-row--edited`)
  }, 1000);
}
