import React from 'react'
import { carReviewsConfig } from '@/config/carReviewsConfig'
import DefaultLayout from '@/layouts/default'
function ReviewsPage() {
  return (
    <DefaultLayout>
        <div className='px-4'>
            <div className="text-center ">
                <h1 className="Inter-bold text-4xl lg:text-7xl">Car Reviews</h1>
                <p className="pt-2 Inter-medium text-[18px] lg:px-20 px-6 ">Read reviews of the latest models and discover the prices and deals</p>
            </div>
            <div className='mt-10 w-full rounded-3xl md:h-[550px] relative overflow-hidden'>
                <img className='object-cover w-full rounded-3xl' src="https://framerusercontent.com/images/wdXb1RLnOBQydMKyc2sctkUOais.jpg" alt="" />
                <div className='absolute bottom-6 lg:bottom-10 px-4 lg:px-10' >
                    <h1 className='text-2xl lg:text-6xl Inter-bold text-white'>{carReviewsConfig[0].car}</h1>
                    <p className='text-md lg:text-lg Inter-medium text-white'>{carReviewsConfig[0].about}</p>
                    <button className='mt-2 px-10 py-3 rounded-lg bg-neutral-950 text-white dark:bg-neutral-100 dark:text-black Inter-bold text-md'>Read More</button>
                </div>
            </div> 
            <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                 carReviewsConfig.map((carItem) => (
                    <div className='  rounded-3xl relative overflow-hidden h-[400px]'>
                        <img className='object-contain object-left-bottom ' src={carItem.image} alt="" />
                        <div className='absolute bottom-6 lg:bottom-10 px-4 lg:px-10' >
                            <h1 className='text-2xl lg:text-3xl Inter-bold text-white'>{carItem.car}</h1>
                            <p className='text-md lg:text-lg Inter-medium text-white'>{carItem.about}</p>
                            <button className='mt-2 px-10 py-3 rounded-lg bg-neutral-950 text-white dark:bg-neutral-100 dark:text-black Inter-bold text-md'>Read More</button>
                        </div>
                    </div> 
                 )) 
                }
            </div>
        </div>
    </DefaultLayout>
  )
}

export default ReviewsPage
