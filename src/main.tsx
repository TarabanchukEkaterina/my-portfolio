import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from './assets/GlobalStyles.tsx'

import App from './App.tsx'

import { MyTheme } from './assets/MyTheme.styled.tsx'
import { ThemeProvider } from 'styled-components'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={MyTheme}>
    <StrictMode>
      <App />
      <GlobalStyles />
    </StrictMode>
  </ThemeProvider>
)
