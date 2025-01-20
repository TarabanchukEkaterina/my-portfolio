import styled from 'styled-components'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Link } from '../../../components/link/Link'
import { MainPhoto } from '../../../components/mainPhoto/mainPhoto' //--------?
import { MyTheme } from '../../../styles/MyTheme.styled'

export function Preview() {
  return (
    <StyledPreview>
      <Container>
        <FlexWrapper flexDirection={'row'} justifyContent={'space-between'}>
          <TextConteiner>
            <DescriptionTitle>Elias is a <span>web designer</span> and <span>front-end developer</span></DescriptionTitle>
            <DescriptionParagraph>He crafts responsive websites where technologies meet creativity</DescriptionParagraph>
            <Link linkhref={'#'} name={'Contact me!!'} />
          </TextConteiner>
          <MainPhoto />
        </FlexWrapper>
      </Container>
    </StyledPreview>
  )
}

const StyledPreview = styled.section``
const TextConteiner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 537px;
  max-height: 227px;
  margin-top: 74px;
`
const DescriptionTitle = styled.h1`
  font-weight: 600;
  font-size: 32px;
  color: ${MyTheme.colors.darkTheme.fontHeader};
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${MyTheme.colors.darkTheme.accent};
  span{
    color: ${MyTheme.colors.darkTheme.accent};
}
`
const DescriptionParagraph = styled.p`
  max-width: 87%;
  padding: 32px 0 24px;
`
