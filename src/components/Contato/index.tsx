import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { editar, remover } from '../../store/reducers/contatos'
import { BotãoConfirmar, BotaoCancelar } from '../../styles'

type Props = {
  nomeCompleto: string
  email: string
  telefone: string
  id: number
}

const ContatoCard = ({ nomeCompleto, email, telefone, id }: Props) => {
  const dispatch = useDispatch()

  const [mostrarModal, setMostrarModal] = useState(false)
  const [estaEditando, setEstaEditando] = useState(false)
  const [nomeEdit, setNomeEdit] = useState(nomeCompleto)
  const [emailEdit, setEmailEdit] = useState(email)
  const [telefoneEdit, setTelefoneEdit] = useState(telefone)

  useEffect(() => {
    if (nomeCompleto !== nomeEdit) setNomeEdit(nomeCompleto)
    if (email !== emailEdit) setEmailEdit(email)
    if (telefone !== telefoneEdit) setTelefoneEdit(telefone)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nomeCompleto, email, telefone])

  return (
    <>
      <S.Card>
        {estaEditando ? (
          <>
            <S.CampoEdit
              type="text"
              value={nomeEdit}
              onChange={(e) => setNomeEdit(e.target.value)}
            />
            <S.CampoEdit
              type="email"
              value={emailEdit}
              onChange={(e) => setEmailEdit(e.target.value)}
            />
            <S.CampoEdit
              type="tel"
              value={telefoneEdit}
              onChange={(e) => setTelefoneEdit(e.target.value)}
            />
            <div>
              <BotãoConfirmar
                onClick={() => {
                  dispatch(
                    editar({
                      id,
                      nomeCompleto: nomeEdit,
                      email: emailEdit,
                      telefone: telefoneEdit,
                    }),
                  )
                  setEstaEditando(false)
                }}
              >
                Salvar
              </BotãoConfirmar>
              <BotaoCancelar
                onClick={() => {
                  setNomeEdit(nomeCompleto)
                  setEmailEdit(email)
                  setTelefoneEdit(telefone)
                  setEstaEditando(false)
                }}
              >
                Cancelar
              </BotaoCancelar>
            </div>
          </>
        ) : (
          <>
            <ul>
              <li> {nomeCompleto}</li>
              <li> {email}</li>
              <li> {telefone}</li>
            </ul>
            <div>
              <S.BotaoEditar onClick={() => setEstaEditando(true)}>
                Editar
              </S.BotaoEditar>
              <S.BotaoExcluir onClick={() => setMostrarModal(true)}>
                Excluir
              </S.BotaoExcluir>
            </div>
          </>
        )}
      </S.Card>

      {mostrarModal && (
        <S.Overlay>
          <S.ModalContainer>
            <h3>Tem certeza que deseja excluir este contato?</h3>
            <S.nomeDoContato>{nomeCompleto}</S.nomeDoContato>
            <BotãoConfirmar onClick={() => dispatch(remover(id))}>
              Sim
            </BotãoConfirmar>
            <BotaoCancelar onClick={() => setMostrarModal(false)}>
              Não
            </BotaoCancelar>
          </S.ModalContainer>
        </S.Overlay>
      )}
    </>
  )
}

export default ContatoCard
