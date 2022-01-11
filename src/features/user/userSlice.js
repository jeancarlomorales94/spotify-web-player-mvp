import { spotifyApi } from "../api/apiSlice";


const extendedApiSlice = spotifyApi.injectEndpoints({
    endpoints: (builder) => ({
        getMe: builder.query({
            query: () => '/me'
        })
    }),
})

export const { useGetMeQuery } = extendedApiSlice
