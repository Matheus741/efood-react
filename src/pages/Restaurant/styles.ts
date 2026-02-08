import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Banner = styled.div`
  width: 100%;
  height: 280px;
  background-size: cover;
  background-position: center;
`


export const BannerContent = styled.div`
  position: relative;
  z-index: 1;

  padding: 32px;
  color: ${colors.white};
`

export const Category = styled.span`
  font-size: 16px;
  font-weight: 100;
  display: block;
  margin-bottom: 8px;
`

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 900;
  line-height: 38px;
`
export const Container = styled.div`
  max-width: 1024px;
  margin: 40px auto;
  padding: 0 16px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`

export const Card = styled.li`
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 8px;
`

export const CardImage = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
`

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin: 8px 0;
`

export const CardDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
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
`
