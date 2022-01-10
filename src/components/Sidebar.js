import { BookOpenIcon, HeartIcon, HomeIcon, PlusCircleIcon, SearchIcon } from '@heroicons/react/outline'

const Sidebar = () => {
    return (
        <div className='text-gray-500 p-5 text-sm border-r border-gray-900 overflow-y-scroll scrollbar-hide h-screen'>
            <div className='space-y-4'>
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
                {/* Playlists */}
                <p className='cursor-pointer hover:text-white'>Playlist name...</p>
                <p className='cursor-pointer hover:text-white'>Playlist name...</p>
                <p className='cursor-pointer hover:text-white'>Playlist name...</p>
                <p className='cursor-pointer hover:text-white'>Playlist name...</p>
                <p className='cursor-pointer hover:text-white'>Playlist name...</p>
                <p className='cursor-pointer hover:text-white'>Playlist name...</p>
                <p className='cursor-pointer hover:text-white'>Playlist name...</p>
                <p className='cursor-pointer hover:text-white'>Playlist name...</p>
                <p className='cursor-pointer hover:text-white'>Playlist name...</p>
                <p className='cursor-pointer hover:text-white'>Playlist name...</p>
                <p className='cursor-pointer hover:text-white'>Playlist name...</p>
                <p className='cursor-pointer hover:text-white'>Playlist name...</p>
                <p className='cursor-pointer hover:text-white'>Playlist name...</p>
                <p className='cursor-pointer hover:text-white'>Playlist name...</p>
                <p className='cursor-pointer hover:text-white'>Playlist name...</p>
                <p className='cursor-pointer hover:text-white'>Playlist name...</p>
                <p className='cursor-pointer hover:text-white'>Playlist name...</p>
                <p className='cursor-pointer hover:text-white'>Playlist name...</p>
                <p className='cursor-pointer hover:text-white'>Playlist name...</p>
                <p className='cursor-pointer hover:text-white'>Playlist name...</p>
                <p className='cursor-pointer hover:text-white'>Playlist name...</p>
                <p className='cursor-pointer hover:text-white'>Playlist name...</p>
            </div>
        </div>
    )
}

export default Sidebar
