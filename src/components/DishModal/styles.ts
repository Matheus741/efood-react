import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`

export const Modal = styled.div`
  background-color: ${colors.primary};
  color: ${colors.white};
  max-width: 1024px;
  width: 100%;
  padding: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`

export const Image = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 16px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 24px;
`

export const Button = styled.button`
  background-color: ${colors.white};
  color: ${colors.primary};
  border: none;
  padding: 8px;
  font-weight: 700;
  cursor: pointer;
`
