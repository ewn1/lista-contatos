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
        <S.BotaoEditar>Editar</S.BotaoEditar>
        <S.BotaoExcluir>Excluir</S.BotaoExcluir>
      </div>
    </S.Card>
  )
}

export default ContatoCard
