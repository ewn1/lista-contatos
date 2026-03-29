import { useSelector } from 'react-redux'
import type { RootState } from '../../store'
import { MainContainer } from '../../styles'
import ContatoCard from '../../components/Contato'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootState) => state.contatos)
  const { termo } = useSelector((state: RootState) => state.filtroContatos)

  const filtrarContatos = () => {
    let contatosFiltrados = itens
    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (c) => c.nomeCompleto.toLowerCase().search(termo.toLowerCase()) >= 0,
      )

      return contatosFiltrados
    } else {
      return itens
    }
  }

  const contatos = filtrarContatos()

  return (
    <MainContainer>
      <ul>
        {contatos.map((c) => (
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
