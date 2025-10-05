
import { PiCubeDuotone } from "react-icons/pi";
import { carServiceConfig } from "@/config/carerviceConfig"; 
import { motion } from 'motion/react'
function ChooseUs() {


  return (
    <div className='container mx-auto py-20 px-5 md:px-10'>
        <div>
            <div className='flex justify-center mx-auto'>
              <h3 className='text-center bg-white dark:text-neutral-900 flex gap-2 justify-center items-center shadow-sm shadow-gray-400 rounded-full px-8 py-1 Inter-bold text-sm'><span><PiCubeDuotone /></span>Out Services</h3>
            </div>
            <h1 className='text-4xl lg:text-7xl Inter-bold text-center'>Services we are providing</h1>
        </div>
        <div 
          id='bento-grid'
          className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 mx-auto  py-6 px-0 relative'
        >
            {
              carServiceConfig.map((item) => (
                <motion.div 
                  key={item.id}
                  className='w-full bg-zinc-100 dark:bg-neutral-900 h-auto rounded-xl pb-2 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] *:
                    hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] dark:shadow-gray-950 overflow-hidden'
                  initial={{ opacity: 0, y: 60, scale: 0.9, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)",transition: { duration: 0.8, ease: "easeOut", delay: 0.1 }
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ scale: 1.02,transition: { duration: 0.2 }
                  }}
                >
                    <div className='flex items-start justify-center items-center'>
                        <img className='w-full h-auto rounded-t-xl object-contain' src={item.image} alt="" />
                    </div>
                    <div className='lg:px-6 px-2 py-2 space-y-1 flex justify-between items-center'>
                        <h1 className='text-xl lg:text-xl Inter-bold flex gap-1 items-end justify-center'><p className="text-3xl">{item.icon}</p>{item.service}</h1>
                        <p className="text-[12px] Inter-medium text-gray-500">{item.tagline}</p>
                    </div>
                    <div className="lg:px-6 px-4 py-2 space-y-1 flex justify-between items-center">
                        <p className='text-sm Inter-medium'>{item.description}</p>
                    </div>
                    <div className="flex py-2 pb-2 px-6 justify-center items-center">
                      <button className="cursor-pointer Inter-bold bg-neutral-900 dark:bg-white dark:text-black md:w-[220px] w-full py-[9px] rounded-lg text-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">{item.cta}</button>
                    </div>
            </motion.div>
              ))
            }
      
        </div>
    </div>
  ) 
}

export default ChooseUs