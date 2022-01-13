const scopes = [
    'user-read-private',
    'user-library-read'
]

const spotifyUrl = 'https://accounts.spotify.com/authorize?' + new URLSearchParams({
    client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    redirect_uri: process.env.REACT_APP_SPOTIFY_REDIRECT_URI,
    show_dialog: process.env.REACT_APP_SPOTIFY_ALWAYS_SHOW_AUTH_DIALOG,
    scope: scopes.join(' '),
    response_type: 'token'
})

export default spotifyUrl