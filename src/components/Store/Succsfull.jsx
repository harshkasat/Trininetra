import React from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Succsfull() {
  const nav = useNavigate();
  setTimeout(() => {
    // Redirect to the home page
    nav('/home')
  }, 4000);
  return (
    <motion.div 
    initial={{ scale: 0 }}
  animate={{ rotate: 0, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 150,
    damping: 50
  }}
   className='bg-green-500 text-zinc-200 px-14 text-[25px] py-4 rounded-lg flex flex-col justify-center mt-64' >Successfully</motion.div>
  )
}

export default Succsfull