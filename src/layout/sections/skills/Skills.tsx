
import styled from "styled-components"
import { Title } from '../../../components/Title.tsx'
import { Skill } from './skill/Skill.tsx'
import { Icon } from "../../../components/icon/Icon.tsx"

const itemsTitle = ['Languages', 'Databases', 'Tools', 'Other', 'Frameworks']
const itemsLanguages = ['TypeScript', 'Lua', 'Python', 'JavaScript']
const itemsDatabases = ['SQLite', 'PostgreSQL', 'Mongo']
const itemsTools = ['VSCode', 'Neovim', 'Linux', 'Figma', 'XFCE', 'Arch', 'Git', 'Font', 'Awesome']
const itemsOther = ['HTML', 'CSS', 'CEJS', 'SCSS', 'REST', 'Jinja']
const itemsFrameworks = ['React', 'Vue', 'Disnake', 'Discord.js', 'Flask', 'Express.js']

export function Skills() {
  return (
    <StyledSkills>
      <Title name={'skills'} lineWidth={'239'} lineId={'line'} lineViewBox={'0 0 239 2'} />
      <Cont>
        <SvgConteiner>
          <I><Icon iconId={'squareDots'} width={'63'} height={'63'} viewBox={'0 0 85 86'} /></I>
          <I2><Icon iconId={'logoBig'} width={'113'} height={'113'} viewBox={'0 0 157 155'} /></I2>
          <I3><Icon iconId={'squareDots'} width={'63'} height={'63'} viewBox={'0 0 85 86'} /></I3>
          <I4></I4>
          <I5></I5>
        </SvgConteiner>
        <SkillConteiner>{/* ------? как перенести слово на др.строку после 'React' и как расположить блоки в правельном порядке как в макете */}
          <Skill title={itemsTitle[0]} text={itemsLanguages} />
          <Skill title={itemsTitle[1]} text={itemsDatabases} />
          <Skill title={itemsTitle[2]} text={itemsTools} />
          <div></div>
          <Skill title={itemsTitle[3]} text={itemsOther} />
          <D>
            <Skill title={itemsTitle[4]} text={itemsFrameworks} />
          </D>
        </SkillConteiner>
      </Cont>

    </StyledSkills>
  )
}

const StyledSkills = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid #1e00ff;
`
const Cont = styled.div`
  background-color: #6d5b5b67;
  display:flex;
  justify-content: space-between;
`
// --------------------------------
const SvgConteiner = styled.div`
  width: 349px;
  height: 282px;
  border: 1px solid #bbd319;
  margin: 12px 0 29px 34px;
  display: block;
`
const I = styled.div`
  position:relative;
  top: 38px;
`
const I2 = styled.div`
  position:relative;
  top: 100px;
  left: 15px;
`
const I3 = styled.div`
  position:relative;
  bottom: 45px;
  left: 170px;
`
const I4 = styled.div`
  position:relative;
  bottom: 254px;
  left: 220px;
  border: 1px solid #abb2bf;
  width: 86px;
  height: 86px;
`
const I5 = styled.div`
  position:relative;
  bottom: 150px;
  left: 296px;
  border: 1px solid #abb2bf;
  width: 52px;
  height: 52px;
`
// --------------------------------
const D = styled.div`
  padding-top: 30px;
`
const SkillConteiner = styled.div`
  gap: 26px 16px;
  height: 280px;
  border: 1px solid #2ad34e;
  display: grid;
  grid-template-columns: 178px 178px 196px;
  grid-template-rows: 103px 103px 132px;
  object-fit: cover;
  justify-content: end;
  padding-top: 25px;
`