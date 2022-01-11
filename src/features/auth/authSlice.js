import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: localStorage.getItem('spotify-web-player.accesstoken') || null,
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, { payload }) => {
            state.token = payload?.token
        }
    }
})

export default authSlice.reducer

export const { setCredentials } = authSlice.actions

export const selectCurrentAuthToken = state => state.auth.token
