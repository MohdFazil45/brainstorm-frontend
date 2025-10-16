
import CreateContentMOdal from '../components/CreateContentModal'
import Button from '../components/Button'
import AddIcon from '../icons/AddIcon'
import { useState } from 'react'

const Navbar = () => {
    const[modalOpen, setModalOpen] = useState(false)
  return (
    <div>
        <CreateContentMOdal open={modalOpen} onClose={() => {
          setModalOpen(false)
        }}/>
        <div className="flex justify-end gap-4 mb-6">
          <Button variant='secondary' text='Add Content' startIcon={<AddIcon size="md"/>} size='md' onClick={()=>{setModalOpen(true)}}/>
          <Button variant='primary' text='Share Brain' startIcon={<AddIcon size="md"/>} size='md' onClick={()=>{}}/>
        </div>
    </div>
  )
}

export default Navbar