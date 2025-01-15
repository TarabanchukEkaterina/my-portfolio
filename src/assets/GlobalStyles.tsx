import { createGlobalStyle } from "styled-components";
import { MyTheme } from './MyTheme.styled'

export const GlobalStyles = createGlobalStyle`
 *,
 *::before,
 *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
#root {
  /* max-width: 1280px;
  margin: 0 auto;
  padding: 2rem; */
  /* text-align: center; */
}
  body {
    margin: 0;
    display: flex;
    place-items: center;
    justify-content: center;
    /* min-width: 320px;
    min-height: 100vh; */
    
    
    font-family: "Fira Code", sans-serif;
    font-weight: 400;
    font-size: 16px;
    /*line-height: 1.5; */

    background-color: ${MyTheme.colors.themeBackground.dark};

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    border: none;
    background-color: inherit;
  }

  a {
    text-decoration: none;
  }

  ul{
    list-style-type: none;
  }
`