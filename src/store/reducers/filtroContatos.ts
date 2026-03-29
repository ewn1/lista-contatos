import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type filtroContatosState = {
  termo: string
}

const initialState: filtroContatosState = {
  termo: '',
}

const filtroContatosSlice = createSlice({
  name: 'filtroContatos',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
  },
})

export const { alterarTermo } = filtroContatosSlice.actions
export default filtroContatosSlice.reducer
