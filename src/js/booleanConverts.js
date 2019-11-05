export function booleanConverts(value) {
  if (typeof value === "boolean") {
    if (value === true) {
      value = "Yes";
    } else {
      value = "No";
    }
  }
  return value;
}
