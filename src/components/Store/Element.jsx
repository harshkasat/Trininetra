// import { isVisible } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'
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
  
    
    const [Visible , setVisible] = useState(false);
    const show = (event) => {
        setVisible(true);
    }
    const hide = () => {
        setVisible(false);
    }
    
  return (
    <div className='h-72 flex flex-col items-center'>
    <motion.span 
    key={props.pd} variants={item}
    onMouseEnter={show} onMouseLeave={hide} onClick={props.click} name={props.name} className={`item drop-shadow-lg hover:z-30 bg-custom ${props.check ? 'bg-blue-500' : 'bg-red-500'} px-10 py-3 rounded-md`}>
      <img src={logo} className='mx-auto my-0 drop-shadow-md rounded-lg' alt='img' width={140}/>
        <p className='w-72'>Name : {props.pd}</p>
        <p>Prize : {props.pr}</p>
        <details className='list-none w-72' open={Visible}> <summary className='list-none'></summary>{props.dis}</details>
    </motion.span>
    </div>
  )
}

export default Elementes
// onMouseEnter={() => details.open = true} onMouseLeave={() => details.open = false}