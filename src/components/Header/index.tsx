import { useState } from 'react'
import { Container, Logo, Cart, StyledLink } from './styles'
import { useLocation } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import Checkout from '../Checkout'
import { useCart } from '../../context/CartContext'

const Header = () => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const { items } = useCart()
  const location = useLocation()

  const isHome = location.pathname === '/'

  return (
    <>
      <Container center={isHome}>
        {!isHome && <StyledLink to="/">Restaurantes</StyledLink>}

        <Logo src={logo} alt="eFood" />

        {!isHome && (
          <Cart onClick={() => setIsCheckoutOpen(true)}>
            {items.length} produto(s) no carrinho
          </Cart>
        )}
      </Container>

      <Checkout
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </>
  )
}

export default Header
