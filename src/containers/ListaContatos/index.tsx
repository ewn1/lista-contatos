import { useSelector } from 'react-redux'
import type { RootState } from '../../store'
import { MainContainer } from '../../styles'
import ContatoCard from '../../components/Contato'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootState) => state.contatos)

  return (
    <MainContainer>
      <ul>
        {itens.map((c) => (
          <li key={c.id}>
            <ContatoCard
              nomeCompleto={c.nomeCompleto}
              email={c.email}
              telefone={c.telefone.toString()}
              id={c.id}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
