import {SignedOut, SignInButton,SignedIn,UserButton,SignOutButton} from "@clerk/clerk-react"
import { Navigate,Route,Routes} from "react-router"
import HomePage from "./pages/HomePage"
import ProblemsPage from "./pages/ProblemsPage"
import { useUser } from "@clerk/clerk-react"
import { Toaster } from "react-hot-toast"
function App() {
  const  {isSignedIn}=useUser();
  return (
    <>
    
    <Routes>
     {/* <h1 className="text-red-500 bg-orange-400 p-10 text-3xl">Welcome to the app</h1> */}
    
    <Route path="/" element={<HomePage/>}/>
    
    <Route path="/problems" element={isSignedIn?<ProblemsPage/>:<Navigate to= {"/"}/>}/>

    </Routes>
    <Toaster toastOptions={{duration:3000}}/>
    </>
  )
}

export default App
