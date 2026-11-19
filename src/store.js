import { configureStore, createSlice } from '@reduxjs/toolkit'

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [
      { id: 1, name: 'Notebook', price: 5.99, description: 'A simple notebook' },
      { id: 2, name: 'Pen', price: 1.49, description: 'Blue ballpoint pen' },
    ],
    editingId: null,
  },
  reducers: {
    addProduct: (state, action) => {
      state.items.push({ id: Date.now(), ...action.payload })
    },
    updateProduct: (state, action) => {
      const { id, ...changes } = action.payload
      const idx = state.items.findIndex((p) => p.id === id)
      if (idx !== -1) {
        state.items[idx] = { ...state.items[idx], ...changes }
      }
    },
    deleteProduct: (state, action) => {
      state.items = state.items.filter((p) => p.id !== action.payload)
    },
    setEditingId: (state, action) => {
      state.editingId = action.payload
    },
  },
})

export const { addProduct, updateProduct, deleteProduct, setEditingId } =
  productsSlice.actions

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
})