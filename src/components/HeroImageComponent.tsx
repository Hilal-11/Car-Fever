import React from 'react'

function HeroImageComponent() {
  return (
    <div className='flex justify-center items-center w-full shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] p-2 lg:p-6 rounded-xl bg-neutral-200 mask-b-from-10 to-20'>
        <img className='rounded-xl w-full object-cover mask-b-from-10 to-20' src="https://ai-saas-template-aceternity.vercel.app/_next/image?url=%2Fheader.png&w=1920&q=75" alt="Error" />
    </div>
  )
}

export default HeroImageComponent