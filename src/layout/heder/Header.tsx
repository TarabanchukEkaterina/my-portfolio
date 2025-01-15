import styled from "styled-components"
import { Logo } from "../../components/logo/Logo"
import { Menu } from "../../components/menu/Menu"

const itemMenu = ['home', 'works', 'about-me', 'contacts']

export function Header() {

  return (
    <HeaderConteiner>
      <Logo />
      <Menu linkMenu={itemMenu}/>
    </HeaderConteiner>
  )
}

const HeaderConteiner = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 32px 0px 8px 0px;

  border: 1px solid #1e00ff;
  width: 1024px;/*⚠️ заглушка */
`