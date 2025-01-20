import styled from 'styled-components'
import logoBig from '../../assets/images/logoBig.png'
import squareDots from '../../assets/images/squareDots.png'
import mainPhoto from '../../assets/images/mainPhoto.png'
import { MyTheme } from '../../styles/MyTheme.styled'

export function MainPhoto() {
  return (
    <StyledMainPhoto>
      <Photo src={mainPhoto} alt='main photo' />
      <PhotoParagraph>Currently working on <span>Portfolio</span></PhotoParagraph>
    </StyledMainPhoto>
  )
}
const StyledMainPhoto = styled.div`border: 1px solid #1e00ff;
  overflow: hidden;
  position: relative;
  max-height: 422px;
  width: 468px;
  &::before{
    content: url('${logoBig}');
    position: absolute;
    top: 80px;
    right: 304px;
  }
  &::after{
    content: url('${squareDots}');
    position: absolute;
    top: 245px;
    right: 15px;
    z-index: 1;
  }
`
const Photo = styled.img`
  position: relative;
  transform: scale(1.42) translate(-8px, 31px);
  z-index: 1;
`
const PhotoParagraph = styled.p`
  position: relative;
  top: -180px;
  right: -35px;
  z-index: 1;
  background-color: ${MyTheme.colors.darkTheme.primaryBg};
  border: 1px solid ${MyTheme.colors.darkTheme.font};
  font-weight: 500;
  color: ${MyTheme.colors.darkTheme.font};
  display:flex;
  align-items: center;
  padding: 8px;
  max-width: 402px;
  &::before{
    content: '';
    width: 16px;
    height: 16px;    
    margin: 0 10px 0 0;
    background: ${MyTheme.colors.darkTheme.accent};
    border: 1px solid ${MyTheme.colors.darkTheme.accent};
  }  
  span{
    color: ${MyTheme.colors.darkTheme.fontHeader};
    padding: 0 10px;
  }
`