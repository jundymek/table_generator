import { booleanConverts } from "./booleanConverts";

export function createBody(data) {
  const tableBody = document.querySelector(".table__body--js");
  for (let i = 0; i < data.length; i++) {
    const dataEntries = Object.entries(data[i]);
    tableBody.innerHTML += `<tr id="${data[i]["id"]}" class="table__body-row">${fillTableRow(dataEntries)}</tr>`;
    ;
  }
}

function fillTableRow(dataEntries) {
  const items = dataEntries.map((item) => {
    if (item[0] !== "id") {
    return `<td class="table__body-td">${booleanConverts(item[1])}</td>`
    }
  })
  return items.join(" ")
}

