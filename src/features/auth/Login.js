import React from 'react'
import spotifyUrl from '../../app/spotifyAuth'
import { HomeIcon } from '@heroicons/react/solid'

const Login = () => {
    const onLogin = () => {
        window.location.assign(spotifyUrl)
    }
    return (
        <div className='flex h-screen'>
            <button className='p-6 m-auto bg-white rounded-xl shadow-md flex items-center space-x-4' onClick={onLogin}>
                <HomeIcon className="h-12 w-12 text-spotify-color" />
                <div>
                    <div className="text-xl font-medium text-black">Spotify Web Player</div>
                    <p>Click to login into <span className='text-spotify-color'>Spotify</span></p>
                </div >
            </button >
        </div >
    )
}

export default Login
