import { ChevronDownIcon } from "@heroicons/react/outline"
import { useGetMeQuery } from "./userSlice"

const User = () => {
    const { data } = useGetMeQuery()

    return (
        <div className="flex items-center bg-black space-x-3 opacity-90 
        hover:opacity-80 cursor-pointer rounded-full
        p-1 pr-2 text-white">
            <img className="rounded-full w-10 h-10" src={data?.images[0].url} alt="" />
            <h2 className="">{data?.display_name}</h2>
            <ChevronDownIcon className="h-5 w-5" />
        </div>
    )
}

export default User
