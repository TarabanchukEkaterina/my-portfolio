import styled from "styled-components"
import { Logo } from "../../components/logo/Logo"
import { Icon } from "../../components/icon/Icon"

export function Footer() {
  return (
    <FooterStyled>
      <Line></Line>
      <Conteiner>
        <UpConteiner>
          <ConteinerLeft>
            <Elias>
              <Logo />
              <Mail>elias@elias-dev.ml</Mail>
            </Elias>
            <p>Web designer and front-end developer</p>
          </ConteinerLeft>
          <ConteinerRight>
            <span>Media</span>
            <IconGroup>
              <Icon iconId='github' width='32' height='32' viewBox='0 0 32 32' />
              <Icon iconId='figma' width='32' height='32' viewBox='0 0 32 32' />
              <Icon iconId='discord' width='32' height='32' viewBox='0 0 32 32' />
            </IconGroup>
          </ConteinerRight>
        </UpConteiner>
        <Copyright>© Copyright 2022. Made by Elias</Copyright>
      </Conteiner>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 32px;
  padding: 0px 0px 32px 0px;
  width: 1366px;
`
const Line = styled.div`
  border: 1px solid #abb2bf;
  width: 100%;
`
const Conteiner = styled.div`
  border: 1px solid #1e00ff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 48px;
  width: 1025px;
`
const Copyright = styled.small`
  color: #abb2bf;
`
const UpConteiner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 437px;
  width: 100%;
`
const ConteinerLeft = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 16px;
  p{
    color: #ffffff;
  }
`
const Mail = styled.text`
  color: #abb2bf;
`
const Elias = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 24px;
`
const ConteinerRight = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 12px;
  span{
    font-weight: 500;
    font-size: 24px;
    color: #fff;
  }
`
const IconGroup = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`