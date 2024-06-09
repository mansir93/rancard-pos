import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reports: [], // This will be generated dynamically
};

const reportSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {
    generateReport: (state) => {
      // Logic to generate report from orders
      // For now, we will just mock a report
      state.reports = [
        {
          id: 1,
          date: '2024-06-01',
          totalSales: 1000,
          totalOrders: 10,
        },
      ];
    },
  },
});

export const { generateReport } = reportSlice.actions;
export default reportSlice.reducer;
