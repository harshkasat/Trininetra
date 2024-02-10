import React from 'react'
import RightHeadText from './RightHeadGreen';
import TextBlack from './TextBlack';
import { motion } from 'framer-motion'

let i = 0;
function Text() {

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
    const str = "Uniting communities, through transparent funding for social good"
    const arrStr = str.split(' ')
    const rend = arrStr.map(val => {
        if(i % 2 === 0) {
        i++
        return <RightHeadText key={i} tx={val}/>
        } else {
        i++
        return <TextBlack key={i} tx={val}/>
        }
    })
  return (
    <motion.div
    variants={container}
    initial="hidden"
    animate="visible"
    className='container'>{rend}</motion.div>
  )
}

export default Text
