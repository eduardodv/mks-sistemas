import {
  ButtonMinus,
  ButtonPlus,
  CartItemContainer,
  CloseButton,
  Flex,
  Image,
  ImageContainer,
  Label,
  NumberCount,
  Quantity,
  Title,
  TotalPrice,
} from './styles'

export function CartItem() {
  return (
    <CartItemContainer>
      <ImageContainer>
        <Image
          src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/macbookair.webp"
          alt=""
        />
      </ImageContainer>
      <Title>Apple Watch Series 4 GPS</Title>
      <Flex>
        <NumberCount>
          <Label>Qtd.</Label>
          <div>
            <ButtonMinus>-</ButtonMinus>
            <Quantity>1</Quantity>
            <ButtonPlus>+</ButtonPlus>
          </div>
        </NumberCount>
        <TotalPrice>R$399</TotalPrice>
      </Flex>
      <CloseButton title="Remover">x</CloseButton>
    </CartItemContainer>
  )
}
