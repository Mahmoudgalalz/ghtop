// Want to cache every request data, samply we have to ways
// first to cache the request then maniplate the data 

// the data will be cached with the handle
/*
    The payload to cache is the 
*/

function compareDate(d1:Date,d2:Date,Callback:Function):boolean{
    if(d1.getTime() < d2.getTime())
        return Callback();
    return false;
}

export function canRequest(key:string):boolean{
    if(isCached(key)){
        return true;
    }
    
    const expire = new Date(Date.now()+3.6e+6)
    const value = localStorage.getItem('request')
    
    if(!value){
        localStorage.setItem('request',expire.toJSON())
        return true;
    }
    else{
        return compareDate(new Date(value),new Date(Date.now()),()=>{
            localStorage.setItem('request',expire.toJSON())
            return true;
        })
    }
    

}

export function isCached(handle:string):boolean{
    return localStorage.getItem(handle) ? true:false
}
export function cache(handle:string, data?:object){
    if(isCached(handle)){
        if(data){
            if(expired(handle)){
                return cacheData(handle,data)
            }
        }
        else{
            const data = localStorage.getItem(handle) || '{}'
            return JSON.parse(data);
        }
    }
    else {
        data && cacheData(handle,data);
    }
    
    
}
function cacheData(handle:string,data:object){
    const dataWithTime = appendTime(data)
    localStorage.setItem(handle,JSON.stringify(dataWithTime))
    return localStorage.getItem(handle);
}
function appendTime(data:object){
    const now = Date.now();
    const date = new Date(now+6.048e+8);
    const newData = {...data,expiry:date.toJSON()}
    return newData;
}

function expired(handle:string):boolean{
    const value = localStorage.getItem(handle)
    if(value){
        const payload = JSON.parse(value);
        const date = payload.expiry

        return compareDate(new Date(date),new Date(Date.now()),()=>{
            return true;
        })
    }
    return false
}
export function timeToRequest(){
    const value = localStorage.getItem('request')
    if(value){
        return value;
    }
    return 0
}
export function getCached(){
    const ignore = ['loglevel','request']
    const results:string[]=[]
    Object.entries(localStorage).map(([key])=>{            
        if(!ignore.includes(key)){
            results.push(key)
        }     
    })
    return results
}