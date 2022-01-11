import React from "react"
import { useGetUserPlaylistsQuery } from "../playlists/playlistsSlice"
const Playlists = () => {
    const { data } = useGetUserPlaylistsQuery()

    return (
        <React.Fragment>
            {data?.items.map(playlist => (
                <p key={playlist.id} className='cursor-pointer hover:text-white'>
                    {playlist.name}
                </p>
            ))}
        </React.Fragment>
    )
}

export default Playlists
