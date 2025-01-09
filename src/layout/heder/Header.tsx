import styled from "styled-components"
import { Logo } from "../../components/logo/Logo"
import { Menu } from "../../components/menu/Menu"

export function Header() {

  return (
    <StyledHeader>
      <Logo />
      <Menu />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background: #282c33;

  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  flex-direction: row;
  gap: 555px;

  padding: 32px 0px 8px 0px;
  /* width: 1024px; */
  min-height: 10vh; //61px

  /* display:flex;
  justify-content:space-between; */
`