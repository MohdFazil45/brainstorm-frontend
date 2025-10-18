import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import Card from "../components/Card"

const LandingPage = () => {
    const navigate = useNavigate()
    const login = ()=>{
        navigate("/signin")
    }
    const signup = ()=>{
        navigate("/signup")
    }
  return (
    <div className="relative ">
        <div className="absolute top-0 h-screen w-screen flex items-center justify-around transition-all duration-200 animate-[float_4s_ease-in-out_infinite] bg-gray-300">
            <Card title='X' link='https://x.com/fazil_dev_/status/1977031363300933880' type='twitter'/>
            <Card title='Youtube' link="https://www.youtube.com/watch?v=So7lVjQl0wI?si=SgYc0QIV_KedEc3K" type='youtube'/>
        </div>
        <div className="absolute top-0 h-screen w-screen flex flex-col items-center justify-center bg-gray-300/60 z-50">
        <div className="fixed top-0 left-0 flex items-center justify-between w-screen pl-4 pr-4">

            <div className="pt-8 mb-16 flex items-center justify-center gap-4 ">
                    <img className="h-8 w-8" src="/public/logo.svg" alt="" />
                    <div className="text-2xl drop-shadow-lg ">
                    BrainStorm
                    </div>
            </div>
            <div>
                <Button variant="secondary" size="md" text="Signin" onClick={login} />
            </div>
        </div>
        <div className="text-9xl font-medium tracking-tighter ">BrainStorm</div>
        <div className="text-xl font-medium tracking-tighter mb-4">A cleaner home for your online brain</div>
        <div>
            <Button variant="secondary" text="Get Started" size="md" onClick={signup}/>
        </div>
        </div>
    </div>
  )
}

export default LandingPage