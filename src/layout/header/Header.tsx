import styled from "styled-components"
import { Logo } from "../../components/logo/Logo"
import { Menu } from "../../components/menu/Menu"
import { Container } from "../../components/Container"
import { FlexWrapper } from "../../components/FlexWrapper"
import { MyTheme } from "../../styles/MyTheme.styled"

const itemMenu = ['home', 'works', 'about-me', 'contacts']

export function Header() {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justifyContent={'space-between'} >
        <Logo />
        <Menu linkMenu={itemMenu} />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: ${MyTheme.colors.darkTheme.primaryBg};
  padding:32px 0px 8px 0px;
  /*position:fixed; фиксируем заголовок при скроле на одном месте */
  /* top: 0;  //фиксируем к верху */
  /* left: 0; //растягиваем с лево на право */
  /* right: 0; */
  /* z-index: 99999; //чтобы он всегда находился поверх других элементов */
`