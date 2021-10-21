import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import BreakingBadService from '@lib/api/services/breakingBadService';

const initialState = {
	characters: [],
	character: null,
	error: null,
	status: false,
};

export const fetchAllCharacters = createAsyncThunk(
	'characters/fetchAllCharacters',
	async (params = null, thunkApi) => {
		try {
			const response = await BreakingBadService.fetchAllCharacters();
			return response;
		} catch (error) {
			console.log('error', error);
			return thunkApi.rejectWithValue(error);
		}
	}
);

export const fetchCharacterById = createAsyncThunk(
	'characters/fetchCharacterById',
	async (id, thunkApi) => {
		try {
			const response = await BreakingBadService.fetchCharacterById(id);
			return response;
		} catch (error) {
			return thunkApi.rejectWithValue(error);
		}
	}
);

const breakingBadSlice = createSlice({
	name: 'breakingBad',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchAllCharacters.pending, (state) => {
			state.status = false;
		});

		builder.addCase(fetchAllCharacters.fulfilled, (state, { payload }) => {
			state.characters = payload;
			state.status = true;
		});

		builder.addCase(
			fetchAllCharacters.rejected,
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

		builder.addCase(fetchCharacterById.pending, (state) => {
			state.status = false;
		});

		builder.addCase(fetchCharacterById.fulfilled, (state, { payload }) => {
			state.character = payload;
			state.status = true;
		});

		builder.addCase(
			fetchCharacterById.rejected,
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

export default breakingBadSlice.reducer;
