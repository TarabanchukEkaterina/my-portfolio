import styled from "styled-components";
import { Icon } from "../icon/Icon";

export function Logo() {
  return (
    <LogoConteiner href="#">
      <Icon iconId={'logo'} width={'16'} height={'16'} viewBox={'0 0 16 16'}/>
      <span>Elias</span>
    </LogoConteiner>
  )
}

const LogoConteiner = styled.a`
  font-weight: 700;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 8px;
`