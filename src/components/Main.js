import { useSelector } from "react-redux"
import { selectCurrentPlaylistId, useGetPlaylistQuery } from "../features/playlists/playlistsSlice"
import User from "../features/user/User"
import { skipToken } from '@reduxjs/toolkit/query'

const Main = () => {
    const selectedPlaylistId = useSelector(selectCurrentPlaylistId)
    const { data } = useGetPlaylistQuery(selectedPlaylistId ? selectedPlaylistId : skipToken)

    return (
        <div className="flex-grow">
            <header className="absolute top-5 right-8">
                <User />
            </header>
            <section className="flex items-end space-x-7 bg-gradient-to-b
            to-black from-red-500 h-80 text-white p-8">
                <img className="h-44 w-44 shadow-2xl" src={data?.images[0].url} alt="" />
                <div>
                    <p>PLAYLIST</p>
                    <p className="text-2xl md:text-3xl xl:text-5xl font-bold">{data?.name}</p>
                </div>
            </section>
        </div>
    )
}

export default Main
