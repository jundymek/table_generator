import { booleanConverts } from "./booleanConverts";
import { tableBody } from "./main";

export function createBody(data) {
  for (let i = 0; i < data.length; i++) {
    const dataEntries = Object.entries(data[i]);
    console.log(dataEntries);
    tableBody.innerHTML += `<tr id="${data[i]["id"]}" class="table__body-row table__body-row--${data[i]["id"]}"></tr>`;
    for (let [key, value] of dataEntries) {
      const tableBodyRow = document.querySelector(`.table__body-row--${data[i]["id"]}`);
      if (key !== "id") {
        value = booleanConverts(value);
        tableBodyRow.innerHTML += `<td>${value}</td>`;
      }
    }
  }
}
