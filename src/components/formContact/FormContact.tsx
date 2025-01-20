import styled from "styled-components"

export function FormContact() {
  return (
    <StyledFormContact>

      <StyledForm>
        <Conteiner>
          <Field placeholder={"Name"} />
          <Field placeholder={"Email"} />
        </Conteiner>

        <Field placeholder={"Title"} as={'textarea'} />
        <Field placeholder={"Message"} as={'textarea'} />
        <SendButton type={"submit"}>Send</SendButton>{/* кнопка должна быть внутри форрмы и отдельным компонентом */}
      </StyledForm>
    </StyledFormContact>
  )
}
const StyledFormContact = styled.div`
border: 1px solid #1e00ff;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  width: 569px;
  height: 342px;
`
const SendButton = styled.button`
display: flex;
align-items: flex-start;
justify-content: flex-start;
flex-direction: row;
gap: 10px;
border: 1px solid #c778dd;
padding: 8px 16px;
width: 71px;
height: 37px;
font-weight: 500;
color: #fff;
`
const StyledForm = styled.form`
display: flex;
flex-direction: column;
gap: 16px;
`
const Conteiner = styled.div`
display: flex;
align-items: flex-start;
justify-content: flex-start;
flex-direction: row;
gap: 16px;
width: 504px;
height: 37px;

`
//поле для заполнения
const Field = styled.input` 
display: flex;
align-items: flex-start;
justify-content: flex-start;
flex-direction: row;
gap: 8px;
border: 1px solid #abb2bf;
padding: 8px;
width: 244px;
height: 37px;

`
// const StyledForm = styled.button``