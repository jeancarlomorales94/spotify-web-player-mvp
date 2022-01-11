import User from "../features/user/User"

const Main = () => {
    return (
        <div className="flex-grow">
            <header className="absolute top-5 right-8">
                <User />
            </header>
            <section className="flex items-end space-x-7 bg-gradient-to-b
            to-black from-red-500 h-80 text-white p-8">
                <img className="h-44 w-44 shadow-2xl" src="" alt="" />
                <p>Hello</p>
            </section>
        </div>
    )
}

export default Main
