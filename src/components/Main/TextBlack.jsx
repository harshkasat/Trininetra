import React from 'react'
import { motion } from 'framer-motion';

function TextBlack({tx}) {

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return (
    <motion.span 
    variants={item}
    className='item text-5xl font-semibold tracking-wide text-center'>{tx} </motion.span>
  )
}

export default TextBlack