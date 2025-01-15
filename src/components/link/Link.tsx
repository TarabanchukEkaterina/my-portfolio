import styled from "styled-components" //, { css }

type LinkPropsType = {
  linkhref: string
  name: string
  icon: string
  
  color?: string
  border?: string
}

export function Link(props: LinkPropsType) {
  return (
    <LinkStyled href={props.linkhref}>
      {props.name}<span>{props.icon}</span>
    </LinkStyled>
  )
}

const LinkStyled = styled.a`//<LinkPropsType>
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  gap: 10px;

  padding: 8px 16px;
  font-weight: 500;

  border: 1px solid #c778dd;
  color: #ffffff;;//${props => props.color}
  
`
