import styled from "styled-components"
import { Title } from "../../../components/Title"
import { Card } from "../../../components/card/Card"

const itemForCardCNodes = ['/src/assets/images/banner/chertNodes.webp', 'HTML SCSS Python Flask', 'ChertNodes', 'Minecraft servers hosting']
const itemForCardProtX = ['/src/assets/images/banner/protectX.webp', 'React Express Discord.js Node.js HTML SCSS Python Flask', 'ProtectX', 'Discord anti-crash bot']
const itemForCardKAV = ['/src/assets/images/banner/kahootAnswers.webp', 'CSS Express Node.js', 'Kahoot Answers Viewer', 'Get answers to your kahoot quiz']


export function Projects() {

  return (
    <ProjectsConteiner>
      <ConteinerTitleLink>
        <Title titleName='projects' />
        <a href="projects">View all {'~~>'}</a>
      </ConteinerTitleLink>
      <CardConteiner>
        <Card img={itemForCardCNodes[0]} technologies={itemForCardCNodes[1]} title={itemForCardCNodes[2]} description={itemForCardCNodes[3]} />
        <Card img={itemForCardProtX[0]} technologies={itemForCardProtX[1]} title={itemForCardProtX[2]} description={itemForCardProtX[3]} />
        <Card img={itemForCardKAV[0]} technologies={itemForCardKAV[1]} title={itemForCardKAV[2]} description={itemForCardKAV[3]} />
      </CardConteiner>
    </ProjectsConteiner>
  )
}

const ProjectsConteiner = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid #1e00ff;
  gap:48px;
`
const ConteinerTitleLink = styled.div` 
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  a{
    font-weight: 500;
    color: #fff;
  }
`
const CardConteiner = styled.div`
display: flex;
gap: 16px;
align-items: flex-start;
justify-content: flex-start;
`
