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

export const { useGetUserPlaylistsQuery, useGetPlaylistQuery } = extendedApiSlice
