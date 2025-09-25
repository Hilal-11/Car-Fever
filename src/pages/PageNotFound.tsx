import { useNavigate } from 'react-router-dom'

function PageNotFound() {

  const theme = localStorage.getItem('heroui-theme')
  const navigate = useNavigate()

  return (
    <div className={theme==="dark" ? `bg-neutral-950 text-white w-full h-svh flex justify-center items-center` : `w-full h-svh flex justify-center items-center`}>
       <div>
         <h1 className='lg:text-6xl text-3xl Inter-bold '>Page not found | 404</h1>
        <div className='flex justify-center py-4'>
          <button onClick={() => { navigate('/')}} className={theme === 'dark' ? `cursor-pointer Inter-bold bg-zinc-100 bg-black text-black px-14 py-[9px] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]` : `'cursor-pointer Inter-bold bg-neutral-950 text-white px-14 py-[9px] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]'`}>Go back</button>
        </div>
       </div>
    </div>
  )
}

export default PageNotFound