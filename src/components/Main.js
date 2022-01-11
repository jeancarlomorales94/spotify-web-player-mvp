import { ChevronDownIcon } from "@heroicons/react/outline"
import { useGetMeQuery } from "../features/api/apiSlice"

const Main = () => {
    const { data } = useGetMeQuery()
    return (
        <div className="flex-grow">
            <header className="absolute top-5 right-8">
                <div className="flex items-center bg-black space-x-3 opacity-90 
                hover:opacity-80 cursor-pointer rounded-full
                p-1 pr-2">
                    <img className="rounded-full w-10 h-10" src={data?.images[0].url} alt="" />
                    <h2 className="text-white">{data?.display_name}</h2>
                    <ChevronDownIcon className="h-5 w-5" />
                </div>
            </header>
            <section className="flex items-end space-x-7 bg-gradient-to-b
            to-black from-red-500 h-80 text-white p-8">
                <p>Hello</p>
            </section>
        </div>
    )
}

export default Main
