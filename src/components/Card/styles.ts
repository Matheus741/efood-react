import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const CardContainer = styled.li`
  background-color: ${colors.white};
  border: 1px solid ${colors.primary};
  border-radius: 8px;
  overflow: hidden;
`

export const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`

export const Content = styled.div`
  padding: 16px;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.primary};
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${colors.black};
  margin-bottom: 16px;
`

export const Button = styled.button`
  background-color: ${colors.primary};
  color: ${colors.white};
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
`
