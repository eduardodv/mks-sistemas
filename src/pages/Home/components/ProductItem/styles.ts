import styled from 'styled-components'

export const ProductItemContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  padding-bottom: 2rem;
  position: relative;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 2px 0.5rem rgba(0, 0, 0, 0.13);

  @media (max-width: 575.98px) {
    width: auto;
    max-width: 16.875rem;
  }
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 9.875rem;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`
export const Content = styled.div`
  padding: 0.75rem 0.875rem;
`

export const HeaderProduct = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.625rem;
  margin-bottom: 0.5rem;
`

export const Title = styled.h2`
  min-height: 2.375rem;
  font-weight: normal;
  font-size: ${(props) => props.theme.sizes['title-m']};
`

export const Price = styled.span`
  font-weight: bold;
  border-radius: 5px;
  display: inline-block;
  padding: 0.2188rem 0.3438rem;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors['base-label']};
`

export const Description = styled.p`
  font-weight: 300;
  font-size: ${(props) => props.theme.sizes['text-s']};
`

export const AddToCart = styled.button`
  border: 0;
  font-weight: 600;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.875rem;
  padding: 0.4375rem;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.sizes['button-s']};
  background-color: ${(props) => props.theme.colors['blue-500']};

  &:hover,
  &:focus-visible {
    outline: none;
    background-color: ${(props) => props.theme.colors.black};
  }
`

export const CartIcon = styled.img`
  width: 0.9375rem;
  height: 0.9375rem;
`
