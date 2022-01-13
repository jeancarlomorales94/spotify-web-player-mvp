import React, { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useGetUserPlaylistsQuery } from "../playlists/playlistsSlice"

const Playlists = () => {
    const { data } = useGetUserPlaylistsQuery()
    const navigate = useNavigate()

    useEffect(() => {
        if (data) {
            navigate(`/${data.items[0].id}`)
        }
    }, [data])

    return (
        <React.Fragment>
            {data?.items.map(playlist => (
                <Link className="cursor-pointer hover:text-white block" key={playlist.id} to={playlist.id}>
                    <p >{playlist.name}</p>
                </Link>
            ))}
        </React.Fragment>
    )
}

export default Playlists
