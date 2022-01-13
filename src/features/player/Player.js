import React from 'react';
import { useSelector } from 'react-redux';
import SpotifyPlayer from 'react-spotify-web-playback';
import { selectCurrentAuthToken } from '../../features/auth/authSlice'
import { selectCurrentSongId } from '../../features/player/playerSlice'

const Player = () => {
    const token = useSelector(selectCurrentAuthToken);
    const song = useSelector(selectCurrentSongId);
    return (
        <div>
            {song && (
                <SpotifyPlayer
                    token={token}
                    autoPlay={true}
                    uris={[`spotify:track:${song}`]}
                    styles={
                        {
                            activeColor: '#fff',
                            bgColor: '#333',
                            color: '#fff',
                            loaderColor: '#fff',
                            sliderColor: '#1cb954',
                            trackArtistColor: '#ccc',
                            trackNameColor: '#fff',
                        }
                    }
                />
            )}
        </div>
    )
}

export default Player
