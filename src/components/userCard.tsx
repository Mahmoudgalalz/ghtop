import { LangButton } from "./langButton";
import { Share } from "./share";

export function UserCard(){
    return (
        <div className="flex flex-col p-4 w-[30rem] mx-4 sm:mx-auto rounded-xl z-20 justify-center backdrop-blur bg-white/50 hover:bg-white/70 duration-300">
            <div className="flex flex-col items-center">
                <img className="inset-0 rounded-full w-24 h-24 shadow-lg" src="https://github.com/mahmoudgalalz.png" alt="top-user image"/>
                <h1 className="font-semibold text-xl">MahmoudGalal</h1>
            </div>
            <div className="">
                <div className="flex font-semibold justify-between mx-2 ">
                    <p>Languages</p>
                    <p>LOC</p>
                </div>
                <ul className="mt-2 grid grid-cols-1 gap-2">
                    <LangButton/>
                    <LangButton/>
                    <LangButton/>
                </ul>
            </div>
            <Share/>
        </div>
    )
}