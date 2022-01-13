import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import { authMiddleware } from '../features/auth/authMiddleware'
import { spotifyApi } from '../features/api/apiSlice'
import playerReducer from '../features/player/playerSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        player: playerReducer,
        [spotifyApi.reducerPath]: spotifyApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authMiddleware).concat(spotifyApi.middleware),
})
