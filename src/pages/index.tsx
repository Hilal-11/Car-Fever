
import DefaultLayout from "@/layouts/default";
import { motion } from 'motion/react'
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { IoCarSportSharp } from "react-icons/io5";

import { useEffect } from "react";
export default function IndexPage() {
  useEffect(() => {
    window.scrollTo(0 , 0)
  }, [])
  return (

    <DefaultLayout>
      <div className="container mx-auto z-30 relative -top-10">

        <div className="flex justify-center items-center z-30">
          <button className="z-30 relative flex items-center bg-white dark:bg-neutral-900 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-full text-[16px] px-5 py-[2.5px] Inter-medium">Car Fever Services

            <span className="inline-block absolute inset-x-0  opacity-100 transition-opacity duration-300 bottom-0 h-px w-2/3 mx-auto bg-gradient-to-r from-transparent via-slate-500 to-transparent"></span>
            <span className="z-50 inline-block absolute inset-x-0  opacity-100 transition-opacity duration-300 -bottom-16 h-10 w-[100%] mx-auto bg-zinc-600 dark:bg-neutral-400 blur-2xl rounded-b-full "></span>
          </button>

        </div> 

        <div className="mt-8  text-center z-50 lg:w-2/3 mx-auto">
          <h1 className="px-4 z-50 text-4xl md:text-[3.1rem] lg:text-[3.7rem] Inter-bold heading-lg flex">Explore premium cars for sale and rent at affordable prices.</h1>
          <p className="px-2 py-4 lg:w-2/3 mx-auto Inter-medium lg:py-0 text-md z-50">A largest multipurpose car dealership template made with Framer. Rent a car with our no-code template ready for publishing.</p>
        </div>
        <div className="mt-8 px-6 flex flex-wrap justify-center items-center gap-5 lg:gap-4 z-30">
          <motion.button
            initial={{
              scale: 0.98,
              
            }}
            style={{
                translateZ : 100
            }}
            whileHover={{
              scale: 1,
              y: -4,
            }}
            transition={{
              duration: 0.2,
            }}
          className="z-30 cursor-pointer Inter-bold bg-neutral-900 dark:bg-white dark:text-black md:w-[220px] w-full py-[12px] rounded-lg text-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">Explore Cars</motion.button>
          <motion.button
            initial={{
              scale: 0.98,
              
            }}
              style={{
                translateZ : 100
            }}
            whileHover={{
              scale: 1,
              y: -4,
              // rotateX: -6,
              rotateY: -18,
            }}
            transition={{
              duration: 0.2,
            }}
          className="text-center z-30 cursor-pointer relative Inter-bold cursor-pointer dark:bg-zinc-900 dark:text-white bg-white md:w-[220px] w-full py-[12px] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex justify-center items-center gap-2">See Our Services <motion.span
            whileHover={{
              y: -10,
              x: 100,
              // y: 1,
              // repeatCount: Infinity,
              rotate: [0 , 360 , 0]
            }}
            // whileTap={{
            //   x: 100,
            //   rotateY: [2 , 4 , 2],
            //   opacity: 0,
            // }}
            transition={{
              duration: 1,
              
            }}
          className="text-xl z-30"><HiOutlineArrowSmRight /></motion.span>

            <span className="inline-block absolute inset-x-0  opacity-100 transition-opacity duration-300 bottom-0 h-px w-full mx-auto bg-gradient-to-r from-transparent via-slate-950 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent z-30"></span>
          </motion.button>
        </div>

        {/* Another secession */}
      
      <div className="flex items-center justify-center pt-16 px-4 relative">

            <img className="hidden md:flex md:w-[180px] lg:w-[300px] absolute md:top-4 lg:-top-10 left-10" src="https://framerusercontent.com/images/dJJV3d9kZRrSPMQp0zAdtP4zWU.jpeg?width=724&height=740" alt="" />
            
            <img className="w-[80%] lg:w-[50%]" src="https://framerusercontent.com/images/rX0pbOFErZjRslH5BeXksDiQxVE.png?scale-down-to=1024&width=2622&height=1132" alt="HeroImage" />

            <img className="hidden md:flex md:w-[180px] lg:w-[300px] absolute md:bottom-0 lg:-top-10 right-10" src="https://framerusercontent.com/images/cMPQOIK9yaPdgLowOlU1UEw7XKY.jpeg?width=724&height=740" alt="" />
      </div>

      </div>
    </DefaultLayout>
        
  );
}






