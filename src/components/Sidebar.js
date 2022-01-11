import { BookOpenIcon, HeartIcon, HomeIcon, PlusCircleIcon, SearchIcon } from '@heroicons/react/outline'
// import { useDispatch } from 'react-redux'
// import { setCredentials } from '../features/auth/authSlice'
import Playlists from '../features/playlists/Playlists'

const Sidebar = () => {

    // const dispatch = useDispatch()
    // const onLogout = () => {
    //     dispatch(setCredentials(null))
    // }
    // const onModifyToken = () => {
    //     dispatch(setCredentials({ token: 'newToken' }))
    // }

    return (
        <div className='text-gray-500 p-5 text-xs lg:text-sm border-r border-gray-900
        overflow-y-scroll scrollbar-hide h-screen sm:max-w-[12rem] lg:max-w-[15rem] hidden md:inline-flex'>
            <div className='space-y-4'>
                {/* <button onClick={onLogout} className='flex items-center space-x-2 hover:text-white'>
                    <span>Logout</span>
                </button>
                <button onClick={onModifyToken} className='flex items-center space-x-2 hover:text-white'>
                    <span>Remove token</span>
                </button> */}
                <button className='flex items-center space-x-2 hover:text-white'>
                    <HomeIcon className='h-5 w-5' />
                    <span>Home</span>
                </button>
                <button className='flex items-center space-x-2 hover:text-white'>
                    <SearchIcon className='h-5 w-5' />
                    <span>Search</span>
                </button>
                <button className='flex items-center space-x-2 hover:text-white'>
                    <BookOpenIcon className='h-5 w-5' />
                    <span>Your Library</span>
                </button>

                <hr className='border-t-[0.1px] border-gray-900' />

                <button className='flex items-center space-x-2 hover:text-white'>
                    <PlusCircleIcon className='h-5 w-5' />
                    <span>Create Playlist</span>
                </button>
                <button className='flex items-center space-x-2 hover:text-white'>
                    <HeartIcon className='h-5 w-5' />
                    <span>Liked Songs</span>
                </button>

                <hr className='border-t-[0.1px] border-gray-900' />

                <Playlists />


            </div>
        </div>
    )
}

export default Sidebar
