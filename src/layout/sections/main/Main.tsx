
import photo from '../../../assets/images/man1.png'
import { FlexWrapper } from '../../../components/FlexWrapper'
import styled from 'styled-components'

export function Main() {
  return (
    <StyledMain >
      {/* 1 первый блок */}
      <FlexWrapper align={'center'} justify={'space-around'}>
        <div>полоска и иконки</div>
        <StyledDiv2>

          <StyledDiv3>
            <StyledMainTitle>Elias is a web designer and front-end developer</StyledMainTitle>
            <span>He crafts responsive websites where technologies meet creativity</span>
            <button>Contact me!!</button>
          </StyledDiv3>

          <div>
            <StyledPhoto src={photo} alt="man" />
          </div>

          <div>квадрат<span>Currently working on Portfolio</span></div>

        </StyledDiv2>
      </FlexWrapper>
</StyledMain>
  )
}

const StyledPhoto = styled.img`
  width: 457px;
  height: 386px;
  object-fit: cover;
`
const StyledMain = styled.section` //заглушка 📌
  /* width: 1024px; */
  min-height:100vh; /* height: 423px; */
  background-color: #9bd99b;
`
const StyledDiv2 = styled.div` //заглушка 📌
  display:flex;
  background-color: #9bc6d9;
`
const StyledDiv3 = styled.div` //заглушка 📌
  display:flex;
  align-items:start;
  justify-content:center;
  flex-direction:column;
  background-color: #a39bd9;
  width: 537px;
  height: 227px;
  background-color: #a39bd9;
  width: 537px;
  height: 227px;
  display: block;
  text-align: start;
`
const StyledMainTitle = styled.h1` //заглушка 📌
  background-color: #a7a0f6;
  font-family: "Fira Code", sans-serif;
  font-weight: 600;
  font-size: 32px;
  color: #fff;

/* color: #c778dd;
color: #c778dd; */

`
