import { useEffect, useState } from "react";
import Navbar from "./Navbar";

function App() {
  const [menus, setMenus] = useState(null);

  useEffect(function () {
    async function fetchMenus() {
      const res = await fetch("http://localhost:8000/api/data");
      const data = await res.json();
      setMenus(data);
    }
    fetchMenus();
  }, []);

  if (menus === null) return <div>Loading...</div>;

  return (
    <>
      <Navbar menus={menus} />
      <div className="container">React App</div>
    </>
  );
}

export default App;
