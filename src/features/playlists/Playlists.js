import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useGetUserPlaylistsQuery } from "../playlists/playlistsSlice"

const Playlists = () => {
    const { data } = useGetUserPlaylistsQuery()
    const navigate = useNavigate()

    useEffect(() => {
        if (data) {
            navigate(`/${data.items[0].id}`)
        }
    }, [data, navigate])

    const onSelectPlaylist = (id) => {
        navigate(`/${id}`)
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
