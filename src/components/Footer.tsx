import { NavigationData , ServicesData } from "@/config/footerData";
// import { FaGithub, FaTwitter, FaLinkedin , FaFacebook } from "react-icons/fa";

// import { Link as ScrollLink } from 'react-scroll';
function Footer() {
  return (
    <div className=' w-full h-auto lg:py-10 my-20 bg-neutral-100 dark:bg-neutral-900 relative -bottom-20'>
        <div className='container px-4 lg:max-w-[80%] mx-auto lg:py-6'>
          <div className='grid lg:grid-cols-5  md:grid-cols-4 grid-cols-2 justify-between lg:gap-10 py-10'>
            <div className=' col-span-2'>
              <h1 className='text-3xl Inter-bold '>Prime Deck</h1>
              <div className='py-4'>
                <p className='text-[15px] Inter-medium lg:w-[300px]'><span className='Inter-bold'>Prime Deck</span>- Automate Smarter,  <br /> Optimize Faster,and Grow Stronger.</p>
                <div className='py-6 px-1 space-y-1'>
                  <h1 className='text-2xl Inter-medium '>Newslatter</h1>
                  <input className='border-b-1 border-b-primary-700 px-1 py-2 w-[300px] Inter-medium text-sm outline-none' type="text" placeholder='Enter your email:- ' />
                </div>
              </div>
            </div>
            <div>
              <h1 className='text-3xl Inter-medium '>Links</h1>
              <div className='space-y-2  py-5'>
                {
                  NavigationData.items.map((items) => (
                    <li key={items.id} className='cursor-pointer hover:underline duration-500 Inter-medium text-[15px] list-none'>
                      {items.navigateTo && (
                        
                          <span>{items.linkItem}</span>
                        
                      )}
                    </li>
                  ))
                }
              </div>
            </div>
            <div className='lg:mx-0 mx-auto'>
              <h1 className='text-3xl Inter-medium '>Pages</h1>
              <div className=' space-y-2 py-5 '>
                {
                ServicesData.items.map((items) => (
                  <li key={items.id} className='cursor-pointer hover:underline duration-500 Inter-medium text-[15px] list-none'>
                    
                       
                          {items.linkItem}
                        
                    </li>
                ))
              }
              </div>
            </div>

            <div className=' '>
              <h1 className='text-3xl Inter-medium '>Social</h1>
              <div className=' space-y-2 py-5 '>
                {
                ServicesData.items.map((items) => (
                  <li key={items.id} className='cursor-pointer hover:underline duration-500 Inter-medium text-[15px] list-none'>
                    
                       
                          {items.linkItem}
                        
                    </li>
                ))
              }
              </div>
            </div>
           
          </div>
      {/* LAST */}

      <div className=' py-2 flex justify-center items-center Inter-bold'>
          <h1 className='text-center whitespace-normal leading-tight lg:text-[12rem] text-[6rem] bg-gradient-to-r from-gray-300 via-[#F8F8FF] to-neutral-200 inline-block text-transparent bg-clip-text'>PRIME DECK</h1>
      </div>
        </div>
    </div>
  )
}

export default Footer