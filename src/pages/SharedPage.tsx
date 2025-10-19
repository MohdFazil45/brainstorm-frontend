import axios from 'axios'
import { useParams } from 'react-router-dom'
import { BACKEND_URL } from '../config'
import {  useEffect, useState } from 'react'
import Card from '../components/Card'


const SharedPage = () => {
    const {hash} = useParams()
    const [data, setData] = useState<any>([])
    const [loading, setLoading] = useState(true)

    async function sharedContent(){
        try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/brain/${hash}`);
                setData(response.data);
            } catch (error) {
                console.error("Failed to fetch content", error);
            } finally {
                setLoading(false); 
            }
    }
    useEffect(()=>{
        sharedContent()
    },[hash]) 

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!data || !data.content) {
        return <div>No content found for this link.</div>;
    }

    console.log(data)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        A Brain Shared by {data.username}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.content.map((item: any) => (
          <Card
            key={item._id}
            title={item.title}
            link={item.link}
            type={item.type}
            isPublicView={true} 
          />
        ))}
      </div>
    </div>
  )
}

export default SharedPage