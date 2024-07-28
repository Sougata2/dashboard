import styled from "styled-components";

const StyledCreateMenu = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 20px;
`;
const CreateBtn = styled.button``;
function CreateMenu() {
  return (
    <StyledCreateMenu>
      <CreateBtn className="btn btn-info">
        <i class="fa-solid fa-plus"></i> Menu
      </CreateBtn>
    </StyledCreateMenu>
  );
}

export default CreateMenu;
