import { spotifyApi } from "../api/apiSlice";

const extendedApiSlice = spotifyApi.injectEndpoints({
    endpoints: (builder) => ({
        getUserPlaylists: builder.query({
            query: () => '/me/playlists'
        })
    }),
})

export const { useGetUserPlaylistsQuery } = extendedApiSlice
