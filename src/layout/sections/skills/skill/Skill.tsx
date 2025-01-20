import styled from "styled-components"

type SkillPropsType = {
  title?: string
  text: Array<string>
}

export function Skill(props: SkillPropsType) {
  return (
    <StyledSkill>
      <Title>{props.title}</Title>
      <Line />
      <TextConteineh>
        {props.text.map((item) => {
          return (
            <Text>{item}</Text>
          )
        })}
      </TextConteineh>
    </StyledSkill>
  )
}
const StyledSkill = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 8px;
  padding: 8px 0px;
  border: 1px solid #abb2bf;
  height: fit-content;
`
const Title = styled.h3`
  padding: 0 8px;
  width: 100%;
  font-weight: 600;
  color: #fff;
`
const Line = styled.span`
border: 1px solid #abb2bf;
width: 100%;
`
const TextConteineh = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 0;
`
const Text = styled.span`
  color: #abb2bf;
  padding-left: 8px;
`
