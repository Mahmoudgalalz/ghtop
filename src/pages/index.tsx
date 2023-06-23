import { useNavigate } from "react-router-dom";
import { validate_user } from "../utils/utils";
import useInput from "../hooks/input";
import { useState } from "react";
import { Layout } from "../components/layout";
import { canRequest } from "../utils/cache";
import { Star } from "../components/info";
export function Main(){
    const navigate = useNavigate()
    const userHandle = useInput("");
    const [validate,setValidate] = useState<boolean>(false)
    const handleClick = async (e: { preventDefault: () => void; })=>{
        e.preventDefault();
        const validate:number = await validate_user(userHandle.value)
        if(validate === 200){
          if(canRequest(userHandle.value))
            navigate(userHandle.value)
          else navigate('/waiting')
        }
        else{
            setValidate(true);
        }
    }
    return (
        <Layout>
            <div className="relative items-center w-full gap-12 p-8 mx-auto lg:inline-flex lg:p-20 max-w-7xl rounded-3xl lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div>
              <span className="inline-flex items-center"><span className="px-6 py-2 text-base font-bold text-white uppercase rounded-lg">GitHub top</span></span>
              <p className="mx-auto mt-8 text-2xl font-extrabold tracking-tight text-white md:text-4xl">
                See your top insights of your Github account
                <span className="md:block">Share it with the community</span>
              </p>
              <p className="max-w-3xl mx-auto mt-4 lg:text-lg text-slate-200">
                All your github data in a more cool way to represent, with Open Graph Image 
              </p>
            </div>
            <div className="flex flex-col justify-center gap-3 mt-10 sm:flex-row">
              <form className="w-full lg:w-auto bg-white/20 lg:mx-auto p-1.5 rounded-2xl">
                <div className="w-full lg:flex lg:items-center">
                  <div className="shrink">  
                    <input id="username" aria-label="username" autoComplete="username" className="block w-full p-3 text-black bg-transparent border border-transparent appearance-none rounded-xl focus:border-slate-500 focus:outline-none focus:ring-slate-500 placeholder:text-slate-300 sm:text-sm" placeholder="Github Handle" required={true} type="name" {...userHandle}/>
                  </div>
                  <button onClick={handleClick} className="w-full lg:w-auto 0 active:bg-slate-600 active:text-white/80 before:transition-colors bg-white flex-none font-medium hover:bg-indigo-900 duration-300 hover:text-white inline-flex justify-center lg:ml-4 outline-2 outline-offset-2 px-6 py-2.5 relative rounded-xl text-indigo-500">
                    <span>Get your GH top</span>
                  </button>
                  
                </div>
              </form>
            </div>
            { validate &&
                <div className="text-yellow-400 mt-4">
                    This user doesn't exist in github
            </div>
            }
            <div className="flex-col mx-auto mt-12 sm:flex sm:max-w-lg">
              <p className="text-base  text-white">by <a target="_blank"className="underline hover:text-slate-500 duration-300" href="https://twitter.com/eitmg">@KroKing</a></p>
              <Star/>
            </div>
          </div>
          
        </div>
        
        </Layout>
    )
}