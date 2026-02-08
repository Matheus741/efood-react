import {
  CardContainer,
  Image,
  Content,
  Title,
  Description,
  Button
} from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const Card = ({ title, description, image }: Props) => (
  <CardContainer>
    <Image src={image} alt={title} />
    <Content>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button>Saiba mais</Button>
    </Content>
  </CardContainer>
)

export default Card

