import Card from '../components/Card'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import { useContent } from '../hooks/useContent'

function Dashboard() {    
  const { contents,refresh} = useContent();
  return (
    <div className='min-h-screen h-full w-screen bg-gray-300'>
      <div className=' flex justify-between items-center pl-76 pt-4 pr-4'>
        <div className='text-2xl font-semibold' >All Notes</div>
        <div><Navbar/></div>
      </div>
      <div>
        <SideBar/>
      </div>
      <div className='p-4 ml-72'>
          <div className="flex flex-wrap gap-4 pr-4">
            {contents.map(({title,type,link,Id,onDeleteSuccess})=> <Card key={Id} title={title} type={type} link={link} contentId={Id} onDeleteSuccess={refresh}/>

            )}
          </div>
      </div>
    </div>
  )
}

export default Dashboard
