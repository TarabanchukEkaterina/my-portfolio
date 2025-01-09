
import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { SectionTitle } from '../../../components/SectionTitle'
import { Skill } from './skill/Skill.tsx'

const itemsSkillsGroup = {
  'Languages': ['TypeScript', 'Lua', 'Python', 'JavaScript'],
  'Other': ['HTML', 'CSS', 'CEJS', 'SCSS', 'REST', 'Jinja'],
  'Tools': ['VSCode', 'Neovim', 'Linux', 'Figma', 'XFCE', 'Arch', 'Git', 'Font', 'Awesome', 'KDE', 'fish'],
  'Databases': ['SQLite', 'PostgreSQL', 'Mongo'],
  'Frameworks': ['React', 'Vue', 'Disnake', 'Discord.js', 'Flask', 'Express.js']
}

const itemsTitle = ['Languages', 'Other', 'Tools', 'Databases', 'Frameworks']

export function Skills() {
  return (
    <StyledSkills>
      <SectionTitle>#skills</SectionTitle>
      <FlexWrapper wrap={"wrap"}>
        <Skill title={itemsTitle} groupSkills={itemsSkillsGroup} />
      </FlexWrapper>
    </StyledSkills>
  )
}

const StyledSkills = styled.section`
  background-color: #e0d580;
  min-height: 100vh;//под размер контента
`