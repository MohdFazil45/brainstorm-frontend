import { useRef } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { BACKEND_URL } from "../config";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  const signup = async () =>{
    const username = usernameRef.current?.value
    const password = passwordRef.current?.value

    if (username === "") {
      return alert("Enter username")
    }

    if (password === "") {
      return alert("Enter password")
    }

    await axios.post(`${BACKEND_URL}/api/v1/signup`,{
        username,
        password     
    })
    navigate("/signin")

  }

  const accountExist = ()=> {
    navigate('/signin')
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-300">
      <div className="h-[30vw] w-[35vw]  flex flex-col gap-4 items-center justify-center bg-white rounded-xl shadow-2xl ">
        <h1 className="text-3xl font-semibold mb-4">Create a new account</h1>
        <Input placeholder="Username" ref={usernameRef} width={true}/>
        <Input placeholder="Password" ref={passwordRef} width={true}/>
        <Button variant="secondary" size="md" text="Create An Account"  loading={false} onClick={signup}/>
        <Button variant="primary" text="Already have an account?" size="sm" onClick={accountExist}/>
      </div>
    </div>
  );
};
 
export default Signup;
