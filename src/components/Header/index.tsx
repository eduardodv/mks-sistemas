import { NavLink } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { CartButton, HeaderContainer, Logo, Container, Icon } from './styles'
import cartIcon from '../../assets/cartIcon.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { Cart } from '../Cart'
import { CartItemContext } from '../../contexts/CartItemContext'

export function Header() {
  const { totalItemsInCart } = useContext(CartItemContext)

  const [sticky, setSticky] = useState('')

  useEffect(() => {
    window.addEventListener('scroll', isSticky)
    return () => {
      window.removeEventListener('scroll', isSticky)
    }
  }, [])

  const isSticky = () => {
    const scrollTop = window.scrollY

    const stickyClass = scrollTop > 60 ? 'is-sticky' : ''
    setSticky(stickyClass)
  }

  return (
    <HeaderContainer className={sticky}>
      <Container>
        <NavLink to="/">
          <Logo>
            <span>MKS</span> Sistemas
          </Logo>
        </NavLink>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <CartButton>
              <Icon src={cartIcon} alt="Cart icon" />
              <span>{totalItemsInCart}</span>
            </CartButton>
          </Dialog.Trigger>
          <Cart />
        </Dialog.Root>
      </Container>
    </HeaderContainer>
  )
}
