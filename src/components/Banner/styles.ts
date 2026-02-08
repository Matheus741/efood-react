import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Container = styled.div`
  width: 100%;
  height: 384px;

  background-color: ${colors.secondary};

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  max-width: 540px;
  text-align: center;

  font-size: 36px;
  line-height: 42px;
  font-weight: 900;

  color: ${colors.primary};
`
