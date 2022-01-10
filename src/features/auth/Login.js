import React from 'react'
import spotifyUrl from '../../app/spotifyAuth'

const Login = () => {
    const onLogin = () => {
        window.location.assign(spotifyUrl)
    }
    return (
        <div>
            <h2>Login</h2>
            <button onClick={onLogin}>Login</button>
        </div>
    )
}

export default Login
