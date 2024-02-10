import React, { useState } from 'react'
import TextBoxs from './TextBox'
// import TextBoxs from './TextBox';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
// import axios from 'axios'

function Order(props) {
  
  const nav = useNavigate();
  const [data, setData] = useState({
    'username' : "",
    'address' : "",
    'number' : ""
  });

  const obj = [
    {
      id : "username",
      type : "text",
      name : "username",
      value: data.userName,
      onchan : handle,
      pls : "User name"
    },
    {
      id : "address",
      type : "text",
      name : "address",
      value: data.address,
      onchan : handle,
      pls : "Address"
    },
    {
      id : "pin",
      type : "pin",
      name : "pin",
      value: data.pin,
      onchan : handle,
      pls : "Pincode"
    },
    {
      id : "phoneNumber",
      type : "number",
      name :"number",
      value: data.number,
      onchan : handle,
      pls : "Phone Number"
    }
  ]
  function handle(event) {  
    const {name, value, type, checked} = event.target
    setData(pre => {
      return {
        ...pre,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }
      const rend = obj.map(val => (
        <>
        <TextBoxs 
        key = {val.id}
        id = {val.id}
        type = {val.type}
        name = {val.name}
        val = {val.value}
        handles = {val.onchan}
        plz = {val.pls}
        />
        <br />
        </>
      ))

      // const url = 'http://localhost:5000/verify'
      const submit = (e) => {
        e.preventDefault()
        console.log(data)
        nav("/checkout/successfully")
      }

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
  // {props.val}
  return (
    <div className='flex justify-center py-5'>
    <form action="" onSubmit={submit} method='POST' className="drop-shadow-2xl flex flex-col items-center bg-[#C6DCBA] py-5 rounded-lg">
      <motion.div 
          variants={container}
          initial="hidden"
          animate="visible"
          className='container px-10'
        >
        {rend}
      </motion.div>
    <br/>
    Your Total cost : {props.val > 0 ? props.val : 0}
    <br />
    <br />
    <button className='bg-red-900 px-5 py-2 rounded-lg'>Submit</button>
    </form> 
    </div>
  )
}

export default Order