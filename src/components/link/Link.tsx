import styled from "styled-components"
import { MyTheme } from "../../styles/MyTheme.styled"

type LinkPropsType = {
  linkhref: string
  name?: string
  icon?: string
}

export function Link(props: LinkPropsType) {
  return (
    <StyledLink href={props.linkhref}>
      {props.name}
      <span>{props.icon}</span>
    </StyledLink>
  )
}

const StyledLink = styled.a`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  width: fit-content;
  padding: 8px 16px;
  font-weight: 500;
  color: ${MyTheme.colors.darkTheme.fontHeader};
  border: 1px solid ${MyTheme.colors.darkTheme.accent};
`
