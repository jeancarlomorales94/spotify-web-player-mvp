import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Layout = () => {
    return (
        <div className='bg-black h-screen overflow-hidden'>
            <main className='flex'>
                <Sidebar />
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
