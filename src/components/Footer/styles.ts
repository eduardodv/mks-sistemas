import styled from 'styled-components'

export const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: 0.625rem 1.25rem;
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.sizes['text-m']};
  background-color: ${(props) => props.theme.colors['gray-400']};
`
