import { useContext } from 'react'
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
import { CartItemContext } from '../../contexts/CartItemContext'
import { formatMoney } from '../../utils/formatMoney'
import * as AlertDialogRadix from '@radix-ui/react-alert-dialog'
import { AlertDialog } from '../AlertDialog'

interface ProductCartProps {
  id: number
  name: string
  brand: string
  photo: string
  price: string
  quantity: number
}

export function CartItem({
  id,
  name,
  brand,
  photo,
  price,
  quantity,
}: ProductCartProps) {
  const { removeToCart, changeQuantityCartItem } = useContext(CartItemContext)

  function handleRemoveToCart() {
    removeToCart(id)
  }

  function handleIncrementQuantity() {
    changeQuantityCartItem(id, 'increment')
  }

  function handleDecrementQuantity() {
    changeQuantityCartItem(id, 'decrement')
  }

  return (
    <CartItemContainer>
      <ImageContainer>
        <Image src={photo} alt="" />
      </ImageContainer>
      <Title>
        {brand} {name}
      </Title>
      <Flex>
        <NumberCount>
          <Label>Qtd.</Label>
          <div>
            <ButtonMinus onClick={handleDecrementQuantity}>-</ButtonMinus>
            <Quantity>{quantity}</Quantity>
            <ButtonPlus onClick={handleIncrementQuantity}>+</ButtonPlus>
          </div>
        </NumberCount>
        <TotalPrice>R${formatMoney(Number(price) * quantity)}</TotalPrice>
      </Flex>

      <AlertDialogRadix.Root>
        <AlertDialogRadix.Trigger asChild>
          <CloseButton title="Remover">x</CloseButton>
        </AlertDialogRadix.Trigger>
        <AlertDialog
          title="Tem certeza que deseja remover o item do carrinho?"
          actionButton={handleRemoveToCart}
        />
      </AlertDialogRadix.Root>
    </CartItemContainer>
  )
}
