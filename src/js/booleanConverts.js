export function booleanConverts(value) {
  if (typeof value === "boolean") {
    return value ? "Yes" : "No"
  }
  return value
}
