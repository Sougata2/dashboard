import { useNavigate, useParams } from "react-router-dom";
import { useMenu } from "../features/useMenu";
import { useEditMenu } from "../features/useEditMenu";

function EditMenuForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isLoading, isRefetching, data: menu, error } = useMenu(id * 1);
  const { isEditing, edit } = useEditMenu();
  if (isLoading || isRefetching) return <div>Loading...</div>;
  const {
    data: { menu_heading, menu_name, menu_under, enable_yn },
  } = menu;

  function handleSubmit(e) {
    e.preventDefault();
    const heading = e.target.heading.value;
    const name = e.target.name.value;
    const under = e.target.under.value;
    const enable = e.target.enable.checked ? "Y" : "N";
    const menu = {
      menu_heading: heading,
      menu_name: name,
      menu_under: under,
      enable_yn: enable,
    };
    edit({ menu, id });
    return navigate("/");
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} id="create-form">
        <div className="mb-3">
          <label htmlFor="heading" className="form-label">
            Menu Heading
          </label>
          <input
            type="text"
            className="form-control"
            id="heading"
            disabled={isEditing}
            defaultValue={menu_heading}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Menu name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            disabled={isEditing}
            defaultValue={menu_name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="under" className="form-label">
            Menu Under
          </label>
          <input
            type="text"
            className="form-control"
            id="under"
            disabled={isEditing}
            defaultValue={menu_under}
          />
        </div>
        <div className="mb-3">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="enable"
              disabled={isEditing}
              defaultChecked={enable_yn === "Y"}
            />
            <label className="form-check-label" htmlFor="enable">
              Enable
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary" disabled={isEditing}>
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditMenuForm;
