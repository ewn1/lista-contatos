import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      nomeCompleto: 'Gandalf',
      email: 'mithrandir.thegrey@gmail.com',
      telefone: 99988776655,
      id: 1,
    },
    {
      nomeCompleto: 'Tom Bombadil',
      email: 'bombadil.tom@yahoo.com',
      telefone: 100000001,
      id: 2,
    },
    {
      nomeCompleto: 'Witch King of Dol Guldur',
      email: 'thewitchking@gmail.com',
      telefone: 55911223344,
      id: 3,
    },
    {
      nomeCompleto: 'Witch King of Dol Guldur',
      email: 'thewitchking@gmail.com',
      telefone: 55911223344,
      id: 3,
    },
    {
      nomeCompleto: 'Witch King of Dol Guldur',
      email: 'thewitchking@gmail.com',
      telefone: 55911223344,
      id: 3,
    },
    {
      nomeCompleto: 'Witch King of Dol Guldur',
      email: 'thewitchking@gmail.com',
      telefone: 55911223344,
      id: 3,
    },
    {
      nomeCompleto: 'Witch King of Dol Guldur',
      email: 'thewitchking@gmail.com',
      telefone: 55911223344,
      id: 3,
    },
    {
      nomeCompleto: 'Witch King of Dol Guldur',
      email: 'thewitchking@gmail.com',
      telefone: 55911223344,
      id: 3,
    },
    {
      nomeCompleto: 'Witch King of Dol Guldur',
      email: 'thewitchking@gmail.com',
      telefone: 55911223344,
      id: 3,
    },
    {
      nomeCompleto: 'Witch King of Dol Guldur',
      email: 'thewitchking@gmail.com',
      telefone: 55911223344,
      id: 3,
    },
  ],
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload,
      )
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
      }
    },
  },
})

export const { remover, adicionar } = contatosSlice.actions
export default contatosSlice.reducer
