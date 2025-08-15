import { title } from "@/components/primitives";
import Reviews from "@/components/Reviews";
import DefaultLayout from "@/layouts/default";
import { motion } from 'motion/react'
import { useEffect } from "react";
export default function DocsPage() {


  useEffect(() => {
    window.scrollTo(0 , 0)
  }, [])

  return (
    <DefaultLayout>

      <div className="text-center pt-10 lg:pt-20">
        <h1 className="Inter-bold text-4xl lg:text-8xl">Blogs</h1>
        <p className="pt-2 Inter-medium text-[18px] lg:px-20 px-6 ">Insights, Strategies, and Stories to Inspire Startups and Businesses Around the World</p>
        
      </div>
      <div 
          id='bento-grid'
          className='grid lg:grid-cols-3 gap-8 lg:gap-6 mx-auto lg:w-[100%] py-10 px-6 relative'
        >
            <motion.span 
              className='lg:w-[300px] lg:h-[300px] rounded-full bg-cyan-500 absolute z-10 -top-10 -left-20 blur-[140px]'
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1,transition: { duration: 1.2, ease: "easeOut" }
              }}
              viewport={{ once: true, margin: "-50px" }}
              
            ></motion.span>
            
            <motion.div 
              className='bg-zinc-100 dark:bg-neutral-900 h-auto rounded-xl bg-zinc-100 dark:bg-neutral-900 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] *:
                 dark:shadow-gray-950 z-20'
              initial={{ opacity: 0, y: 60, scale: 0.9, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)",transition: { duration: 0.8, ease: "easeOut" }
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02,transition: { duration: 0.2 }
              }}
            >
              <div className='w-full h-full'>
                  <img className='h-[300px] w-full overflow-hidden object-cover rounded-xl' src="https://www.motia.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbento5.4d1d483e.webp&w=640&q=75&dpl=dpl_9rrJQBh2cpkrN1Q7dqErBCJnzfyK" alt="Error" />
              
              <div className="px-4 space-y-2 pb-6">
                <h2 className="Inter-bold text-2xl">Top 5 LLM's all time</h2>
                <p className="pt-2 Inter-medium text-[16px]">It's simply revolutionary! The way it integrates with our existing systems and enhances them is nothing short of miraculous.</p>
              </div>
              </div>
            </motion.div>
            <motion.div 
              className='bg-zinc-100 dark:bg-neutral-900 h-auto rounded-xl bg-zinc-100 dark:bg-neutral-900 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] *:
                 dark:shadow-gray-950 z-20'
              initial={{ opacity: 0, y: 60, scale: 0.9, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)",transition: { duration: 0.8, ease: "easeOut" }
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02,transition: { duration: 0.2 }
              }}
            >
              <div className='w-full '>
                  <img className='h-[300px] w-full overflow-hidden object-cover rounded-xl' src="https://ai-saas-template-aceternity.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthumbnail.ff6badda.jpeg&w=828&q=75" alt="Error" />
              
              <div className="px-4 space-y-2 pb-6 py-6">
                <h2 className="Inter-bold text-2xl">Top 5 LLM's all time</h2>
                <p className="pt-2 Inter-medium text-[16px]">It's simply revolutionary! The way it integrates with our existing systems and enhances them is nothing short of miraculous.</p>
              </div>
              </div>
            </motion.div>
            <motion.div 
              className='bg-zinc-100 dark:bg-neutral-900 h-auto rounded-xl bg-zinc-100 dark:bg-neutral-900 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] *:
                 dark:shadow-gray-950 z-20'
              initial={{ opacity: 0, y: 60, scale: 0.9, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)",transition: { duration: 0.8, ease: "easeOut" }
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02,transition: { duration: 0.2 }
              }}
            >
              <div className='w-full h-full'>
                  <img className='h-[300px] w-full overflow-hidden object-cover rounded-xl' src="https://www.motia.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FmotiaCloudFlow.a7fbdbae.webp&w=640&q=75&dpl=dpl_9rrJQBh2cpkrN1Q7dqErBCJnzfyK" alt="Error" /> 
              
              <div className="px-4 space-y-2 pb-6 ">
                <h2 className="Inter-bold text-2xl">Top 5 LLM's all time</h2>
                <p className="pt-2 Inter-medium text-[16px]">It's simply revolutionary! The way it integrates with our existing systems and enhances them is nothing short of miraculous.</p>
              </div>
              </div>
            </motion.div>

            
           
           

              



            <motion.span 
              className='lg:w-[300px] lg:h-[300px] rounded-full bg-orange-600 absolute -right-20 -bottom-10 z-10 blur-[140px]'
              style={{
                  background: "linear-gradient(90deg, hsla(276, 91%, 79%, 1) 0%, hsla(254, 74%, 65%, 1) 100%)",
                }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1,transition: { duration: 1.2, ease: "easeOut", delay: 0.4 }
              }}
              viewport={{ once: true, margin: "-50px" }}
            ></motion.span>
        </div>

        <Reviews />
        
    </DefaultLayout>
  );
}
