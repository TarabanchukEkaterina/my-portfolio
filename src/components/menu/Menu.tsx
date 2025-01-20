import styled from "styled-components"
import { Dropdown } from "../dropdown/Dropdown"
import { MyTheme } from "../../styles/MyTheme.styled"

type MenuPropsType = {
  linkMenu: Array<string>
}

export function Menu(props: MenuPropsType) {
  return (
    <StyledMenu>
      <ul>
        {props.linkMenu.map((item: string, index: number) => {
          return (
            <MenuListItem key={index}>
              <MenuLink href={"#"}><span>#</span>{item}</MenuLink>
            </MenuListItem>
          )
        })}
      </ul>
      <Dropdown />
    </StyledMenu>
  )
}

const StyledMenu = styled.nav`
  display: flex;
  gap: 32px;
  ul {
    display: flex;
    gap: 32px;
  }
`
const MenuListItem = styled.li`
  span{
    color: ${MyTheme.colors.darkTheme.accent};
  }
`
const MenuLink = styled.a`
color: ${MyTheme.colors.darkTheme.font};
  &:hover{
    color: ${MyTheme.colors.darkTheme.fontHeader};
    font-weight: 500;
  }
`