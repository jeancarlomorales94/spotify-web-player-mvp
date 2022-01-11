import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { playlistSelected, useGetUserPlaylistsQuery } from "../playlists/playlistsSlice"

const Playlists = () => {
    const { data } = useGetUserPlaylistsQuery()

    const dispatch = useDispatch()

    useEffect(() => {
        if (data) {
            onSelectPlaylist(data.items[0].id)
        }
    }, [data])

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
