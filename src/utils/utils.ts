export function isTouchDevice(){
    return window.ontouchstart !== undefined;
}
export function sumOfEach(repos:TRepos[]): Map<string, number>{
    const locMap: Map<string,number> = new Map<string,number>()
    Object.entries(repos).forEach(([key,repo])=>{
        repo.languages?.forEach((lang:TLang)=>{
            if(locMap.has(lang.name)){
                locMap.set(lang.name,(locMap.get(lang.name) ?? 0) + lang.fileSize)
            }
            else{
                locMap.set(lang.name,lang.fileSize)
            }
        })
    })
    return locMap;
}
function topThreeLangs(repos:TRepos[]):TLang[]{
    const map: Map<string, number> = sumOfEach(repos);
    const arrayOfMap = Array.from(map.entries())
    arrayOfMap.sort((a, b) => b[1] - a[1]);
    const langArrays = arrayOfMap.slice(0,3)

    const results:TLang[] = langArrays.map(element=>{
        return {name:element[0],fileSize:Math.round(element[1]/50)}
    })
    return results
}
function topThree(repos:TRepos[]){
    const topLangs:TLang[] = topThreeLangs(repos)
    const reposArray:zRepo[] =[] 
    topLangs.forEach(({name})=>{
        Object.entries(repos).forEach(([key,value])=>{
            if(name == value.language)
            {
                reposArray.push({name:value.name,lang:value.language})
            }
            })
    })
    return {repos:reposArray,topLangs:topLangs}
}
export function TopData(repos:TRepos[]):TTop[]{
    const topData = topThree(repos)
    const refineData:TTop[] = []
    const topLangs:TLang[]= topData.topLangs;
    topLangs.forEach((lang,idx)=>{
        const relatedRepos:string[] = []
        topData.repos.forEach(ele=>{
            if(ele.lang == lang.name){
                relatedRepos.push(ele.name)
            }
        })
        refineData.push({lang,repos:relatedRepos}) 
    })
    return refineData;
}
