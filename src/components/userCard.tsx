import { useEffect, useRef, useState } from "react";
import { LangButton } from "./langButton";
import { Share } from "./share";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { getImage } from "../utils/utils";

export function UserCard({username,data}:userData){
    const ref = useRef<HTMLDivElement>(null)
    const [img,setImg]= useState<string>('')    
    useEffect(()=>{
        async function avatar(){
            const av = await getImage(username)
            setImg(av);
        }
        avatar();
    },[])
    return (
    <div className="mx-auto z-20">
        <Link to={'/'}>
            <div className="group flex p-2 items-center my-4 bg-white w-10 rounded-full duration-300 hover:w-16 h-10">
                <ArrowLeft className="group-hover:translate-x-6 duration-300"/>
            </div>
        </Link>
        <div ref={ref} id='back' className="p-10 from-[#EB03FF] to-[#3A0D84]">
        <div className="flex flex-col p-4 w-[30rem] mx-4 sm:mx-auto rounded-xl z-20 justify-center backdrop-blur bg-white/50 hover:bg-white/70 duration-300 ">
            <div className="flex flex-col items-center">
                <img className="inset-0 rounded-full w-24 h-24 shadow-lg" src={img} alt="top-user image"/>
                <h1 className="font-semibold text-xl">{username}</h1>
            </div>
            <div>
                <div className="flex font-semibold justify-between mx-2 ">
                    <p>Languages</p>
                    <p>LOC</p>
                </div>
                <div className="mt-2 grid grid-cols-1 gap-2">
                    {
                        data.map((element,idx)=>{
                            return <LangButton idx={idx+1} data={element}/>
                        })
                    }
                </div>
            </div>
            <Share element={ref}/>
        </div>
        </div>
    </div>
    )
}