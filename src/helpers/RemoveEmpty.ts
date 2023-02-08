export function removeEmpty(client: object) {
  return Object.fromEntries(Object.entries(client).filter(([_, v]) => v != ""));
}
