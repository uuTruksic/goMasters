export function GetSession() {
  let session = localStorage.getItem("session");
  if (!session) {
    return "";
  }
  return session;
}
