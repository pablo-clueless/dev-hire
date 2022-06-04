import { configureStore } from '@reduxjs/toolkit'

import devReducer from './features/devSlice'
import sidebarReducer from './features/sidebarSlice'
import currencyReducer from './features/currencySlice'

export const store = configureStore({
  reducer: {
    devs: devReducer,
    sidebar: sidebarReducer,
    currency: currencyReducer
  },
})
