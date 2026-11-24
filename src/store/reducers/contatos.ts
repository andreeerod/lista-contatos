import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type Contato = {
  id: number
  nome: string
  email: string
  telefone: string
}

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    { id: 1, nome: 'Ana Beatriz Souza', email: 'ana.souza@email.com', telefone: '(11) 98765-4321' },
    { id: 2, nome: 'Carlos Eduardo Lima', email: 'carlos.lima@email.com', telefone: '(21) 99876-5432' },
    { id: 3, nome: 'Mariana Alves Costa', email: 'mariana.costa@email.com', telefone: '(31) 97654-3210' }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const ultimoId = state.itens.reduce((max, c) => Math.max(max, c.id), 0)
      state.itens.push({ id: ultimoId + 1, ...action.payload })
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indice = state.itens.findIndex((c) => c.id === action.payload.id)
      if (indice >= 0) state.itens[indice] = action.payload
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((c) => c.id !== action.payload)
    }
  }
})

export const { adicionar, editar, remover } = contatosSlice.actions
export default contatosSlice.reducer
