import { useParams } from 'react-router-dom';
import { Layout } from '../components/layout';
import { UserCard } from '../components/userCard';
import { fetchData } from '../utils/utils';
import { useEffect } from 'react';
import { Star } from '../components/info';

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
            <Star/>
            <UserCard/>
            </>
        </Layout>
    )
}