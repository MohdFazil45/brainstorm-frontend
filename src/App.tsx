import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signin from "./pages/Signin"
import LandingPage from "./pages/LandingPage"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import SharedPage from "./pages/SharedPage"



const App = () => {
  return (  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/api/v1/brain/:hash" element={<SharedPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App