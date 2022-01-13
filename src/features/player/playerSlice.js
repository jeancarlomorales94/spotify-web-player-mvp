import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    selectedSongId: null,
}

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        songSelected: (state, action) => {
            state.selectedSongId = action.payload
        }
    }
})

export const { songSelected } = playerSlice.actions
export default playerSlice.reducer

export const selectCurrentSongId = state => state.player.selectedSongId