import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/themes/default'
import { Footer } from '../components/Footer'

describe('Footer component', () => {
  it('render footer text', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Footer />
      </ThemeProvider>,
    )
    expect(
      screen.getByText('MKS Sistemas © Todos os direitos reservados'),
    ).toBeInTheDocument()
  })
})
