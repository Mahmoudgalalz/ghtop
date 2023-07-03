import { useParams } from 'react-router-dom';
import { Layout } from '../components/layout';
import { UserCard } from '../components/userCard';
import { fetchData } from '../utils/data';
import { useEffect, useState } from 'react';

const defaultData = {username:'mahmoudgalalz',data:[]}
export function User(){
    const {id} = useParams()
    const [userData,setUserData] = useState<userData>(defaultData);
    useEffect(()=>{
        async function dd(){
                // @ts-nocheck
                const res = await fetchData(id);
                // @ts-nocheck
                const data:userData = {username:id,data:res}
                setUserData(data);
            }
        dd()
    },[id])
    return (
        <Layout>
            <>
            <UserCard username={userData.username} data={userData.data}/>
            </>
        </Layout>
    )
}