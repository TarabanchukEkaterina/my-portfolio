import styled from "styled-components"
import { Title } from "../../../components/Title"
import { Icon } from "../../../components/icon/Icon"

export function Contacts() {
  return (
    <ContactsStyled>
      <Title name={'contacts'} lineWidth={'127'} lineId={'line'} lineViewBox={'0 0 511 2'} />
      <D>
        <Paragraph>
          I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
        </Paragraph>
        <List>Message me here
          <li><Icon iconId={'discord'} width={'32'} height={'32'} viewBox={'0 0 32 32'} />!Elias#3519</li>
          <li><Icon iconId={'email'} width={'32'} height={'32'} viewBox={'0 0 32 32'} />elias@elias.me</li>
        </List>
      </D>
    </ContactsStyled>
  )
}

const ContactsStyled = styled.section`
  border: 1px solid #1e00ff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 45px;
`
const D = styled.div`
  background-color: #00ff1e17;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Paragraph = styled.p`
  width: 505px;
  height: 63px;
  border: 1px solid #ff00d4;
  font-weight: 500;
  color: #abb2bf;
`
const List = styled.ul`
  width: 204px;
  height: 141px;
  font-weight: 600;
  color: #fff;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 16px;
  border: 1px solid #abb2bf;
  padding: 16px;
  li{
    color: #abb2bf;
    display: flex;
    align-items: center;
    gap: 5px;
  }
`