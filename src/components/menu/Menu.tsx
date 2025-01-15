import styled from "styled-components"
import { Dropdown } from "../dropdown/Dropdown"

type MenuPropsType = {
  linkMenu: Array<string>
}

export function Menu(props: MenuPropsType) {
  return (
    <MenuConteiner>
      <ul>
        {props.linkMenu.map((item: string, index: number) => {
          return (
            <li key={index}>
              <Link href="#"><span>#</span>{item}</Link>
            </li>
          )
        })}
      </ul>
      <Dropdown/>
    </MenuConteiner>
  )
}

const MenuConteiner = styled.nav`
  display: flex;
  min-width: max-content;
  gap: 32px;
  ul{
    display: flex;
    min-width: max-content;
    gap: 32px;
  }
`
const Link = styled.a`
  color: #abb2bf;
  span{
    color:#c778dd;
  }
  &:hover{
    color: #fff;
    font-weight: 500;
  }
`
