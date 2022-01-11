import { createSlice } from "@reduxjs/toolkit";
import { spotifyApi } from "../api/apiSlice";

const extendedApiSlice = spotifyApi.injectEndpoints({
    endpoints: (builder) => ({
        getUserPlaylists: builder.query({
            query: () => '/me/playlists'
        }),
        getPlaylist: builder.query({
            query: (id) => `/playlists/${id}`
        })
    }),
})

const initialState = {
    selectedPlaylistId: null,
}

const playlistsSlice = createSlice({
    name: 'playlists',
    initialState,
    reducers: {
        playlistSelected: (state, action) => {
            state.selectedPlaylistId = action.payload
        }
    }
})

export const { playlistSelected } = playlistsSlice.actions

export const { useGetUserPlaylistsQuery, useGetPlaylistQuery } = extendedApiSlice

export default playlistsSlice.reducer

export const selectCurrentPlaylistId = state => state.playlists.selectedPlaylistId