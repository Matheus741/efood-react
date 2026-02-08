import { useState } from 'react'
import DishModal from '../DishModal'
import { Card, Image, Title, Description, Button } from './styles'

type Props = {
  title: string
  description: string
  image: string
  price: number
}

const DishCard = ({ title, description, image, price }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Card>
        <Image src={image} alt={title} />
        <Title>{title}</Title>
        <Description>{description}</Description>

        <Button onClick={() => setIsOpen(true)}>
          Adicionar ao carrinho
        </Button>
      </Card>

      {isOpen && (
        <DishModal
          title={title}
          description={description}
          image={image}
          price={price}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default DishCard

