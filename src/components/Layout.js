import React from 'react'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../features/auth/authSlice'

const Layout = () => {
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(setCredentials(null, null))
    }
    return (
        <div>
            <h2>Layout</h2>
            <button onClick={onLogout}>Logout</button>
        </div>
    )
}

export default Layout
