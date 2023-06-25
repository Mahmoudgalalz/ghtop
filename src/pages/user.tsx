import { useParams } from 'react-router-dom';
import { Layout } from '../components/layout';
import { UserCard } from '../components/userCard';
import { fetchData } from '../utils/data';
import { useEffect } from 'react';

export function User(){
    const {id} = useParams()
    useEffect(()=>{
        async function dd(){
                const res = await fetchData(id);
                console.log(res)
            }
        dd()
    },[])
    return (
        <Layout>
            <>
            <UserCard/>
            </>
        </Layout>
    )
}