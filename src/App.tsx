import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { Router } from './Router'
import { ScrollTop } from './components/ScrollTop'

import { QueryClient, QueryClientProvider } from 'react-query'
import { CartItemContextProvider } from './contexts/CartItemContext'

const queryClient = new QueryClient()

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <CartItemContextProvider>
            <Router />
          </CartItemContextProvider>
        </QueryClientProvider>
        <ScrollTop />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
