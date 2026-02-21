import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Container = styled.section`
  width: 100%;
  height: 384px;                
  background-color: ${colors.secondary};
  position: relative;

  
     margin-top: -24px; 
`

export const Logo = styled.img`
  width: 125px;                  
  height: 57.5px;               
  position: absolute;
  top: 40px;                     
  left: 50%;
  transform: translateX(-50%);
  display: block;
`

export const Title = styled.h1`
  width: 539px;                  
  height: 84px;                 
  position: absolute;
  top: 236px;                    
  left: 50%;
  transform: translateX(-50%);
  text-align: center;

  font-size: 36px;               
  line-height: 42px;
  font-weight: 900;
  color: ${colors.primary};
`