import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Cart, HeaderContainer, Logo, Container, Icon } from './styles'
import cartIcon from '../../assets/cartIcon.svg'

export function Header() {
  const totalItemsInCart = 0

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
        <Cart>
          <Icon src={cartIcon} alt="Cart icon" />
          <span>{totalItemsInCart}</span>
        </Cart>
      </Container>
    </HeaderContainer>
  )
}
