import React from 'react'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../features/auth/authSlice'
import Main from './Main'
import Sidebar from './Sidebar'

const Layout = () => {
    // const dispatch = useDispatch()

    // const onLogout = () => {
    //     dispatch(setCredentials(null, null))
    // }
    return (
        <div className='bg-black h-screen overflow-hidden'>
            {/* <button onClick={onLogout}>Logout</button> */}
            <main className='flex'>
                <Sidebar />
                <Main />
            </main>
        </div>
    )
}

export default Layout
