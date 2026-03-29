import * as S from '../../styles'
import { BotaoAdicionar, BotaoBuscar, CampoBusca, Titulo } from './styles'

const BarraDeFerramentas = () => {
  return (
    <S.Header>
      <div>
        <Titulo>Lista de Contatos</Titulo>
        <CampoBusca type="text" placeholder="Buscar Contato" />
        <BotaoBuscar>Buscar</BotaoBuscar>
        <BotaoAdicionar>Novo Contato</BotaoAdicionar>
      </div>
    </S.Header>
  )
}

export default BarraDeFerramentas
