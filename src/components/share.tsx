import {Linkedin,Twitter} from 'lucide-react'
const url = window.location.href
const TwitterLink = ()=>{
    return `https://twitter.com/intent/tweet?text=Top%Languages%20I%20use,%20and%20how%20much%20LOC%20I%20produced&url=${url}&via=eitmg`
}
const LinkedinLink = () => {
    return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
}

export function Share(){
    return (
        <>
        <div className='mt-4 gap-2 items-center flex font-bold justify-end'>
            Share via 
            <ul className='flex gap-2 items-center '>
                <a href={LinkedinLink()} className='hover:text-gray-500 duration-300' target='_blank'><Linkedin/></a>
                <a href={TwitterLink()} className='hover:text-gray-500 duration-300' target='_blank'><Twitter/></a>
            </ul>
        </div>
        </>
    )
}