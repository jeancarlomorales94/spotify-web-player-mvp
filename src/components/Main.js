import { useGetPlaylistQuery } from "../features/playlists/playlistsSlice"
import User from "../features/user/User"
import { skipToken } from '@reduxjs/toolkit/query'
import React from "react"
import Songs from "../features/playlists/Songs"
import { useParams } from "react-router-dom"

const Main = () => {
    const params = useParams()
    const selectedPlaylistId = params.id
    const { data } = useGetPlaylistQuery(selectedPlaylistId ? selectedPlaylistId : skipToken)

    return (
        <div className="flex-grow h-screen overflow-y-scroll">
            <header className="absolute top-5 right-8">
                <User />
            </header>
            <section className="flex items-end space-x-7 bg-gradient-to-b
            to-black from-red-500 h-80 text-white p-8">
                {data && (
                    <React.Fragment>
                        <img className="h-44 w-44 shadow-2xl" src={data?.images[0]?.url} alt="" />
                        <div>
                            <p>PLAYLIST</p>
                            <p className="text-2xl md:text-3xl xl:text-5xl font-bold">{data?.name}</p>
                        </div>
                    </React.Fragment>
                )}
            </section>
            <div>
                <Songs playlist={data} />
            </div>
        </div>
    )
}

export default Main
