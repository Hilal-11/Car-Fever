import React from 'react'
import { motion } from 'motion/react'
const Pricing = () => {
    return (
        <div className='container grid grid-cols-1 lg:grid-cols-3 justify-center iteme-center gap-10 w-full h-auto px-6 py-10 gap-6'>
        <motion.div 
              className='w-full bg-zinc-100 dark:bg-neutral-950 dark:ring-1 dark:ring-neutral-600 h-[500px] rounded-xl pb-2 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] *:
                dark:shadow-gray-950 overflow-hidden'
              initial={{ opacity: 0, y: 60, scale: 0.9, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)",transition: { duration: 0.8, ease: "easeInOut", delay: 0.1 }
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02,transition: { duration: 0.2 }
              }}
            >
            </motion.div>
            <motion.div 
              className='w-full bg-zinc-100 dark:bg-neutral-950 dark:ring-1 dark:ring-neutral-600 h-[500px] rounded-xl pb-2 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] *:
                 dark:shadow-gray-950 overflow-hidden'
              initial={{ opacity: 0, y: 60, scale: 0.9, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)",transition: { duration: 0.8, ease: "easeInOut", delay: 0.1 }
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02,transition: { duration: 0.2 }
              }}
            >
            </motion.div>

            <motion.div 
              className='w-full bg-zinc-100 dark:bg-neutral-950 dark:ring-1 dark:ring-neutral-600 h-[500px] rounded-xl pb-2 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] *:
                dark:shadow-gray-950 overflow-hidden'
              initial={{ opacity: 0, y: 60, scale: 0.9, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)",transition: { duration: 0.8, ease: "easeInOut", delay: 0.1 }
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02,transition: { duration: 0.2 }
              }}
            >
            </motion.div>
              
        </div>
    )
}

export default Pricing;