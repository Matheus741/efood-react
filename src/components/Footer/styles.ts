import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Container = styled.footer`
  background-color: ${colors.background};
  padding: 40px 16px;
  text-align: center;
  margin-top: 80px;
`

export const Logo = styled.img`
  margin-bottom: 16px;
`

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 16px;
`

export const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`

export const Text = styled.p`
  max-width: 480px;
  margin: 0 auto;
  font-size: 10px;
  line-height: 14px;
  color: ${colors.black};
`
