import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCredentials } from './authSlice'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const onLogin = () => {
        const user = { username: 'jean', token: 'abcdefg' }
        dispatch(setCredentials(user))
        navigate('/')
    }
    return (
        <div>
            <h2>Login</h2>
            <button onClick={onLogin}>Login</button>
        </div>
    )
}

export default Login
