// import { isVisible } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'

function Elementes(props) {
    
    const [Visible , setVisible] = useState(false);
    const show = (event) => {
        setVisible(true);
    }
    const hide = () => {
        setVisible(false);
    }
    
  return (
    <div onMouseEnter={show} onMouseLeave={hide} onClick={props.click} name={props.name} className={`bg-custom ${props.check ? 'bg-blue-500' : 'bg-red-500'} px-10 py-3 rounded-md`}>
        <p>Name : {props.pd}</p>
        <p>Prize : {props.pr}</p>
        <details className='list-none' open={Visible}> <summary className='list-none'></summary>ngjfndjnfj</details>
    </div>
  )
}

export default Elementes
// onMouseEnter={() => details.open = true} onMouseLeave={() => details.open = false}