import styled from 'styled-components'
import { colors } from '../../styles/colors'
import { Link as RouterLink } from 'react-router-dom'

type ContainerProps = {
  center?: boolean
}

export const Container = styled.header<ContainerProps>`
  width: 100%;
  height: 80px;
  background-color: ${colors.background};

  display: flex;
  align-items: center;
  justify-content: ${({ center }) =>
    center ? 'center' : 'space-between'};

  padding: 0 40px;
`

export const Logo = styled.img`
  height: 32px;
`

export const StyledLink = styled(RouterLink)`
  font-size: 14px;
  font-weight: 700;
  color: ${colors.primary};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`

export const Cart = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${colors.primary};
  cursor: pointer;
`
