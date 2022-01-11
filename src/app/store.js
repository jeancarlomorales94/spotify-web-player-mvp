import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import { authMiddleware } from '../features/auth/authMiddleware'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { spotifyApi } from '../features/api/apiSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [spotifyApi.reducerPath]: spotifyApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authMiddleware).concat(spotifyApi.middleware),

})

setupListeners(store.dispatch)