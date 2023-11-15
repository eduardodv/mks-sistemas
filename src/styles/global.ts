import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  :focus-visible {
    box-shadow: 0 0 0 2px #ccc;
  }

  html {
    min-height: 100svh;
  }

  body {
    min-height: inherit;
    color: ${(props) => props.theme.colors['base-text']};
    -webkit-font-smoothing: antialiased;
    line-height: 1.2;
    position: relative;
  }
  
  body, input, textarea, button {
    font-family: '${(props) => props.theme.fonts.default}', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
