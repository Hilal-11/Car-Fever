import { 
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiBootstrap,
  SiRedux,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiMysql,
} from "react-icons/si";
function Rotate() {
  return (
    <div className='flex justify-center items-center py-4'>
        <div className='rotate-animation relative w-[340px] lg:w-[380px] h-[340px] lg:h-[380px] rounded-full border-[40px] border-[#456FE8] flex items-center justify-center'> 
            <span className='text-2xl absolute -top-14 bg-zinc-800 text-gray-300 p-2 rounded-full z-50'><SiReact /></span>
            <span className='text-2xl absolute -left-14 bg-zinc-800 text-gray-300 p-2 rounded-full z-50'><SiNextdotjs /></span>
            <span className='text-2xl absolute -right-14 bg-zinc-800 text-gray-300 p-2 rounded-full z-50'><SiTailwindcss /></span>
            <span className='text-2xl absolute -bottom-14 bg-zinc-800 text-gray-300 p-2 rounded-full z-50'><SiRedux /></span>
        
        <div className='rotate-animation2 relative w-[220px] h-[220px] rounded-full border-[40px] border-[#456FE8] flex items-center justify-center'> 
            <span className='text-2xl absolute -top-15 bg-zinc-800 text-gray-300 p-2 rounded-full'><SiMysql /></span>
            <span className='text-2xl absolute -left-15 bg-zinc-800 text-gray-300 p-2 rounded-full'><SiTypescript /></span>
            <span className='text-2xl absolute -right-15 bg-zinc-800 text-gray-300 p-2 rounded-full'><SiFirebase /></span>
            <span className='text-2xl absolute -bottom-15 bg-zinc-800 text-gray-300 p-2 rounded-full'><SiSass /></span>

           
        <div className='rotate-animation3 relative w-[100px] h-[100px] rounded-full flex items-center justify-center'> 
      
            <span className='text-xl absolute -top-8  bg-zinc-800 text-gray-300 p-2 rounded-full'><SiNodedotjs /></span>
            <span className='text-xl absolute -left-6 top-18 bg-zinc-800 text-gray-300 p-2 rounded-full'><  SiExpress /></span>
            <span className='text-xl absolute -right-6  -bottom-2 bg-zinc-800 text-gray-300 p-2 rounded-full'><SiMongodb /></span>

        </div>
        </div>
        </div>
    </div>
  )
}

export default Rotate