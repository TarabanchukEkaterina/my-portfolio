import styled from "styled-components"
import { Title } from "../../../components/Title"
import man from '../../../assets/images/man.png'
import { Icon } from "../../../components/icon/Icon"
import { Link } from "../../../components/link/Link"

const text = ['Hello, i’m Elias!', 'I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.', 'Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.']

export function AboutMe() {
  return (
    <StyledAboutMe>
      <Box>
        <Title name={'about-me'} lineWidth={'326'} lineId={'line'} lineViewBox={'0 0 511 2'} />
        <DescriptionContainer>
          {text.map((paragraph) => {
            return (
              <p>{paragraph}</p>
            )
          })}
          <Link linkhref='#' name='Read more' icon='->' />
        </DescriptionContainer>
      </Box>
      <PicturesContainer>
        <img src={man} alt='man' />
        <I><Icon iconId={'squareDots'} width={'84'} height={'84'} viewBox={'0 0 85 86'} /></I>
        <I2><Icon iconId={'squareDots'} width={'104'} height={'70'} viewBox={'0 0 75 70'} /></I2>
        <I3></I3>
      </PicturesContainer>
    </StyledAboutMe>
  )
}

const StyledAboutMe = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #1e00ff;
`
const Box = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ea8b8b30;
  gap: 23px;
`
const PicturesContainer = styled.div`
  max-height: 508px;
  border: 1px solid #77c69f;
  overflow: hidden;
  img{
    position: relative;
    max-height: 507px;
    z-index: -10;
  }
`
const I = styled.div`
  position: relative;
  bottom: 450px;
  z-index: -9;
`
const I2 = styled.div`
  position: relative;
  bottom: 320px;
  left: 220px;
  z-index: -9;
`
const I3 = styled.div`
  position: relative;
  top: -170px;
  left: 45px;
  background-color: #c778dd;
  width: 271px;
  height: 2px;
  z-index: -9;
`
const DescriptionContainer = styled.div`
  max-width: 515px;
  border: 1px solid #f1e378;
  display: flex;
  gap: 25px;
  flex-direction: column;
  p{
    line-height: 1.625;
    color: #abb2bf;
  }
`
