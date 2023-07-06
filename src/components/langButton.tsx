import { useEffect, useState } from "react"
import { isTouchDevice } from "../utils/utils"
import {millify} from 'millify'

export function LangButton({data,idx}:{data:TTop,idx:number}){
    const [open,setOpen] = useState<boolean>(false)
    const [touch,setTouch] = useState<boolean>(false);
    useEffect(()=>{
        if(isTouchDevice())
            setTouch(true)
    },[])
    const handleClick = ()=>{
        if(open){
            setOpen(false)
        }
        else setOpen(true)
    }
    if(touch){
        return (
            <button onClick={handleClick} className="overflow-hidden backdrop-blur transition-max-height duration-500  bg-gray-200/50 hover:bg-white/100 w-full rounded-lg py-1 px-4  bg-white">
            <div className="flex justify-between">
                <div>#{idx} {data.lang.name}</div>
                <div>{millify(data.lang.fileSize)}</div>
            </div>
            <div className={`px-6 pt-0 overflow-hidden transition-[max-height] duration-500 ease-in-out ${open ? "max-h-40" : "max-h-0"}`}>
                <ul className="flex flex-col justify-start text-start">
                    {
                        !data.repos.length && <li className="flex justify-between">Common</li>
                    }
                    {   
                        data.repos.map((repo,idx)=>{
                            if(idx<3){
                                return <li className="flex justify-between">{repo}</li>
                            }
                        })
                    }
                </ul>
            </div>
        </button>
        )
    }
    return (
        <button onMouseEnter={()=> setOpen(true)} onMouseLeave={()=> setOpen(false)} className="overflow-hidden backdrop-blur transition-max-height duration-500  bg-gray-200/50 hover:bg-white/100 w-full rounded-lg py-1 px-4  bg-white">
            <div className="flex justify-between">
                <div>#{idx} {data.lang.name}</div>
                <div>{millify(data.lang.fileSize)}</div>
            </div>
            <div className={`px-2 pt-0 overflow-hidden transition-[max-height] duration-500 ease-in-out ${open ? "max-h-40" : "max-h-0"}`}>
                <ul className="flex flex-col justify-start text-start">
                    {
                        !data.repos.length && <li className="flex justify-between">Common</li>
                        
                    }
                    {   
                        data.repos.map((repo,idx)=>{
                            if(idx<3){
                                return <li className="flex justify-between">{repo}</li>
                            }
                        })
                    }
                </ul>
            </div>
        </button>
        
    )
}