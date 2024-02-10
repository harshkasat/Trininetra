import React from 'react'
import { motion } from 'framer-motion'

function RightHeadText({tx}) {

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
        className='item text-green-700 text-5xl'>{tx} </motion.span>
    )
}

export default RightHeadText
