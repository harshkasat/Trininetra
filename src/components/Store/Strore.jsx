import React from 'react'
import { motion } from 'framer-motion'

import Elementes from './Element'
import { useNavigate } from 'react-router-dom'

function Strore(props) {  
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

    const nav = useNavigate()
    // const element = props.element
    const obj = props.cost;
    const click = () => {
        // console.log(props.prize)
        if(props.val === 0) {
            alert('Select any one product')
        } else {
            nav('./checkout')
        }
    }
    // console.log(element)
    const rend = obj.map(val => {
        // console.log(val.check)
        return <Elementes check= {val.check} name={val.name} pd={val.product} pr={val.prize} click={() => props.click(val.name)} dis={val.dis}/>
    })
    return (
        <>
        <motion.div 
         variants={container}
         initial="hidden"
         animate="visible"
        className='container  mt-6 flex flex-row gap-10 justify-center'>
        {rend}
        </motion.div>
        <div className='flex justify-center my-8'>
        <button onClick={click} className='bg-[#D7E4C0] fixed top-[78vh] px-5 py-2 rounded-lg'>Checkout</button>
        </div>
        </>

    )
}

export default Strore