import * as S from '../../styles'
import { BotaoAdicionar, BotaoBuscar } from './styles'

const BarraDeFerramentas = () => {
  return (
    <S.Header>
      <div>
        <input type="text" placeholder="Buscar Contato" />
        <BotaoBuscar>Buscar</BotaoBuscar>
      </div>
      <BotaoAdicionar>Novo Contato</BotaoAdicionar>
    </S.Header>
  )
}

export default BarraDeFerramentas
