import React from 'react'
import { motion } from 'framer-motion'

function TextBoxs(props) {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return (
    <div className='flex flex-col gap-3'>
    <motion.label
    variants={item} 
    className='item'
    htmlFor={props.id}>{props.plz} : </motion.label>
    <motion.input 
    variants={item} 
    className="item rounded text-center  border-2 bg-transparent border-zinc-600 py-1 focus:border-zinc-900 px-6"
    whileFocus={{ scale:1.3 }}
    id={props.id} 
    type={props.type}
    name={props.name}
    value={props.value}
    onChange={props.handles}
    placeholder={props.plz}
    />
    </div>
  )
}

export default TextBoxs