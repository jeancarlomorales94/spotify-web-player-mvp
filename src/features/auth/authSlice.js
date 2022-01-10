import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: null,
    token: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, { payload }) => {
            state.username = payload?.username
            state.token = payload?.token
        }
    }
})

export default authSlice.reducer

export const { setCredentials } = authSlice.actions

export const selectCurrentUser = state => state.auth