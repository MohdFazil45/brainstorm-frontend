import Card from '../components/Card'
import Navbar from '../components/Navbar'

import SideBar from '../components/SideBar'


function Dashboard() {
    

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
          <div className="flex gap-4">
            <Card title='first youtube video' link='https://www.youtube.com/watch?v=5o21bsp5bsA' type='youtube'/>
            <Card title='Gradient link' link="https://Dashboard.gradient.network/dashboard " type='link'/>
          </div>
      </div>
    </div>
  )
}

export default Dashboard
