import { motion } from 'motion/react'
import { carlistingData } from '@/config/CarlistingConfig'
function Carlisting() {
  return (
    <div className='w-full py-10 container mx-auto'>
        <div className="mt-8  text-center z-50 lg:w-2/3 md:w-2/3 mx-auto ">
          <h1 className="px-4 z-50 text-3xl md:text-4xl lg:text-[3.7rem] Inter-bold heading-lg">A curated collection of cars for every need.</h1>
          <p className="px-6 py-4 lg:w-2/3 mx-auto Inter-medium lg:py-0 text-md z-50">Browse through our wide range of vehicles, carefully selected to offer the perfect blend of style, performance, and reliability for every driver.</p>
        </div>

        <div className="mt-12 px-5 columns-1 sm:columns-2 lg:columns-3 gap-4">
  {carlistingData.map((carItem, index) => (
    <motion.div
      key={index}
      className="mb-4 break-inside-avoid bg-zinc-100 dark:bg-neutral-900 rounded-xl shadow-lg overflow-hidden
                 hover:shadow-2xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 100, scale: 0.9, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
    >
      <div className="py-4 px-2">
        <img
          className="w-full rounded-t-lg object-contain"
          src={carItem.carImage}
          alt={carItem.carName}
        />
      </div>
      <div>
        <div className="flex justify-between items-center px-4">
          <div className="flex gap-3">
            <div>
              <img
                className="w-[40px]"
                src="https://framerusercontent.com/images/1Foft6i4VQZRXfUB7Q9wB1LPsGE.png"
                alt=""
              />
            </div>
            <div className="-space-y-3">
              <h1 className="text-xl font-bold">{carItem.brand}</h1>
              <p className="px-1 text-md text-neutral-700 dark:text-neutral-400">{carItem.carName}</p>
            </div>
          </div>
          <div>
            <span className="text-xs py-1 px-6 font-medium rounded-full bg-blue-100 dark:bg-blue-900">
              2 seats
            </span>
          </div>
        </div>

        <div className="px-6 py-6 flex justify-between items-center">
          <h1 className="text-xl font-bold text-neutral-700 dark:text-neutral-200">
            $49 <span className="text-[10px] text-neutral-400">/day</span>
          </h1>
          <button className="px-6 py-2 rounded-full shadow-md text-sm bg-white dark:bg-gray-800">
            Read more
          </button>
        </div>
      </div>
    </motion.div>
  ))}
</div>

    </div>
  )
}

export default Carlisting
