import { useMenus } from "./features/useMenus";

function Navbar() {
  const { isLoading, isPending, isRefetching, data: menus, error } = useMenus();
  if (isLoading || isRefetching || isPending) return <div>Loading...</div>;
  const { data } = menus;
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid container">
        <div className="navbar-brand">Dashboard</div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {data.map((menu) => (
              <li className="nav-item" key={menu.menuid}>
                <a
                  className={`nav-link ${
                    menu.enable_yn === "N" ? "disabled" : ""
                  }`}
                  aria-current="page"
                  href={`/${menu.menu_name}`}
                >
                  {menu.menu_heading}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
