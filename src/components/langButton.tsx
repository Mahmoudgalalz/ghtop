import { useEffect, useState } from "react"
import { isTouchDevice } from "../utils/utils"

export function LangButton(){
    const [open,setOpen] = useState<boolean>(false)
    const [touch,setTouch] = useState<boolean>(false);
    useEffect(()=>{
        if(isTouchDevice())
            setTouch(true)
    })
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
                <div>#1 Typescript</div>
                <div>3K</div>
            </div>
            <div className={`px-6 pt-0 overflow-hidden transition-[max-height] duration-500 ease-in-out ${open ? "max-h-40" : "max-h-0"}`}>
                <ul className="flex flex-col justify-start text-start">
                <li className="flex justify-between">Bugchat <span>2000</span></li>
                <li className="flex justify-between">Bugchat <span>2000</span></li>
                <li className="flex justify-between">Bugchat <span>2000</span></li>
                </ul>
            </div>
        </button>
        )
    }
    return (
        <button onMouseEnter={()=> setOpen(true)} onMouseLeave={()=> setOpen(false)} className="overflow-hidden backdrop-blur transition-max-height duration-500  bg-gray-200/50 hover:bg-white/100 w-full rounded-lg py-1 px-4  bg-white">
            <div className="flex justify-between">
                <div>#1 Typescript</div>
                <div>3K</div>
            </div>
            <div className={`px-2 pt-0 overflow-hidden transition-[max-height] duration-500 ease-in-out ${open ? "max-h-40" : "max-h-0"}`}>
                <ul className="flex flex-col justify-start text-start">
                <li className="flex justify-between">Bugchat <span>2000</span></li>
                <li className="flex justify-between">Bugchat <span>2000</span></li>
                <li className="flex justify-between">Bugchat <span>2000</span></li>
                </ul>
            </div>
        </button>
        
    )
}