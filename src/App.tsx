import { Header } from './layout/heder/Header'
import { Main } from './layout/sections/main/Main'
import { Skills } from './layout/sections/skills/Skills'
import { Projects } from './layout/sections/projects/Projects'

import styled from 'styled-components'

function App() {

  return (
    <>
      <Header />
      <Main/>

      <Div>{/* 2 второй блок переименовать и доделать в компонентс положить*/}
        <span>With great power comes great electricity bill</span>
        <span>- Dr. Who</span>
      </Div>

      <Projects/>
      <Skills />
      
    </>
  )
}

export default App

const Div = styled.section` //заглушка 📌
  background-color: #d99bd1;
`

