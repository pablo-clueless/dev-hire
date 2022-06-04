import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const url = 'https://api.terawork.com/service-categories/sellers-services/computer-software-development'

const initialState = {
  devs: [],
  favorite: [],
  isFavorite: false,
  isLoading: false,
}

export const fetchDevs = createAsyncThunk(
  'devs/fetchDevs',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      // console.log(data.data.service_search_results.hits)
      return data.data.service_search_results.hits
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const devSlice = createSlice({
  name: 'devs',
  initialState,
  reducers: {
    addToFavorite: (state, { payload }) => {
      let dev = state.favorite.find(item => item._id === payload._id)
      if(!dev) {
        state.favorite.push(payload)
      } else return
    },
    removeFromFavorite: (state, { payload }) => {
      let devId = payload._id
      state.favorite = state.favorite.filter(item => item._id !== devId)
    },
  },
  extraReducers: {
    [fetchDevs.pending]: (state) => {
      state.isLoading = true
    },
    [fetchDevs.fulfilled]: (state, action) => {
      state.devs = action.payload
      state.isLoading = false
    },
    [fetchDevs.rejected]: (state) => {
      state.isLoading = false
    }
  },
})

export const { addToFavorite, removeFromFavorite, toggleIsFavorite } = devSlice.actions
export default devSlice.reducer
