import React from 'react'
import Main from './Main'
import Sidebar from './Sidebar'

const Layout = () => {
    return (
        <div className='bg-black h-screen overflow-hidden'>
            <main className='flex'>
                <Sidebar />
                <Main />
            </main>
        </div>
    )
}

export default Layout
