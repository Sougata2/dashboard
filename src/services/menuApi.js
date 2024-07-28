const BASE_URL = "http://localhost:8000/api/data";
export async function getMenus() {
  const res = await fetch(BASE_URL);
  const data = await res.json();
  return data;
}

export async function createMenu(newMenu) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newMenu),
  });
  const data = await res.json();
  return data;
}

export async function getMenuById(menuid) {
  const res = await fetch(BASE_URL + `/${menuid}`);
  const data = await res.json();
  return data;
}

export async function editMenu(menu, id) {
  const res = await fetch(BASE_URL + `/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(menu),
  });
  const data = await res.json();
  return data;
}
