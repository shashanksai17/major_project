import { useUser } from "@clerk/clerk-react"
import { Toaster } from "react-hot-toast"
import { Navigate, Route, Routes } from "react-router"
import DashboardPage from "./pages/DashboardPage"
import HomePage from "./pages/HomePage"
import ProblemPage from "./pages/ProblemPage"
import ProblemsPage from "./pages/ProblemsPage"
import SessionPage from "./pages/SessionPage"
function App() {
  const  {isSignedIn,isLoaded}=useUser();
  // this will get rid of flikering effect
  if(!isLoaded){
    return null;
  }

  return (
    <>
    
    <Routes>
     {/* <h1 className="text-red-500 bg-orange-400 p-10 text-3xl">Welcome to the app</h1> */}
    
    <Route path="/" element={!isSignedIn?<HomePage/>:<Navigate to= {"/dashboard"}/>}/>
    <Route path="/dashboard" element={isSignedIn?<DashboardPage/>:<Navigate to= {"/"}/>}/>
    
    <Route path="/problems" element={isSignedIn?<ProblemsPage/>:<Navigate to= {"/"}/>}/>
    <Route path="/problem/:id" element={isSignedIn?<ProblemPage/>:<Navigate to= {"/"}/>}/>
    <Route path="/session/:id" element={isSignedIn?<SessionPage/>:<Navigate to= {"/"}/>}/>

    </Routes>
    <Toaster toastOptions={{duration:3000}}/>
    </>
  )
}

export default App
