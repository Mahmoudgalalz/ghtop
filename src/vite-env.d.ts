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
const TTOP:TTop[] = [{
    lang:{name:'',fileSize=0},
    repos:[]
}]
type TTop={
    lang:TLang,
    repos:string[]
}
type TValid={
    status:number,
    headers:Headers
}

type TRequest = {
    status:boolean,
    err?:string
}
interface ITop {
    lang:TLang,
    repos:string[]
}
type zRepo={
    name:string,
    lang:string
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

type userData = {
    username:string,
    data:TTop[]
}

