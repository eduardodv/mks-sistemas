import styled from 'styled-components'

export const CartItemContainer = styled.div`
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.1875rem 1.4375rem;
  position: relative;
  color: ${(props) => props.theme.colors.black};
  background: ${(props) => props.theme.colors.white};
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);

  @media (max-width: 575.98px) {
    flex-direction: column;
  }
`

export const ImageContainer = styled.div`
  width: 3.75rem;
  min-width: 3.75rem;
  height: 3.75rem;

  @media (max-width: 575.98px) {
    width: 6.875rem;
    min-width: 6.875rem;
    height: 6.875rem;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const Title = styled.h4`
  font-weight: normal;
  padding-left: 0.9375rem;
  word-break: break-word;
  font-size: ${(props) => props.theme.sizes['text-l']};
  color: ${(props) => props.theme.colors['base-text']};

  @media (max-width: 575.98px) {
    font-size: 1rem;
    padding-left: 0;
    margin-bottom: 0.6875rem;
  }
`

export const Flex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 575.98px) {
    align-items: stretch;
  }
`

export const NumberCount = styled.div`
  position: relative;
  margin: 0 2.1875rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 7px;
    overflow: hidden;
    border: 1px solid ${(props) => props.theme.colors['gray-500']};
  }

  @media (max-width: 575.98px) {
    margin: 0;
  }
`

export const Label = styled.span`
  font-size: 0.5rem;
  position: absolute;
  bottom: calc(100% + 0.1875rem);
  left: 0;

  @media (max-width: 575.98px) {
    display: none;
  }
`

const ButtonCountDefault = styled.button.attrs({
  type: 'button',
})`
  border: 0;
  background: none;
  cursor: pointer;
  border-radius: 0;
  width: 1.0625rem;
  font-size: ${(props) => props.theme.sizes['text-l']};

  &:hover {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors['blue-500']};
  }

  @media (max-width: 575.98px) {
    font-size: 22px;
    min-width: 25px;
  }
`
export const ButtonMinus = styled(ButtonCountDefault)`
  padding: 0.25rem 0.25rem 0.25rem 0.5rem;
`

export const ButtonPlus = styled(ButtonCountDefault)`
  padding: 0.25rem 0.5rem 0.25rem 0.25rem;
`

export const Quantity = styled.span`
  border: 0;
  background: none;
  /* width: 24px; */
  text-align: center;
  border: 0.0625rem solid ${(props) => props.theme.colors['gray-500']};
  border-width: 0 0.0625rem;
  padding: 0 0.375rem;
  font-size: ${(props) => props.theme.sizes['text-m']};

  @media (max-width: 575.98px) {
    font-size: 1.25rem;
    min-width: 1.875rem;
  }
`

export const TotalPrice = styled.span`
  font-weight: bold;
  font-size: ${(props) => props.theme.sizes['button-s']};

  @media (max-width: 575.98px) {
    min-width: 5.3125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    padding: 0.3125rem 0.625rem;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors['base-label']};
  }
`
export const CloseButton = styled.button`
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.black};
  border: 0;
  cursor: pointer;
  line-height: 1;
  width: 1.125rem;
  height: 1.125rem;
  border-radius: 50%;
  line-height: 1.1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -0.3125rem;
  right: -0.375rem;
  font-size: ${(props) => props.theme.sizes['button-s']};

  &:hover {
    background: ${(props) => props.theme.colors['error-500']};
  }

  @media (max-width: 575.98px) {
    width: 46px;
    height: 46px;
    font-size: 42px;
    top: 0;
    right: 0;
    background: none;
    color: ${(props) => props.theme.colors.black};

    &:hover {
      background: none;
      color: ${(props) => props.theme.colors['error-500']};
    }
  }
`
