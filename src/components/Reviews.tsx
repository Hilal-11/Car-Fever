import React from 'react'
import { PiCubeDuotone } from "react-icons/pi";
import { reviewsConfig } from '@/config/reviewConfig'
function Reviews() {
  return (
    <div className='container text-center mx-auto py-20 container px-3'>
        <div className='flex justify-center items-center'>
            <h3 className="dark:text-black bg-white flex gap-2 justify-center items-center shadow-sm shadow-gray-400 rounded-full px-8 py-1 inter-bold text-sm"><span><PiCubeDuotone /></span>Reviews</h3>
        </div>
        <div className='text-center space-y-3 my-5'>
            <h1 className='text-4xl lg:text-7xl inter-bold text-gray-800 dark:text-white '>Loved by people all over the world</h1>
            <p className='text-sm lg:text-lg lg:w-2/3 mx-auto inter-medium'>Our customers span every corner of the globe, and their stories speak louder than anything we could say. From first-time users to long-time supporters, each review is a reminder of why we do what we do.</p>
        </div>



        <br />
        <div className='my-6 relative flex justify-evenly gap-4 flex-wrap py-10 lg:px-10 h-[700px] overflow-hidden pb-10'>
            <span className='block absolute -top-10 w-2/3 mx-auto h-[150px] dark:bg-neutral-950 bg-gray-100 z-20 blur-2xl rounded-full'></span>
            <span className='block absolute -bottom-10 w-2/3 mx-auto h-[150px] dark:bg-neutral-950 bg-gray-100 rounded-full z-20 blur-2xl'></span>
            
            <div className='relative -top-30 relative flex justify-evenly flex-wrap gap-4 items-start'>
                {
                    reviewsConfig.map((review , index) => (
                        <div key={index} className="px-2 py-3 scroll-verticallyUp lg:w-[340px] w-full rounded-3xl h-auto bg-white dark:bg-neutral-900 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                            <div className='flex gap-3 pr-6 inter-bold  text-[14px] items-center' >
                               <div>
                                 <img className='w-[38px] rounded-full' src={review.reviewerImage} alt="" />
                               </div>
                                <div className='py-2'>
                                    <p className='text-left inter-bold text-sm'>{review.reviewerName}</p>
                                    <p className='text-left inter-medium text-sm'>{review.reviewerRole}</p>
                                </div>
                            </div>
                            
                            <div className='py-2 px-4 inter-medium'>
                                <p className='text-left text-[16px]'>{review.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            
        </div>
    </div>
  )
}

export default Reviews