import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import corcoranService from '@lib/api/services/corcoranService';

const initialState = {
  // regions: [],
  management: null,
  error: null,
  status: false,
};

// export const fetchAllRegions = createAsyncThunk(
//   'regions/getAllRegions',
//   async (params = null, thunkApi) => {
//     try {
//       const regions = await corcoranService.getAllRegions();
//       return regions;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error);
//     }
//   }
// );

export const fetchTeamManagement = createAsyncThunk(
  'corcoran/fetchTeamManagement',
  async (params = null, thunkApi) => {
    try {
      const management = await corcoranService.fetchTeamManagement();
      return management;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const corcoranSlice = createSlice({
  name: 'corcoran',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTeamManagement.pending, (state) => {
      state.status = false;
    });

    builder.addCase(fetchTeamManagement.fulfilled, (state, { payload }) => {
      state.management = payload;
      state.status = true;
    });

    builder.addCase(
      fetchTeamManagement.rejected,
      (state, { payload, error }) => {
        if (payload) {
          const { statusCode, message } = payload;
          state.error = { statusCode, message };
        } else {
          state.error = error.message;
        }
        state.status = false;
      }
    );
  },
});

export default corcoranSlice.reducer;
