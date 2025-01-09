import styled from "styled-components"

type SkillStyledType = {
  title: Array<string>
  groupSkills: {
    [key: string]: string[]
  }
}

export function Skill(props: SkillStyledType) {

  function S() {
    return props.groupSkills['Languages'] //приходит одна и таже строка
  }

  return (
    <StyledSkill>
      {props.title.map((item: string, index: number) => {
        return (
        <>
          <SkillTitle key={index}>{item}</SkillTitle>
          <SkillText>
            <MiniSkill>{S()}</MiniSkill>{/* создать компонент MiniSkill и в него будет приходить строки, потом из строк сделать слова */}
          </SkillText>
        </>
        )
      })}
    </StyledSkill>
  )
}
const StyledSkill = styled.div`
  width:20%;
`
const SkillTitle = styled.h3`
  background-color: #80e086;
`
const SkillText = styled.div`
  background-color: #4eea58;
`
const MiniSkill = styled.p`
  
`
