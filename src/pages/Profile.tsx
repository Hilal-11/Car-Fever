import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton , UserProfile } from '@clerk/clerk-react';
import DefaultLayout from '@/layouts/default';
import { useNavigate } from 'react-router-dom';
function Profile() {
  const navigate = useNavigate()
  return (
    <div className='container mx-auto '>
      <button onClick={() => { navigate('/')}} className='px-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)] Inter-medium text-white bg-neutral-950 dark:bg-neutral-100 dark:text-black cursor-pointer rounded-xl px-8 py-2 relative lg:top-20 top-8 left-2'>Back</button>
      <div className='lg:my-0 my-6 flex justify-center items-center h-svh'>
        <UserProfile />
        <SignedOut />
      </div>
    </div>
    
  )
}

export default Profile