import React from 'react'
import Btn from './Btn';
import { motion } from 'framer-motion';
import Text from './Text';

function Right() {
  

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div
    variants={item} 
    className='item flex flex-col gap-7 justify-center items-center sm:mx-10 mx-5'>
      <div className='mx-2 max-w-screen'>
        <Text />
      </div>
    <div className='mx-2 text-xl'>
     Experience crowdfunding with unparalleled transparency, security, and decentralization on our web3 platform.
    </div>
    <Btn />
    </motion.div>
    
  )
}

export default Right