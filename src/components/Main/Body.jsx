import React from 'react'
import Right from './Right'
import Image from './Image'
import { motion } from 'framer-motion';


function Bodys() {

  
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

  return (
    <motion.div
    variants={container}
    initial="hidden"
    animate="visible"
    className="container md:grid md:grid-cols-2 md:justify-items-center flex flex-col-reverse justify-center items-center bg-[#eff1ef] h-[88vh] w-full">
      <Right />
      <Image />
    </motion.div>
  )
}
export default Bodys