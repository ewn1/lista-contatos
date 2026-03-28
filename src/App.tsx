import { Provider } from 'react-redux'
import BarraDeFerramentas from './containers/BarraDeFerramentas'
import GlobalStyle, { HeaderContainer, MainContainer } from './styles'
import store from './store'
import ListaDeContatos from './containers/ListaContatos'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <HeaderContainer>
        <BarraDeFerramentas />
      </HeaderContainer>
      <MainContainer>
        <ListaDeContatos />
      </MainContainer>
    </Provider>
  )
}

export default App
