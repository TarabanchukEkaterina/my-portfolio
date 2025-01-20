import styled from "styled-components"
import quote from "../../assets/images/quote.png"
import { Container } from "../Container"
import { FlexWrapper } from "../FlexWrapper"
import { MyTheme } from "../../styles/MyTheme.styled"

export function Quote() {

  return (
    <Container>
      <FlexWrapper justifyContent={'center'}>
        <StyledQuote>
          <FlexWrapper flexDirection={'column'} alignItems={'flex-end'}>
            <span>With great power comes great electricity bill</span>
            <span>- Dr. Who</span>
          </FlexWrapper>
        </StyledQuote>
      </FlexWrapper>
    </Container>
  )
}

const StyledQuote = styled.div`
  span{
    border: 1px solid ${MyTheme.colors.darkTheme.font};
    padding: 32px;
    font-weight: 500;
    font-size: 24px;
    color: ${MyTheme.colors.darkTheme.fontHeader};
  }
  &::after{
    content: url('${quote}');
    position: relative;
    top: -113px;
    right: 15px;
  }
  &::before{
    content: url('${quote}');
    position: relative;
    top: 20px;
    right: 660px;
  }
`