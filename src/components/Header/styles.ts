import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  padding: 1.66rem 0;
  background: ${(props) => props.theme.colors['blue-500']};
  transition: all 0.2s ease;
  z-index: 999;
  &.is-sticky {
    margin-top: 2rem;
    padding: 0.5rem 0;
    box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 575.98px) {
    padding: 0.3125rem 0;
  }
`

export const Container = styled.div`
  max-width: 80.625rem;
  padding: 0 1.25rem;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.white};
  }
`

export const Logo = styled.h1`
  font-size: ${(props) => props.theme.sizes['logo-m']};
  font-weight: 300;
  transition: all 0.2s ease;
  transform: translateY(-5px);

  span {
    font-size: ${(props) => props.theme.sizes['logo-l']};
    font-weight: 600;
    display: inline-block;
    margin-right: 0.125rem;
    transform: translateY(3px);
  }

  @media (hover: hover) {
    &:hover {
      margin-left: 10px;
    }
  }

  @media (max-width: 575.98px) {
    font-size: 1rem;

    span {
      font-size: 2rem;
    }
  }
`
export const Icon = styled.img`
  width: 1.1875rem;
  height: 1.1875rem;
  transition: all 0.2s ease;

  @media (max-width: 575.98px) {
    width: 0.6875rem;
    height: 0.6875rem;
  }
`

export const CartButton = styled.button`
  min-width: 5.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  gap: 0.9375rem;
  border: 0;
  cursor: pointer;
  border-radius: 8px;
  padding: 0.7188rem 0.625rem;
  font-size: ${(props) => props.theme.sizes['button-m']};
  color: ${(props) => props.theme.colors.black};
  background: ${(props) => props.theme.colors.white};

  &:hover,
  &[aria-expanded='true'] {
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors.black};

    ${Icon} {
      -webkit-filter: invert(1);
      filter: invert(1);
    }
  }

  @media (max-width: 575.98px) {
    min-width: 3.25rem;
    padding: 0.3438rem;
    gap: 0.625rem;
    font-size: ${(props) => props.theme.sizes['text-m']};
  }
`
