import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledCreateMenu = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 20px;
`;
const CreateBtn = styled.button``;
function CreateMenu() {
  const navigate = useNavigate();

  return (
    <StyledCreateMenu>
      <CreateBtn className="btn btn-info" onClick={() => navigate("/create")}>
        <i className="fa-solid fa-plus"></i> Menu
      </CreateBtn>
    </StyledCreateMenu>
  );
}

export default CreateMenu;
