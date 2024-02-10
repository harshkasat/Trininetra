import React from 'react'

import Elementes from './Element'
import { useNavigate } from 'react-router-dom'

function Strore(props) {  
    const nav = useNavigate()
    // const element = props.element
    const obj = props.cost;
    const click = () => {
        // console.log(props.prize)
        nav('./checkout')
    }
    // console.log(element)
    const rend = obj.map(val => {
        // console.log(val.check)
        return <Elementes check= {val.check} name={val.name} pd={val.product} pr={val.prize} click={() => props.click(val.name)}/>
    })
    return (
        <>
        <div className='flex flex-col sm:flex-row gap-10 sm:h-80 justify-center items-center'>
        {rend}
        </div>
        <div className='flex justify-center my-8'>
        <button onClick={click} >Checkout</button>
        </div>
        </>

    )
}

export default Strore