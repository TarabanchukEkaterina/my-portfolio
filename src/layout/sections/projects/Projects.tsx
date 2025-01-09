import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"


export function Projects() {
  return (
    <StyledProjects>
      <SectionTitle>#projects</SectionTitle>
    </StyledProjects>
  )
}

const StyledProjects = styled.section`
  min-height: 100vh;
  background-color: #e9cfcf;
`