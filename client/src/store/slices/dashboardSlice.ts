import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Dashboard {
  id: string;
  name: string;
  widgets: any[];
}

interface DashboardState {
  dashboards: Dashboard[];
  currentDashboard: Dashboard | null;
  loading: boolean;
  error: string | null;
}

const initialState: DashboardState = {
  dashboards: [],
  currentDashboard: null,
  loading: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setDashboards: (state, action: PayloadAction<Dashboard[]>) => {
      state.dashboards = action.payload;
    },
    setCurrentDashboard: (state, action: PayloadAction<Dashboard>) => {
      state.currentDashboard = action.payload;
    },
  },
});

export const { setDashboards, setCurrentDashboard } = dashboardSlice.actions;
export default dashboardSlice.reducer;