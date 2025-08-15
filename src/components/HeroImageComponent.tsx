import React, { useRef } from 'react'
import { motion } from 'motion/react'
import { useScroll, useTransform } from 'framer-motion';
function HeroImageComponent() {

    // const containerRef = useRef<HTMLDListElement>(null);

    // const { scrollYProgress } = useScroll({
    //     target: containerRef,
    // })


    // const rotateX = useTransform(scrollYProgress , [0 , 1] , [20 , 20]);
    // const translateY = useTransform(scrollYProgress , [0 , 1] , [0 , 0]);

  return (
    <div className='flex justify-center items-center w-full [perspective:800px] [transform-style:preserve-3d]'>
    <motion.div className='w-full h-full shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] p-2 lg:p-2 rounded-xl bg-neutral-200 mask-b-from-10 to-20'
        style={{
            rotateX: 24,
            translateZ: "110px",
            y: 6
            
        }}
        whileHover={{
            rotateX: 0,
            translateZ: "0px",
            y: -40,
        }}
        whileTap={{
            rotateX: 0,
            translateZ: "0px",
            y: -40,
        }}
        transition={{
            duration: 0.3,
            delay: 0.1,
        }}
    >   
        <div>
            <motion.img
            className='rounded-xl w-full object-cover mask-b-from-10 to-20' src="https://ai-saas-template-aceternity.vercel.app/_next/image?url=%2Fheader.png&w=1920&q=75" alt="Error" />
        </div>
    </motion.div>

    
    </div>
    
  )
}

export default HeroImageComponent