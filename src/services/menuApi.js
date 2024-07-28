const BASE_URL = "http://localhost:8000/api/data";
export async function getMenus() {
  const res = await fetch(BASE_URL);
  const data = await res.json();
  return data;
}
