import * as S from './styles'

type Props = {
  nomeCompleto: string
  email: string
  telefone: string
  id: number
}

const ContatoCard = ({ nomeCompleto, email, telefone }: Props) => {
  return (
    <S.Card>
      <ul>
        <li> {nomeCompleto}</li>
        <li> {email}</li>
        <li> {telefone}</li>
      </ul>
      <div>
        <button>Editar</button>
        <button>Excluir</button>
      </div>
    </S.Card>
  )
}

export default ContatoCard
