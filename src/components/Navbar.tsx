
import CreateContentMOdal from '../components/CreateContentModal'
import Button from '../components/Button'
import AddIcon from '../icons/AddIcon'
import { useEffect, useState } from 'react'
import { useContent } from '../hooks/useContent'
import { useNavigate } from 'react-router-dom'
import LogOut from '../icons/LogOut'

const Navbar = () => {
    const[modalOpen, setModalOpen] = useState(false)
    const navigate = useNavigate()
    const {refresh} = useContent()
    useEffect(() => {
      refresh()
    }, [modalOpen])

    const logout = ()=>{
      navigate("/")
    }

  return (
    <div>
        <CreateContentMOdal open={modalOpen} onClose={() => {
          setModalOpen(false)
        }}/>
        <div className="flex justify-end gap-4 mb-6">
          <Button variant='secondary' text='Add Content' startIcon={<AddIcon size="md"/>} size='md' onClick={()=>{setModalOpen(true)}}/>
          <Button variant='primary' text='Logout' startIcon={<LogOut/>} size='md' onClick={logout}/>
        </div>
    </div>
  )
}

export default Navbar