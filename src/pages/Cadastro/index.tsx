import { useState, type SyntheticEvent } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { BotaoAdicionar, MainContainer } from '../../styles'
import * as S from './styles'
import { adicionar } from '../../store/reducers/contatos'

const FormCadastro = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nomeCompleto, setNomeCompleto] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  const cadastrarContato = (evento: SyntheticEvent) => {
    evento.preventDefault()

    dispatch(
      adicionar({
        nomeCompleto,
        telefone,
        email,
      }),
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <S.Titulo>Cadastro de Contato</S.Titulo>
      <S.Form onSubmit={cadastrarContato}>
        <S.Campo
          required
          type="text"
          placeholder="Nome"
          value={nomeCompleto}
          onChange={(e) => setNomeCompleto(e.target.value)}
        />
        <S.Campo
          required
          type="tel"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <S.Campo
          required
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <S.Botoes>
          <BotaoAdicionar type="submit">Adicionar Contato</BotaoAdicionar>
          <S.BotaoVoltar as={Link} to="/">
            Voltar
          </S.BotaoVoltar>
        </S.Botoes>
      </S.Form>
    </MainContainer>
  )
}

export default FormCadastro
