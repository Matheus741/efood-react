import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Card = styled.li`
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 8px;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
  border-radius: 8px;
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin: 8px 0;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  flex: 1;
`

export const Button = styled.button`
  width: 100%;
  margin-top: 8px;
  background-color: ${colors.white};
  color: ${colors.primary};
  border: none;
  padding: 8px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`
