import { Loader2Icon } from "lucide-react";

export function Loader({size='5rem'}:{size?:string}){
    return (
        <div className="mx-auto">
            <Loader2Icon size={size} className="text-white animate-spin"/>
        </div>
    )
}