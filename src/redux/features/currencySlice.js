import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const url = 'https://api.terawork.com/resources'

const initialState = {
  currencies: [],
  isLoading: true
}

export const fetchExchange = createAsyncThunk(
  'currency/fetchExchange',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      return data.data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const currenciesSlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchExchange.pending]: (state) => {
      state.isLoading = true
    },
    [fetchExchange.fulfilled]: (state, action) => {
      state.currencies = action.payload
      state.isLoading = false
    },
    [fetchExchange.rejected]: (state) => {
      state.isLoading = false
    }
  }
})

export const {} = currenciesSlice.actions
export default currenciesSlice.reducer
