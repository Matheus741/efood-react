import Header from '../../components/Header'
import DishCard from '../../components/DishCard'

import { Banner, Container, List } from './styles'

import bannerImg from '../../assets/images/macarrao2.png'
import pizzaImg from '../../assets/images/pizza.png'
import Footer from '../../components/Footer'


const Restaurant = () => {
  return (
    <>
     
      <Header />

      <Banner style={{ backgroundImage: `url(${bannerImg})` }} />

      <Container>
        <List>
          <DishCard
            title="Pizza Marguerita"
            description="Pizza clássica italiana com molho de tomate, mussarela e manjericão."
            image={pizzaImg}
            price={67.7}
          />

          <DishCard
            title="Pizza Marguerita"
            description="Pizza clássica italiana com molho de tomate, mussarela e manjericão."
            image={pizzaImg}
            price={67.7}
          />

          <DishCard
            title="Pizza Marguerita"
            description="Pizza clássica italiana com molho de tomate, mussarela e manjericão."
            image={pizzaImg}
            price={67.7}
          />

          <DishCard
            title="Pizza Marguerita"
            description="Pizza clássica italiana com molho de tomate, mussarela e manjericão."
            image={pizzaImg}
            price={67.7}
          />

          <DishCard
            title="Pizza Marguerita"
            description="Pizza clássica italiana com molho de tomate, mussarela e manjericão."
            image={pizzaImg}
            price={67.7}
          />

          <DishCard
            title="Pizza Marguerita"
            description="Pizza clássica italiana com molho de tomate, mussarela e manjericão."
            image={pizzaImg}
            price={67.7}
          />
        </List>
      </Container>
      <Footer />

    </>
  )
}

export default Restaurant
