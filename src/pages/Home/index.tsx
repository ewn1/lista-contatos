import BarraDeFerramentas from '../../containers/BarraDeFerramentas'
import ListaDeContatos from '../../containers/ListaContatos'
import { MainContainer, HeaderContainer } from '../../styles'

const Home = () => {
  return (
    <div>
      <HeaderContainer>
        <BarraDeFerramentas />
      </HeaderContainer>
      <MainContainer>
        <ListaDeContatos />
      </MainContainer>
    </div>
  )
}

export default Home
