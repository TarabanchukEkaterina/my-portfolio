import { createGlobalStyle } from "styled-components";
import { MyTheme } from './MyTheme.styled'

export const GlobalStyles = createGlobalStyle`  //createGlobalStyle - cпециальный модуль, который создаёт стилизованный компонент из глобальных стилей
 *,
 *::before,
 *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
    body {
    margin: 0;
    font-family: "Fira Code",  -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${MyTheme.colors.darkTheme.font};
    /* line-height: 1.5; */
/*-----------------========================= не по видио========================--------------------*/
    display: flex; place-items: center; justify-content: center;
    /* min-width: 320px; min-height: 100vh; */
    font-weight: 400; font-size: 16px;/* font-synthesis: none; */
    text-rendering: optimizeLegibility;
  }
  a {
    text-decoration: none; //подчеркивание не будет
  }
  ul{
    list-style-type: none; //точки убираем у списков
  }
  button {
    border: none;
    background-color: unset;
  }
  section{
    background-color: ${MyTheme.colors.darkTheme.primaryBg};
  }
/* ======================================= */
  #root {
  /* max-width: 1280px;
  margin: 0 auto;
  padding: 2rem; */
  /* text-align: center; */
  }
`