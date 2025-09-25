
import { PiCubeDuotone } from "react-icons/pi";
import { CodeBlock, dracula } from 'react-code-blocks';
import { motion } from 'motion/react'
function ChooseUs() {


  return (
    <div className='container mx-auto py-5'>
        <div>
            <div className='flex justify-center mx-auto'>
              <h3 className='text-center bg-white flex gap-2 justify-center items-center shadow-sm shadow-gray-400 rounded-full px-8 py-1 Inter-bold text-sm'><span><PiCubeDuotone /></span>Choose Us</h3>
            </div>
            <h1 className='text-4xl lg:text-7xl Inter-bold text-center'>Why you choose us</h1>
        </div>
        <div 
          id='bento-grid'
          className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 mx-auto  py-6 px-3 relative'
        >
            <motion.div 
              className='lg:row-span-2 lg:h-[810px] h-[400px] lg:overflow-hidden overflow-scroll w-full bg-zinc-100 dark:bg-neutral-900 rounded-xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] *:
                hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]
              dark:shadow-gray-950 '
              initial={{ opacity: 0, y: 100, scale: 0.9, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)",transition: { duration: 0.8, ease: "easeOut" }
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02,transition: { duration: 0.3 }
              }}
            >   
              <div className='py-2'>
                <img className=' object-cover' src="https://www.motia.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FtrelloFlow.d1930463.avif&w=640&q=75&dpl=dpl_9rrJQBh2cpkrN1Q7dqErBCJnzfyK" alt="ERROR" />
              </div>
                
            </motion.div>
            <motion.div 
              className='w-full bg-zinc-100 dark:bg-neutral-950 dark:ring-1 dark:ring-neutral-600 h-auto rounded-xl pb-2 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] *:
                 hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] dark:shadow-gray-950 overflow-hidden'
              initial={{ opacity: 0, y: 60, scale: 0.9, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)",transition: { duration: 0.8, ease: "easeOut", delay: 0.1 }
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02,transition: { duration: 0.2 }
              }}
            >
                <div className='flex items-start justify-center items-center'>
                    <img className='rounded-t-xl object-cover' src="https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Fserver-rendering-with-streaming.png&w=1920&q=75" alt="" />
                </div>
                <div className='lg:px-6 px-4 py-2 space-y-1 '>
                    <h1 className='text-xl lg:text-2xl Inter-bold'>React Server Components</h1>
                    <p className='text-[16px] lg:text-[16px] Inter-medium lg:pr-12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi eligendi nostrum delectus voluptatum, consectetur.</p>
                </div>
            </motion.div>
              

              <motion.div 
              className='pb-3 w-full bg-zinc-100 dark:bg-neutral-900 h-auto rounded-xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] *:
                hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] dark:shadow-gray-950 z-20 overflow-hidden'
              initial={{ opacity: 0, y: 60, scale: 0.9, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)",transition: { duration: 0.8, ease: "easeOut", delay: 0.1 }
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02,transition: { duration: 0.2 }
              }}
            >
                <div className=' flex items-start justify-center'>
                    <img className='object-cover' src="https://nextjs.org/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fnextjs%2Fspheres-light.png&w=300&q=100" alt="" />
                </div>
                <div className='lg:px-6 px-4 py-2 space-y-1 '>
                    <h1 className='text-xl lg:text-2xl Inter-bold'>Route Handlers and Middleware</h1>
                    <p className='text-[16px] lg:text-[16px] Inter-medium lg:pr-12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi eligendi nostrum delectus voluptatum, consectetur.</p>
                </div>
            </motion.div>


            <motion.div 
              className='pb-3 lg:col-span-1 bg-zinc-100 dark:bg-neutral-900 h-auto rounded-xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] *:
                hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] dark:shadow-gray-950 z-20 overflow-hidden'
              initial={{ opacity: 0, y: 60, scale: 0.9, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)",transition: { duration: 0.8, ease: "easeOut", delay: 0.3 }
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02,transition: { duration: 0.2 }
              }}
            > 
                <div className='flex items-start justify-center'>
                    <img className='object-cover' src="https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Fnested-file-conventions-component-hierarchy.png&w=1920&q=75" alt="" />
                </div>
                <div className='lg:px-6 px-4 py-2 space-y-1 '>
                    <h1 className='text-xl lg:text-2xl Inter-bold'>Dynamic HTML Streaming</h1>
                    <p className='text-[16px] lg:text-[16px] Inter-medium lg:pr-12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi eligendi nostrum delectus voluptatum, consectetur.</p>
                </div>
            </motion.div>


            <motion.div 
              className='pb-3 lg:col-span-1 bg-zinc-100 dark:bg-neutral-900 h-auto rounded-xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] *:
                hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] dark:shadow-gray-950 z-20 overflow-hidden'
              initial={{ opacity: 0, y: 60, scale: 0.9, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)",transition: { duration: 0.8, ease: "easeOut", delay: 0.3 }
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02,transition: { duration: 0.2 }
              }}
            > 
                <div className='flex items-start justify-center'>
                    <img className='object-cover' src="https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Ffile-conventions-component-hierarchy.png&w=1920&q=75" alt="" />
                </div>
                <div className='lg:px-6 px-4 py-2 space-y-1 '>
                    <h1 className='text-xl lg:text-2xl Inter-bold'>Measurable Impact</h1>
                    <p className='text-[16px] lg:text-[16px] Inter-medium lg:pr-12'>Track performance, uncover insights, and achieve data-backed growth connect tools, teams, and workflows with intelligent automation.</p>
                </div>
            </motion.div>
        </div>
    </div>
  ) 
}

export default ChooseUs