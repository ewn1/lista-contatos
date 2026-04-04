import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const contatosExemplo: Contato[] = [
  {
    nomeCompleto: 'Gandalf',
    email: 'mithrandir.thegrey@gmail.com',
    telefone: '99988776655',
    id: 1,
  },
  {
    nomeCompleto: 'Tom Bombadil',
    email: 'bombadil.tom@yahoo.com',
    telefone: '100000001',
    id: 2,
  },
  {
    nomeCompleto: 'Legolas leaf green',
    email: 'leafgreen.legolas@gmail.com',
    telefone: '44998877665',
    id: 3,
  },
]

const carregarContatosSalvos = (): Contato[] => {
  const contatosSalvos = localStorage.getItem('contatos')
  if (contatosSalvos) {
    return JSON.parse(contatosSalvos)
  }
  return contatosExemplo
}

const initialState: ContatosState = {
  itens: carregarContatosSalvos(),
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload,
      )
      localStorage.setItem('contatos', JSON.stringify(state.itens))
    },
    adicionar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoExistente = state.itens.find(
        (contato) =>
          contato.nomeCompleto.toLowerCase() ===
          action.payload.nomeCompleto.toLocaleLowerCase(),
      )

      if (contatoExistente) {
        alert('Já existe um contato com este nome')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const novoContato = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1,
        }
        state.itens.push(novoContato)
        localStorage.setItem('contatos', JSON.stringify(state.itens))
      }
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexContato = state.itens.findIndex(
        (contato) => contato.id === action.payload.id,
      )
      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
        localStorage.setItem('contatos', JSON.stringify(state.itens))
      }
    },
  },
})

export const { remover, adicionar, editar } = contatosSlice.actions
export default contatosSlice.reducer
