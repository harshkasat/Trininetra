import React from 'react'
import { Link } from 'react-router-dom'

function Btn() {
  return (
    <div className='flex sm:flex-row flex-col gap-5 justify-center items-center text-xl'>
        
        <Link to="/signup" className='bg-blue-500 w-60 py-2 rounded text-center  hover:bg-blue-700 text-slate-100 hover:font-normal'>Reigester</Link>
         
        <Link to="#" className='bg-[#eff1ef] border-green-600 border-[2px] rounded hover:bg-green-600 hover:text-slate-100 font-medium hover:font-normal text-green-600 w-60 py-2 text-center'>Donate</Link>
      
    </div>
  )
}

export default Btn