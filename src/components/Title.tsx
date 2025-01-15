import styled from "styled-components"
import { Icon } from "./icon/Icon"

type TitlePropsType = {
  titleName: string
}

export function Title(props: TitlePropsType) {
  return (
    <TitleStyled>
      <h2><span>#</span>{props.titleName}</h2>
      <Icon iconId={'line'} width={'511'} height={'2'} viewBox={'0 0 511 2'} />
    </TitleStyled>
  )
}

export const TitleStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  color:#ffffff;
  font-weight: 400;
  span{
    color:#c778dd;  
  }
`
