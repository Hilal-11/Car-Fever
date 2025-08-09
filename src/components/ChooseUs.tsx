import React from 'react'
import { motion } from 'motion/react'
function ChooseUs() {
  return (
    <div className='container mx-auto py-5'>
        <div>
            <h1 className='text-7xl inter-bold text-center'>Why you chosse us</h1>
        </div>
        <div 
          id='bento-grid'
          className='grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-6 mx-auto  py-10 px-6 relative'
        >
            <motion.div 
              className='lg:row-span-2  bg-zinc-100 dark:bg-neutral-900 h-auto rounded-xl shadow-lg shadow-gray-400 dark:shadow-gray-950'
              initial={{ opacity: 0, y: 60, scale: 0.9, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)",transition: { duration: 0.8, ease: "easeOut" }
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02,transition: { duration: 0.2 }
              }}
            >

            </motion.div>
            <motion.div 
              className='w-full bg-zinc-100 dark:bg-neutral-900 h-[320px] rounded-xl shadow-lg shadow-gray-400 dark:shadow-gray-950 overflow-hidden'
              initial={{ opacity: 0, y: 60, scale: 0.9, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)",transition: { duration: 0.8, ease: "easeOut", delay: 0.1 }
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02,transition: { duration: 0.2 }
              }}
            >
    
            </motion.div>
              

              <motion.div 
              className='w-full bg-zinc-100 dark:bg-neutral-900 h-[320px] rounded-xl shadow-lg shadow-gray-400 dark:shadow-gray-950 z-20 overflow-hidden'
              initial={{ opacity: 0, y: 60, scale: 0.9, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)",transition: { duration: 0.8, ease: "easeOut", delay: 0.1 }
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02,transition: { duration: 0.2 }
              }}
            >
 
            </motion.div>


            <motion.div 
              className='lg:col-span-2 bg-zinc-100 dark:bg-neutral-900 h-[320px] rounded-xl shadow-lg shadow-gray-400 dark:shadow-gray-950 z-20 overflow-hidden'
              initial={{ opacity: 0, y: 60, scale: 0.9, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)",transition: { duration: 0.8, ease: "easeOut", delay: 0.3 }
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02,transition: { duration: 0.2 }
              }}
            > 

            </motion.div>
        </div>
    </div>
  ) 
}

export default ChooseUs