import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: JSON.parse(localStorage.getItem('orders')) || [],
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(action.payload);
      localStorage.setItem('orders', JSON.stringify(state.orders));
    },
    updateOrder: (state, action) => {
      const index = state.orders.findIndex(order => order.id === action.payload.id);
      if (index !== -1) {
        state.orders[index] = action.payload;
        localStorage.setItem('orders', JSON.stringify(state.orders));
      }
    },
    deleteOrder: (state, action) => {
      state.orders = state.orders.filter(order => order.id !== action.payload.id);
      localStorage.setItem('orders', JSON.stringify(state.orders));
    },
  },
});

export const { addOrder, updateOrder, deleteOrder } = orderSlice.actions;
export default orderSlice.reducer;
