import { Loader2Icon } from "lucide-react";

export function Loader(){
    return (
        <div className="mx-auto">
            <Loader2Icon size={'5rem'} className="text-white animate-spin"/>
        </div>
    )
}