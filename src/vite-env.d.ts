/// <reference types="vite/client" />

interface IUser{
    name:string,
    langs:[
        {
            lang:string,
            loc:number,
        }
    ]
}

type TRepos={
    name:string,
    language:string,
    languages?:TLang[]
}
type TLang={
    name:string,
    fileSize:number
}
