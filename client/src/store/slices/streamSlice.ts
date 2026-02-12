import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StreamState {
  data: Record<string, any>;
  connected: boolean;
}

const initialState: StreamState = {
  data: {},
  connected: false,
};

const streamSlice = createSlice({
  name: 'stream',
  initialState,
  reducers: {
    updateData: (state, action: PayloadAction<{ streamId: string; data: any }>) => {
      state.data[action.payload.streamId] = action.payload.data;
    },
    setConnected: (state, action: PayloadAction<boolean>) => {
      state.connected = action.payload;
    },
  },
});

export const { updateData, setConnected } = streamSlice.actions;
export default streamSlice.reducer;