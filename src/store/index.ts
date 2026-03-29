import { configureStore } from '@reduxjs/toolkit'
import contatosReducer from './reducers/contatos'
import filtroContatosReducer from './reducers/filtroContatos'

const store = configureStore({
  reducer: {
    contatos: contatosReducer,
    filtroContatos: filtroContatosReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export default store
