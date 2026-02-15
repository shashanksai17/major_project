import React from 'react'
import {SignedOut, SignInButton,SignedIn,UserButton,SignOutButton} from "@clerk/clerk-react"
import toast from 'react-hot-toast'
import axios from 'axios'
function HomePage() {
   


  return (
    <div>
    <button className='btn btn-primary' onClick={()=> toast.error("This is a success toast")}>click me</button>
       
      <SignedOut>
      <SignInButton mode="modal">
      <button className='btn btn-danger'>
        login 
      </button>
      </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton/>
      </SignedIn>

 
      <UserButton/>
    
    </div>
  )
}

export default HomePage
