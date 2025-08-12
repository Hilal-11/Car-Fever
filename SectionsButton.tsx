import React from "react";
import { HiOutlineCube } from "react-icons/hi";

const SectionButton = () => {
    return (
        <div>
            <div className='flex justify-between py-10'>
                <h1 className='text-md inter-regular text-center shadow-md px-8 py-1 rounded-full bg-white flex gap-1 items-center justify-center'> <span><HiOutlineCube /></span>{""}</h1>
            </div>
        </div>
    )
}