// import styled from 'styled-components'
import { Header } from './layout/header/Header'
import { Preview } from './layout/sections/preview/Preview'
import { Quote } from './components/quote/Quote'
import { Projects } from './layout/sections/projects/Projects'
import { Skills } from './layout/sections/skills/Skills'
import { AboutMe } from './layout/sections/aboutMe/AboutMe'
import { Contacts } from './layout/sections/contacts/Contacts'
import { Footer } from './layout/footer/Footer'
import { FormContact } from './components/formContact/FormContact'
import styled from "styled-components"

function App() {

  return (
    <GlobalContainer>
    <>
      <Header />
      <Preview />
      <Quote />
      <Projects />
      <Skills />
      <AboutMe />
      <Contacts />
      <Footer />

      <FormContact />
    </>
    </GlobalContainer>
  )
}
export default App

const GlobalContainer = styled.div`
border: 5px solid #ff0000;
    background-color: #282c33f6;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
  /*paddingX   62   112  74  106  112  112  145  */
`


