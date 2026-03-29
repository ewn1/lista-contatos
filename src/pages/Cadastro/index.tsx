import { MainContainer } from '../../styles'
import * as S from './styles'

const FormCadastro = () => {
  return (
    <MainContainer>
      <h1>Cadastro de Contato</h1>
      <S.Form>
        <S.Campo type="text" placeholder="Nome" />
        <S.Campo type="number" placeholder="Telefone" />
        <S.Campo type="email" placeholder="Email" />
      </S.Form>
    </MainContainer>
  )
}

export default FormCadastro
