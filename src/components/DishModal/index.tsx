import {
  Overlay,
  Modal,
  Image,
  Content,
  Title,
  Description,
  Button
} from './styles'

import { useCart } from '../../context/CartContext'

type Props = {
  title: string
  description: string
  image: string
  price: number
  onClose: () => void
}

const DishModal = ({ title, description, image, price, onClose }: Props) => {
  const { addItem } = useCart()

  const formattedPrice = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  const handleAddToCart = () => {
    addItem({
      id: Date.now(),
      title,
      price,
      image
    })
    onClose()
  }

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Image src={image} alt={title} />

        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>

          <Button onClick={handleAddToCart}>
            Adicionar ao carrinho – {formattedPrice}
          </Button>
        </Content>
      </Modal>
    </Overlay>
  )
}

export default DishModal
