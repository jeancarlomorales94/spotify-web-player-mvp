import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials } from '../auth/authSlice'


const baseQuery = fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SPOTIFY_API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token
        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    if (result.error && result.error.status === 401) {
        api.dispatch(setCredentials(null))
    }
    return result
}

export const spotifyApi = createApi({
    reducerPath: 'spotifyApi',
    baseQuery: baseQueryWithReauth,
    endpoints: () => ({}),
})

