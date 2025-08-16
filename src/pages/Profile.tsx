import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton , UserProfile } from '@clerk/clerk-react';
import DefaultLayout from '@/layouts/default';
import { useNavigate } from 'react-router-dom';
import { MdKeyboardBackspace } from "react-icons/md";
function Profile() {
  const navigate = useNavigate()
  return (
    <div className='container mx-auto '>
      <button onClick={() => { navigate('/')}} className='px-4 bg-white text-black dark:text-white dark:bg-neutral-800 shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-xl cursor-pointer rounded-2xl py-1 relative lg:top-20 top-4 left-2'><MdKeyboardBackspace /></button>
      <div className='lg:my-0 flex justify-center lg:items-center items-start w-full h-svh py-14 rounded-xl'>
        <div className='lg:h-auto h-[520px] overflow-hidden rounded-xl'>
           <UserProfile />
          <SignedOut />
        </div>
      </div>
    </div>
    
  )
}

export default Profile