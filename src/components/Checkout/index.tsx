import { useMemo, useState, useCallback } from 'react'
import trashIcon from '../../assets/images/trash.svg'

import {
  Overlay,
  Sidebar,
  Title,
  Items,
  Item,
  ItemImage,
  ItemInfo,
  ItemTitle,
  ItemPrice,
  RemoveButton,
  Footer,
  Total,
  Button,

  DeliveryForm,
  Field,
  Label,
  Input,
  TwoColumns,
  Actions,
  PrimaryAction,
  SecondaryAction,

  PaymentHeader,
  PaymentForm,
  PaymentRow,
  PaymentRowCvv,
  PaymentActions,
  PaymentPrimaryButton,
  PaymentSecondaryButton,

  SuccessTitle,
  SuccessText,
  SuccessButton
} from './styles'

import { useCart } from '../../context/CartContext'

type Props = {
  isOpen: boolean
  onClose: () => void
}

type Step = 'cart' | 'delivery' | 'payment' | 'success'

const Checkout = ({ isOpen, onClose }: Props) => {
  const { items, removeItem, clearCart } = useCart()

  const [step, setStep] = useState<Step>('cart')
  const [orderId, setOrderId] = useState('')

  const total = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price, 0)
  }, [items])

  const generateOrderId = useCallback(() => {
    return `ORDER_${Date.now()}`
  }, [])

  const resetAndClose = useCallback(() => {
    clearCart()
    setStep('cart')
    setOrderId('')
    onClose()
  }, [clearCart, onClose])

  const goTo = useCallback((next: Step) => {
    setStep(next)
  }, [])

  if (!isOpen) return null

  const handleFinishPayment = () => {
    setOrderId(generateOrderId())
    goTo('success')
  }

  const renderCart = () => (
    <>
      <Title>Carrinho</Title>

      <Items>
        {items.map((item) => (
          <Item key={item.id}>
            <ItemImage src={item.image} alt={item.title} />

            <ItemInfo>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemPrice>
                {item.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}
              </ItemPrice>
            </ItemInfo>

            <RemoveButton type="button" onClick={() => removeItem(item.id)}>
              <img src={trashIcon} alt="Remover item" />
            </RemoveButton>
          </Item>
        ))}
      </Items>

      <Footer>
        <Total>
          <span>Valor total</span>
          <span>
            {total.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}
          </span>
        </Total>

        <Button
          type="button"
          onClick={() => goTo('delivery')}
          disabled={items.length === 0}
        >
          Continuar com a entrega
        </Button>
      </Footer>
    </>
  )

  const renderDelivery = () => (
    <>
      <Title>Entrega</Title>

      <DeliveryForm>
        <Field>
          <Label>Quem irá receber</Label>
          <Input />
        </Field>

        <Field>
          <Label>Endereço</Label>
          <Input />
        </Field>

        <Field>
          <Label>Cidade</Label>
          <Input />
        </Field>

        <TwoColumns>
          <Field>
            <Label>CEP</Label>
            <Input />
          </Field>

          <Field>
            <Label>Número</Label>
            <Input />
          </Field>
        </TwoColumns>

        <Field>
          <Label>Complemento (opcional)</Label>
          <Input />
        </Field>

        <Actions>
          <PrimaryAction type="button" onClick={() => goTo('payment')}>
            Continuar com o pagamento
          </PrimaryAction>

          <SecondaryAction type="button" onClick={() => goTo('cart')}>
            Voltar para o carrinho
          </SecondaryAction>
        </Actions>
      </DeliveryForm>
    </>
  )

  const renderPayment = () => (
    <>
      <Title>Pagamento</Title>

      <PaymentHeader>
        Pagamento — Valor a pagar{' '}
        {total.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })}
      </PaymentHeader>

      <PaymentForm>
        <Field>
          <Label>Nome no cartão</Label>
          <Input />
        </Field>

        <PaymentRowCvv>
          <Field>
            <Label>Número do cartão</Label>
            <Input />
          </Field>

          <Field>
            <Label>CVV</Label>
            <Input />
          </Field>
        </PaymentRowCvv>

        <PaymentRow>
          <Field>
            <Label>Mês de vencimento</Label>
            <Input />
          </Field>

          <Field>
            <Label>Ano de vencimento</Label>
            <Input />
          </Field>
        </PaymentRow>

        <PaymentActions>
          <PaymentPrimaryButton type="button" onClick={handleFinishPayment}>
            Finalizar pagamento
          </PaymentPrimaryButton>

          <PaymentSecondaryButton
            type="button"
            onClick={() => goTo('delivery')}
          >
            Voltar para a edição de endereço
          </PaymentSecondaryButton>
        </PaymentActions>
      </PaymentForm>
    </>
  )

  const renderSuccess = () => (
    <>
      <SuccessTitle>Pedido realizado — ({orderId})</SuccessTitle>

      <SuccessText>
        Seu pedido já está em preparação e em breve será entregue.
      </SuccessText>

      <SuccessButton type="button" onClick={resetAndClose}>
        Concluir
      </SuccessButton>
    </>
  )

  return (
    <>
      <Overlay onClick={resetAndClose} />
      <Sidebar>
        {{
          cart: renderCart(),
          delivery: renderDelivery(),
          payment: renderPayment(),
          success: renderSuccess()
        }[step]}
      </Sidebar>
    </>
  )
}

export default Checkout