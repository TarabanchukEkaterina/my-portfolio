import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { MyTheme } from "../../styles/MyTheme.styled";
import { FlexWrapper } from "../FlexWrapper";

export function Logo() {
  return (
    <StyledLogo href="#">
      <FlexWrapper alignItems={'center'} gap={'8px'}>
        <Icon iconId={'logo'} width={'16'} height={'16'} viewBox={'0 0 16 16'} />
        <span>Elias</span>
      </FlexWrapper>
    </StyledLogo>
  )
}

const StyledLogo = styled.a`
  font-weight: 700;
  color: ${MyTheme.colors.darkTheme.fontHeader};
`