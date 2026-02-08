import {
  Container,
  Logo,
  SocialLinks,
  SocialIcon,
  Text
} from './styles'

import logoImg from '../../assets/images/logo.svg'
import instagramImg from '../../assets/images/instagram.svg'
import facebookImg from '../../assets/images/facebook.svg'
import twitterImg from '../../assets/images/twitter.svg'


const Footer = () => (
  <Container>
    <Logo src={logoImg} alt="efood" />

    <SocialLinks>
      <SocialIcon src={instagramImg} alt="Instagram" />
      <SocialIcon src={facebookImg} alt="Facebook" />
      <SocialIcon src={twitterImg} alt="Twitter" />
    </SocialLinks>

    <Text>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Text>
  </Container>
)

export default Footer
