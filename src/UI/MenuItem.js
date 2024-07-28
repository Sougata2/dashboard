import styled from "styled-components";

const StyledMenuItem = styled.li`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
`;
const Heading = styled.div``;
const EditOption = styled.button``;
const DeleteOption = styled.button``;
const Options = styled.div`
  display: flex;
  gap: 10px;
`;
function MenuItem({ menu }) {
  const { menuid, menu_heading, menu_under, enable_yn, menu_name } = menu;
  return (
    <StyledMenuItem>
      <Heading>{menu_heading}</Heading>
      <Options>
        <EditOption className="btn btn-warning">
          <i className="fa-solid fa-pencil"></i>
        </EditOption>
        <DeleteOption className="btn btn-danger">
          <i className="fa-solid fa-trash"></i>
        </DeleteOption>
      </Options>
    </StyledMenuItem>
  );
}

export default MenuItem;
