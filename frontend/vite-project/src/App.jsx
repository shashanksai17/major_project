
import './App.css'
import {SignedOut, SignInButton,SignedIn,UserButton,SignOutButton} from "@clerk/clerk-react"

function App() {
  

  return (
    <>
      <h1>Welcome to the app</h1>
      <SignedOut>
      <SignInButton mode="modal">
      <button>
        login 
      </button>
      </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton/>
      </SignedIn>

 
      <UserButton/>
    
  

    </>
  )
}

export default App
