import { formatMoney } from '../../../../utils/formatMoney'
import cartIconProduct from '../../../../assets/cartIconProduct.svg'
import {
  Description,
  AddToCart,
  Image,
  Price,
  ProductItemContainer,
  Title,
  ImageContainer,
  HeaderProduct,
  Content,
  CartIcon,
} from './styles'
import { useContext } from 'react'
import { CartItemContext } from '../../../../contexts/CartItemContext'

export interface ProductItemProps {
  id: number
  name: string
  brand: string
  description: string
  photo: string
  price: string
}

export function ProductItem({
  id,
  name,
  brand,
  description,
  photo,
  price,
}: ProductItemProps) {
  const { addToCart } = useContext(CartItemContext)

  function handleAddToCart() {
    const itemToAdd = {
      id,
      name,
      brand,
      description,
      photo,
      price,
      quantity: 1,
    }
    addToCart(itemToAdd)
  }

  return (
    <ProductItemContainer>
      <ImageContainer>
        <Image src={photo} alt="" />
      </ImageContainer>
      <Content>
        <HeaderProduct>
          <Title>
            {brand} {name}
          </Title>
          <Price>R${formatMoney(Number(price))}</Price>
        </HeaderProduct>
        <Description>{description}</Description>
      </Content>
      <AddToCart onClick={handleAddToCart}>
        <CartIcon src={cartIconProduct} alt="Cart icon" />
        Comprar
      </AddToCart>
    </ProductItemContainer>
  )
}
