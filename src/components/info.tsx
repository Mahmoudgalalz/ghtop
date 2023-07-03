import { Github } from "lucide-react";
import { Link } from "react-router-dom";

export function Star(){
    return (
        <Link to={'https://github.com/Mahmoudgalalz/ghtop'} target="_blank"
        className="p-2 mx-auto my-4 flex gap-2 z-20 bg-white w-36 rounded-xl hover:scale-105 hover:ring-2 ring-yellow-500  hover:text-yellow-500 text-black duration-300 items-center justify-center">Star it on <Github/></Link>
    )
}
export function why(){
    return (
        <></>
    )
}