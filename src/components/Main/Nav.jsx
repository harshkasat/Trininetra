import React from 'react'
import logo from '../../assets/logo-main.mp4'
import NavElement from './NavElement'

function Nav() {
 
  return (
    <div className='border-[#f0f0f1] bg-[#eaedeb] shadow-2xl sticky top-0 flex justify-between w-full '>
      <video  autoPlay loop muted className='border-[#f0f0f1] h-[80px]'>
        <source src={logo} type='video/mp4' className='border-[#f0f0f1] h-[60px]'/>
      </video>
      <div className='flex flex-row items-center gap-5 me-5'>
        <NavElement />
      </div>
    </div>
  )
}

export default Nav