import styled from "styled-components";
import { useMenus } from "../features/useMenus";
import MenuItem from "./MenuItem";

const StyledMenuList = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

function MenuList() {
  const { isLoading, isPending, isRefetching, data: menus, error } = useMenus();
  if (isLoading || isPending || isRefetching) return <div>Loading...</div>;
  const { data } = menus;
  return (
    <StyledMenuList>
      {data.map((menu) => (
        <MenuItem menu={menu} key={menu.menuid} />
      ))}
    </StyledMenuList>
  );
}

export default MenuList;
