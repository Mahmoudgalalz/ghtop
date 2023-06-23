import { cache } from "./cache";

export async function validate_user(user:string):Promise<number>{
    const res = await fetch(`https://api.github.com/users/${user}`)
    return res.status
}
export function isTouchDevice(){
    return window.ontouchstart !== undefined;
}
export async function fetchData(user:string):Promise<IResponseGH> {
    if(!cache(user)){
        const res = await fetch(`https:api.github.com/users/${user}/repos?sort=created&per_page=50&type=owner`)
        const data = await res.json() as IResponseGH
        cache(user,data)
        
        return data;
    }
    else{
        return cache(user)
    }
}

export async function filterData(results:IResponseGH):Promise<IResponseGH[]>{
    const Repos:IResponseGH[] = []
    results.map((repo:IResponseGH) =>{
        if(!repo.fork){
            Repos.push(repo as IResponseGH)
        }
    })
    return Repos
}
async function fetchLangs(lang_url:URL){
    const res = await fetch(lang_url)
    return res;
}



export class Top{
    private Langs_Map: Map <string,ILangValues>
    private repos:IResponseGH[];
    public topLangs: Map <string,number>
    public user:string
    constructor(user:string){
        this.user = user
        this.repos = [];
        this.Langs_Map = new Map<string,ILangValues>()
        this.topLangs= new Map<string,number>()
    }
    async data():Promise<IResponseGH[]>{
        const results = await fetchData(this.user)
        const datas = await filterData(results)
        return datas
    }
    Langs(data:IResponseGH[]){
        data.forEach(async repo=>{
            const langs:object = await fetch(repo.languages_url)
            Object.entries(langs).forEach(([key,value])=>{
                if(langs){
                    if(this.topLangs.has(key)){
                        this.topLangs.set(key,this.topLangs.get(key)+value)
                    }
                    else{
                        this.topLangs.set(key,value)
                    }
                }
            })
        })
    }
    Three(){
        const topThree:ILang[] = []
        
        this.topLangs.forEach((value,key)=>{
            if(topThree[0].size < value){
                topThree[0].size=value
                
            }
        })
    }
    // async fetchLangs(data:IResponseGH[]){
    //     data.forEach((repo)=>{
    //         const langs:object = await fetch(repo.languages_url)
    //         const keys = Object.keys(langs)
    //         let lang:string;
    //         let size:number; 
    //         Object.entries(langs).forEach(([key, value]) => {
    //             lang = key
    //             size = value as number
    //             if(this.Langs_Map.has(lang)){
    //                 // totalsize , [name,size]
    //                 const values = this.Langs_Map.get(lang)
    //                 values?.totalSize+size
    //                 const obj:ILang = {name:langs.name,size}
    //                 values?.values.push(obj)
    //                 this.Langs_Map.set(lang,values)
    //             }
    //             else{
    //                 const valuess:ILang = {name:langs.name,size} 
    //                 this.Langs_Map.set(lang,{totalSize:size})
    //             }
    //         });

    //         if(this.Langs_Map.get())
    //     })
    // }


} 


