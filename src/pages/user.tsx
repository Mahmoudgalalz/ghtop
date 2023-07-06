import { useParams } from 'react-router-dom';
import { Layout } from '../components/layout';
import { UserCard } from '../components/userCard';
import { fetchData } from '../utils/data';
import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Loader } from '../components/loading';

const defaultData = {username:'mahmoudgalalz',data:[]}
export function User(){
    const {id} = useParams()
    const [userData,setUserData] = useState<userData>(defaultData);
    const [Loading,setLoading] = useState<boolean>(true);
    useEffect(()=>{
        async function data(){
                const res = await fetchData(id);
                const data:userData = {username:id,data:res}
                setUserData(data);
                setLoading(false)
            }
        data()
    },[id,Loading])
    return (
        <Layout>
            <>
            <Helmet>
                <title>Github Top | {id} </title>
            </Helmet>
            {
                Loading && <Loader/>
            }
            {
                !Loading && <UserCard username={userData.username} data={userData.data}/>
            }
            </>
        </Layout>
    )
}