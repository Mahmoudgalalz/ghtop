import {Import} from 'lucide-react'
import {toJpeg} from 'html-to-image'
import { RefObject, useCallback, useState } from 'react'
import { Loader } from './loading'

export function Share({element}:{element:RefObject<HTMLDivElement>}){
    const [loading,setLoading] = useState<boolean>(false)
    const filter = (node: HTMLElement) => {
        const exclusionClasses = ['secret'];
        return !exclusionClasses.some((classname) => node.classList?.contains(classname));
      }
      
    const onButtonClick = useCallback(() => {
        
        if (element.current === null) {
          return
        }
        toJpeg(element.current, {filter:filter,cacheBust: true, imagePlaceholder:'/OG.png',includeQueryParams:true,style:{background:'radial-gradient(circle, rgba(124,41,189,1) 18%, rgba(186,47,171,1) 95%)'}})
          .then((dataUrl) => {
            const link = document.createElement('a')
            link.download = `${window.location.pathname}.jpeg`
            link.href = dataUrl
            link.click()
            setLoading(true)
            setTimeout(()=> setLoading(false),600)
          })
          .catch((err) => {
            console.log(err)
          })
      }, [element])
    return (
        <>
        <div className='secret my-4 gap-2 items-center flex font-bold justify-end'>
            Download it 
            <button onClick={onButtonClick} className='flex gap-2 items-center hover:scale-110 duration-300 animate-pulse'>
                {loading ? <Loader size='1.5rem'/>:<Import/>}
            </button>
        </div>
            <div className='absolute right-2 bottom-2 text-black/50 font-bold'>GHTop</div>
        </>
    )
}