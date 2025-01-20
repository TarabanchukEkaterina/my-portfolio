import styled from "styled-components"
import { Icon } from "./icon/Icon"

type TitlePropsType = {
  name: string
  lineWidth?: string
  lineId?: string
  lineViewBox?: string
}

export function Title(props: TitlePropsType) {
  return (
    <TitleStyled>
      <h2><span>#</span>{props.name}</h2>
      <Icon iconId={props.lineId} width={props.lineWidth} height={'2'} viewBox={props.lineViewBox} />
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
  width: fit-content;
  span{
    color:#c778dd;  
  }
  h2{
    font-weight: 500;
    font-size: 32px;
  }
`
