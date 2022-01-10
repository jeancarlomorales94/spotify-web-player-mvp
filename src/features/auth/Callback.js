import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCredentials } from './authSlice'

const Callback = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const getAccessToken = () => {
        const hash = window.location.hash.substring(1)
        const params = new URLSearchParams(hash)
        const accessToken = params.get('access_token')
        return accessToken
    }

    useEffect(() => {
        const accessToken = getAccessToken()
        if (accessToken) {
            dispatch(setCredentials({ token: accessToken }))
            navigate('/')
        } else {
            navigate('/login')
        }
    }, [dispatch, navigate])

    return (
        <div>
            <h2>Callback</h2>
        </div>
    )
}

export default Callback
