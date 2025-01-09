import styled from "styled-components"

export function Menu() {
  return (
    <StyledMenu>
      <ul>
        <li>
          <a href="">#home</a>
        </li>
        <li>
          <a href="">#works</a>
        </li>
        <li>
          <a href="">#about-me</a>
        </li>
        <li>
          <a href="">#contacts</a>
        </li>
        <>EN\/</>
      </ul>
    </StyledMenu>
  )
}

const StyledMenu = styled.nav`
  ul{
    display:flex;
    gap:30px;
  }
`