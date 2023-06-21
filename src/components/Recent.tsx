import { Link } from "react-router-dom";
import { getCached } from "../utils/cache";
import { Timer } from "./timer";

export function Recent(){
    const recent = getCached();
    return (
        <div className="grid mx-2 sm:flex  sm:mx-auto sm:my-auto gap-4">
        <div className="flex flex-col p-4 sm:w-[30rem] rounded-xl z-20 justify-center backdrop-blur bg-white/50 hover:bg-white/70 duration-300">
            <div className="flex flex-col items-center">
                <h1 className="font-semibold text-center text-xl">Most Recent requests</h1>
                <p>You can access these requests without any limits</p>
                <Link to={'/why'}>Limits? <span className="underline">Why</span></Link>
            </div>
            <Timer/>
        </div>
        <div className="flex flex-col p-4 sm:w-[30rem] rounded-xl z-20 justify-center backdrop-blur bg-white/50 hover:bg-white/70 duration-300">
            <div className="">
                <div className="flex font-semibold justify-center ">
                    <p>Users</p>
                </div>
                <ul className="mt-2 grid grid-cols-1 gap-2 overflow-y-auto p-2 max-h-[13rem] sm:max-h-[30rem]">   
                {recent.map(user=>{
                    return <div>
                        <a href={`${user}`} className="bg-white/50 flex items-center justify-between px-4 py-2 rounded-lg">
                            <img className="inset-0  rounded-full w-10 h-10 shadow-lg" src={`https://github.com/${user}.png`} alt="top-user image"/>
                            <p className="font-bold">{user}</p>
                        </a>
                    </div>
                })}
                
                </ul>
            </div>
        </div>
        </div>
    )
}