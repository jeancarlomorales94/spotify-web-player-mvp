import React from "react"
import { useDispatch } from "react-redux"
import { playlistSelected, useGetUserPlaylistsQuery } from "../playlists/playlistsSlice"

const Playlists = () => {
    const { data } = useGetUserPlaylistsQuery()

    const dispatch = useDispatch()

    const onSelectPlaylist = (id) => {
        dispatch(playlistSelected(id))
    }

    return (
        <React.Fragment>
            {data?.items.map(playlist => (
                <p key={playlist.id} onClick={() => onSelectPlaylist(playlist.id)} className='cursor-pointer hover:text-white'>
                    {playlist.name}
                </p>
            ))}
        </React.Fragment>
    )
}

export default Playlists
