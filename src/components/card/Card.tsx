import styled from "styled-components"
import { Link } from "../link/Link"
// import {MyTheme} from "../../assets/MyTheme.styled"


type CardPropsType = {
  img: string
  technologies: string
  title: string
  description: string
}

export function Card(props: CardPropsType) {
  return (
    <CardsConteiner>
      <Img src={props.img} alt='' />
      <Technologies>{props.technologies}</Technologies>
      <TextConteiner>
        <Title>{props.title}</Title>
        <p>{props.description}</p>
        <LinksConteiner>
          <Link linkhref={'#'} name={'Live'} icon={'<~>'} />{/*color={MyTheme.colors.grey}/>*/}
          <Link linkhref={'#'} name={'Cached'} icon={'>='} />
        </LinksConteiner>
      </TextConteiner>
    </CardsConteiner>
  )
}

const CardsConteiner = styled.div`
  display: flex;
  color: #abb2bf;
  max-width: 330px;
  width: 100%;
  /* overflow: hidden; */
  border: 1px solid #abb2bf;
  flex-direction: column;
`
const Img = styled.img`
max-width: 100%;
height:201px;
object-fit: cover;
border-bottom: 1px solid #abb2bf;
`
const Technologies = styled.div`
padding: 8px;
border-bottom: 1px solid #abb2bf;
width: 100%;
`
const TextConteiner = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`
const Title = styled.h3`
font-weight: 500;
font-size: 24px;
color: #fff;

`
const LinksConteiner = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  gap: 16px;
`
