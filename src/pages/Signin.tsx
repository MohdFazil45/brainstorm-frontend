import { useRef } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

const Signin = () => {
    const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  const signin = async () =>{
    const username = usernameRef.current?.value
    const password = passwordRef.current?.value

    if (username === "") {
      return alert("Enter username")
    }

    if (password === "") {
      return alert("Enter password")
    }

    const response = await axios.post(`${BACKEND_URL}/api/v1/signin`,{
        username,
        password        
    })
    const jwt = response.data.token
    localStorage.setItem("token",jwt)

    navigate("/dashboard")

  }

  const createAccount = ()=>{
    navigate("/signup")
  }
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-300">
      <div className="h-[30vw] w-[35vw]  flex flex-col gap-4 items-center justify-center bg-white rounded-xl shadow-2xl ">
        <h1 className="text-3xl font-semibold mb-4">Signin to your account</h1>
        <Input placeholder="Username" ref={usernameRef} width={true}/>
        <Input placeholder="Password" ref={passwordRef} width={true}/>
        <Button variant="secondary" size="md" text="Signin"  loading={false} onClick={signin}/>
        <Button variant="primary" text="Create an Account" size="sm" onClick={createAccount} />
      </div>
    </div>
  );
};
 
export default Signin;
