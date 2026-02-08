import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`

export const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100vh;
  background-color: ${colors.primary};
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  z-index: 2;
`
export const Title = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.white};
  margin-bottom: 16px;
`
export const Items = styled.div`
  overflow-y: auto;
`
export const Item = styled.div`
  background-color: ${colors.secondary};
  padding: 8px;
  margin-bottom: 16px;
  display: flex;
  gap: 8px;
  position: relative;
`
export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`
export const ItemInfo = styled.div`
  flex: 1;
`
export const ItemTitle = styled.h3`
  font-size: 14px;
  font-weight: 700;
  color: ${colors.primary};
  margin-bottom: 4px;
`
export const ItemPrice = styled.span`
  font-size: 14px;
  color: ${colors.primary};
`
export const RemoveButton = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 16px;
    height: 16px;
  }
`
export const Footer = styled.div`
  background-color: ${colors.primary};
  padding-top: 16px;
`
export const Total = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${colors.white};

  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`
export const Button = styled.button`
  width: 100%;
  background-color: ${colors.white};
  color: ${colors.primary};
  border: none;
  padding: 8px;
  font-weight: 700;
  cursor: pointer;
`


export const DeliveryForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 16px;
`
export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`
export const Label = styled.label`
  font-size: 12px;
  font-weight: 700;
  color: ${colors.white};
`
export const Input = styled.input`
  width: 100%;
  height: 32px;
  padding: 0 8px;
  border: none;
  outline: none;
  background-color: ${colors.secondary};
  color: ${colors.primary};
  font-size: 14px;
`

export const TwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 8px;
`
export const Actions = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`
export const PrimaryAction = styled.button`
  width: 100%;
  background-color: ${colors.white};
  color: ${colors.primary};
  border: none;
  padding: 8px;
  font-weight: 700;
  cursor: pointer;
`
export const SecondaryAction = styled.button`
  width: 100%;
  background-color: ${colors.white};
  color: ${colors.primary};
  border: none;
  padding: 8px;
  font-weight: 700;
  cursor: pointer;
`

export const PaymentHeader = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: ${colors.white};
  margin:0 0 12px 0;
`
export const PaymentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
export const PaymentRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`
export const PaymentRowCvv = styled(PaymentRow)`
  grid-template-columns: 2fr 1fr;
`
export const PaymentActions = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const PaymentPrimaryButton = styled.button`
  width: 100%;
  background-color: ${colors.white};
  color: ${colors.primary};
  border: none;
  padding: 8px;
  font-weight: 700;
  cursor: pointer;
`
export const PaymentSecondaryButton = styled.button`
  width: 100%;
  background-color: ${colors.white};
  color: ${colors.primary};
  border: none;
  padding: 8px;
  font-weight: 700;
  cursor: pointer;
`
export const SuccessTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.white};
  margin-bottom: 16px;
`
export const SuccessText = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${colors.white};
  margin: 0 0 16px 0;
`
export const SuccessButton = styled.button`
  width: 100%;
  background-color: ${colors.white};
  color: ${colors.primary};
  border: none;
  padding: 8px;
  font-weight: 700;
  cursor: pointer;
`