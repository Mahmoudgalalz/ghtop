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

interface IResponseGH implements object{
    [x: string]: any
    //what I only need from github response
    name:string,
    fork:boolean,
    language:string,
    languages_url:string
}

interface ILangValues {
    totalSize:number,
    values:ILang[]
}

interface ILang{
    name:string,
    size:number
}