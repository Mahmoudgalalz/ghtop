export async function validate_user(user:string):Promise<number>{
    const res = await fetch(`https://api.github.com/users/${user}`)
    return res.status
}