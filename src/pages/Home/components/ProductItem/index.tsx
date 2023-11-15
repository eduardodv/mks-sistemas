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

export interface ProductItemProps {
  id: number
  name: string
  brand: string
  description: string
  photo: string
  price: number
}

export function ProductItem({
  // id,
  name,
  brand,
  description,
  photo,
  price,
}: ProductItemProps) {
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
          <Price>R${formatMoney(price)}</Price>
        </HeaderProduct>
        <Description>{description}</Description>
      </Content>
      <AddToCart>
        <CartIcon src={cartIconProduct} alt="Cart icon" />
        Comprar
      </AddToCart>
    </ProductItemContainer>
  )
}
