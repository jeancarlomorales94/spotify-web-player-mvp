import React from 'react'
import { Outlet } from 'react-router-dom'
import Player from '../features/player/Player'
import Sidebar from './Sidebar'

const Layout = () => {
    return (
        <div className='bg-black h-screen overflow-hidden'>
            <main className='flex'>
                <Sidebar />
                <Outlet />
            </main>
            <div className='sticky bottom-0'>
                <Player />
            </div>
        </div>
    )
}

export default Layout
