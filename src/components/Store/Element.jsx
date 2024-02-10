// import { isVisible } from '@testing-library/user-event/dist/utils'
import React from 'react'
import logo from '../../assets/eye.jpg'
import { motion } from 'framer-motion'

function Elementes(props) {

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  
  return (
    <motion.div 
    key={props.pd} variants={item}
    className='h-80 flex flex-col gap-3 shadow-lg'>
    {!props.check ?  (<div
    className='min-h-[58vh] bottom-22 mt-5 ms-7 rounded-md fixed w-80 px-15 -z-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
      
    </div>) : (<div
    className='min-h-[58vh] bottom-22 mt-5 ms-7 rounded-md fixed w-80 px-15 -z-10 bg-gradient-to-r from-green-500 via-green-500 to-green-600'>
      
    </div>)}
    
    <motion.span 
    whileHover={{ scaleX:1.033, scaleY:1.033 }}
    // key={props.pd} variants={item}
    onClick={props.cli} name={props.name} className={`item shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-custom ${!props.check ? 'bg-[#efeeee]' : 'bg-[#D7E4C0]'} px-5 py-3 rounded-md min-h-[58vh]`}>
      <img src={logo} className='mx-auto my-0 drop-shadow-md rounded-lg' alt='img' width={140}/>
        <p className='w-64'><b>
        Name : {props.pd}
        </b>
        </p>
        <p><b>
          Prize :
          </b>
           {props.pr}</p>
        <details className='list-none w-72' open={true}> <summary className='list-none'></summary>
        <b>Details</b>{props.dis}</details>
    </motion.span>
    </motion.div>
  )
}

export default Elementes
// onMouseEnter={() => details.open = true} onMouseLeave={() => details.open = false}