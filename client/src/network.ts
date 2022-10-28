export async function Fetcher(url: string, token: string) {
  const req = await fetch(`http://localhost:3000${url}`, {
    headers: {
      Authorization: `token ${token}`,
    },
  });

  if (req.status == 403) {
    EmergencyLogOut();
  }

  return await req.json();
}

export function EmergencyLogOut() {
  localStorage.removeItem("session");
  location.replace("/prihlaseni");
}
