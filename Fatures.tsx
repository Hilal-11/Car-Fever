import React from 'react'
import { HiOutlineCube } from "react-icons/hi";
const Fatures = () => {
    return (
        <div className='py-0 lg:py-20 container lg:px-6 px-2'>
            <div className='flex justify-center text-center'>
                <h1 className='text-md inter-regular text-center shadow-md px-8 py-1 rounded-full bg-white flex gap-1 items-center justify-center'> <span><HiOutlineCube /></span>Features</h1>
            </div>
            <div className='text-center space-y-2 px-2 py-5'>
                <h1 className='lg:text-7xl text-3xl inter-bold '>All features in one place</h1>
                <p className='lg:text-lg text-md inter-medium lg:w-1/2 mx-auto '>Our platform equips you with intelligent features that work seamlessly together so you can focus on what matters most: scaling your business.</p>
            </div>
            
        </div>
    )
}

export default Fatures;