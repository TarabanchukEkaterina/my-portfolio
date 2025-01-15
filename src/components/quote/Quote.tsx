import styled from "styled-components"
import quote from "../../assets/images/quote.png"

export function Quote() {

  return (
    <QuoteConteiner>
      <span>With great power comes great electricity bill</span>
      <span>- Dr. Who</span>
    </QuoteConteiner>
  )
}

const QuoteConteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  span{
    border: 1px solid #abb2bf;
    padding: 32px;
    font-weight: 500;
    font-size: 24px;
    color: #fff;
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