import styled from 'styled-components'
import mainPhoto from '../../../assets/images/mainPhoto.png'

export function Preview() {

  return (
    <PreviewContainer>
      <DescriptionConteiver>
        <TextConteiner>
          <DescriptionTitle>Elias is a <span>web designer</span> and <span>front-end developer</span></DescriptionTitle>
          <DescriptionParagraph>He crafts responsive websites where technologies meet creativity</DescriptionParagraph>
          <Link href="contact">Contact me!!</Link>
        </TextConteiner>
        <PhotoConteiner>
          <img src={mainPhoto} alt='main photo' />
        </PhotoConteiner>
      </DescriptionConteiver>

      <ParagraphConteiver>
        <Rectangle />
        <PhotoParagraph>Currently working on <span>Portfolio</span></PhotoParagraph>
      </ParagraphConteiver>
    </PreviewContainer>
  )
}

const PreviewContainer = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid #1e00ff;
`
const DescriptionConteiver = styled.div`
  display:flex;
  max-height:384px; 
  width: fit-content;
  gap: 17px;
`
const TextConteiner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 74px 0 85px;
  max-width: 537px;
  border: 1px solid #1e00ff;
&::after{
    content: url(/src/assets/images/logoBig.png);
    position: relative;
    top: -220px;
    right: -540px;
  }
`
const DescriptionTitle = styled.h1`
  font-weight: 600;
  font-size: 32px;
  color: #fff;
  margin: 0;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #c778dd;
  span{
    color: #c778dd;
}
`
const DescriptionParagraph = styled.p`
  line-height: 1.6;
  color: #abb2bf;
  max-width: 90%;
  padding: 32px 0 24px;
`
const Link = styled.a`
  border: 1px solid #c778dd;
  padding: 8px 16px;
  width: fit-content;
  font-weight: 500;
  color: #fff;
`
// ---------------------------------
const PhotoConteiner = styled.div`
  border: 1px solid #1e00ff;
  width: 469px;/*⚠️ заглушка */
  overflow: hidden;
  img{
    transform: scale(1.44) translate(-20px, 40px);
    z-index: -10
  }
  &::after{
    content: url(/src/assets/images/squareDots.png);
    position: relative;
    top: -310px;
    right: -365px;
  }


`
// ---------------------------------
const ParagraphConteiver = styled.div`
  display: flex;
  padding: 8px;
  max-width: 402px;
  transform: translateX(573px);
  border: 1px solid #abb2bf;
`
const Rectangle = styled.div`
  border: 1px solid #c778dd;
  width: 16px;
  height: 16px;
  background: #c778dd;
`
const PhotoParagraph = styled.p`
  font-weight: 500;
  color: #abb2bf;
  span{
    color: #fff;
}
`