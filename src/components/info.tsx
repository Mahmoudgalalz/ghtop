import { Book, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "./layout";

export function Star(){
    return (
        <Link to={'https://github.com/Mahmoudgalalz/ghtop'} target="_blank"
        className="p-2 mx-auto my-4 flex gap-2 z-20 bg-white w-36 rounded-xl hover:scale-105 hover:ring-2 ring-yellow-500  hover:text-yellow-500 text-black duration-300 items-center justify-center">Star it on <Github/></Link>
    )
}
export function Why(){
    return (
        <>
        <Layout>
            <div className="flex flex-col p-4 w-[30rem] mx-4 sm:mx-auto rounded-xl z-20 justify-center backdrop-blur bg-white/50 hover:bg-white/70 duration-300 ">
                <h1 className="font-bold text-xl">Why we cache the requests?</h1>
                <p className="mt-4">
                    The reason is sample as we have a limited quota to request the github api
                    as <span className="font-bold underline">unauthenticated</span> requests we have 60 request per hour.
                    <br/> so to have more easier way to deal with <span className="font-bold underline">Rate-limiting</span> is to cache frequent requests, this will lead to have un-synced data
                    so we cache each request for 2 days only, and this may defer for other use-cases
                </p>
                <div className="flex justify-center gap-2 p-2 bg-white rounded-3xl mt-4">
                    <Link className="flex gap-2" target="_blank" to={'https://kroking.hashnode.dev/dealing-with-rate-limiting'}>
                    <h1>Read the Article</h1>
                        <Book/>
                    </Link>
                </div>
            </div>
        </Layout>
        </>
    )
}