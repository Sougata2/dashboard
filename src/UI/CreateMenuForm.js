import { useCreateMenu } from "../features/useCreateMenu";

function CreateMenuForm() {
  const { isCreating, create } = useCreateMenu();
  function handleSubmit(e) {
    e.preventDefault();
    const heading = e.target.heading.value;
    const name = e.target.name.value;
    const under = e.target.under.value;
    const enable = e.target.enable.checked ? "Y" : "N";
    const newMenu = {
      menu_heading: heading,
      menu_name: name,
      menu_under: under,
      enable_yn: enable,
    };
    create(newMenu);
    e.target.reset();
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
            disabled={isCreating}
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
            disabled={isCreating}
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
            disabled={isCreating}
          />
        </div>
        <div className="mb-3">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="enable"
              disabled={isCreating}
            />
            <label className="form-check-label" htmlFor="enable">
              Enable
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary" disabled={isCreating}>
          Create Menu
        </button>
      </form>
    </div>
  );
}

export default CreateMenuForm;
