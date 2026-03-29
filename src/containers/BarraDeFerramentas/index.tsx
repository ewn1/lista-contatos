import { BotaoAdicionar, CampoBusca, Titulo } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { alterarTermo } from '../../store/reducers/filtroContatos'
import type { RootState } from '../../store'
import * as S from '../../styles'

const BarraDeFerramentas = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootState) => state.filtroContatos)

  return (
    <S.Header>
      <div>
        <Titulo>Lista de Contatos</Titulo>
        <CampoBusca
          type="text"
          placeholder="Buscar Contato"
          value={termo}
          onChange={(e) => dispatch(alterarTermo(e.target.value))}
        />
        <BotaoAdicionar>Novo Contato</BotaoAdicionar>
      </div>
    </S.Header>
  )
}

export default BarraDeFerramentas
