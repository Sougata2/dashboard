import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDeleteMenu } from "../features/useDeleteMenu";

const StyledMenuItem = styled.li`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
  padding: 5px 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const Heading = styled.div`
  font-size: 20px;
`;
const EditOption = styled.button``;
const DeleteOption = styled.button``;
const Options = styled.div`
  display: flex;
  gap: 10px;
`;
function MenuItem({ menu }) {
  const navigate = useNavigate();
  const { del, isDeleting } = useDeleteMenu();
  const { menuid, menu_heading, menu_under, enable_yn, menu_name } = menu;
  function handleDelete() {
    if (window.confirm("Proceed to delete Menu ?")) {
      del(menuid);
    }
  }
  return (
    <StyledMenuItem>
      <Heading>{menu_heading}</Heading>
      <Options>
        <EditOption
          className="btn btn-warning"
          onClick={(e) => navigate(`/update/${menuid}`)}
          disabled={isDeleting}
        >
          <i className="fa-solid fa-pencil"></i>
        </EditOption>
        <DeleteOption
          className="btn btn-danger"
          onClick={handleDelete}
          disabled={isDeleting}
        >
          <i className="fa-solid fa-trash"></i>
        </DeleteOption>
      </Options>
    </StyledMenuItem>
  );
}

export default MenuItem;
