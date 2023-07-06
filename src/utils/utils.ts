export function isTouchDevice(){
    return window.ontouchstart !== undefined;
}

export async function validate_user(user:string):Promise<TValid>{
    const res = await fetch(`https://api.github.com/users/${user}`)
    return {status:res.status,headers:res.headers}
}
export async function getImage(user:string):Promise<string>{
    const value = localStorage.getItem(`img-${user}`)
    if(!value){
        let img = await RequestImage(user)
        localStorage.setItem(`img-${user}`,img)
    }
    return localStorage.getItem(`img-${user}`) ?? ''
}
function RequestImage(user:string):Promise<string>{
    return fetch(`https://api.github.com/users/${user}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('User not found or API error');
      }
    })
    .then((data) => {
      const avatarUrl = data.avatar_url;
      return avatarUrl;
    })
    .catch((error) => {
      console.error('Error:', error.message);
      return null;
    });
}
export function haveQuota(headers:Headers):boolean{
    const consumed = parseInt(headers.get('X-Ratelimit-Remaining') || '1')
    return consumed >= 20 
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
