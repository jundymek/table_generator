import { tableHead } from "./main";

export function createHeader(data) {
  for (const key of Object.keys(data[0])) {
    if (key !== "id") {
      tableHead.innerHTML += `<tr>
    <th class='table__head-th'>${key.toUpperCase()}</th>
    </tr>`;
    }
  }
}
