import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import { authMiddleware } from '../features/auth/authMiddleware'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { spotifyApi } from '../features/api/apiSlice'
import playlistsReducer from '../features/playlists/playlistsSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        playlists: playlistsReducer,
        [spotifyApi.reducerPath]: spotifyApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authMiddleware).concat(spotifyApi.middleware),

})

setupListeners(store.dispatch)