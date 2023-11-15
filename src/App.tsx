import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { Router } from './Router'
import { ScrollTop } from './components/ScrollTop'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
        <ScrollTop />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
