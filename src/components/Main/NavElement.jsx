import React from 'react'


import { Link } from 'react-router-dom'
 

function NavElement(){


    // const { basename } = useContext();
  return (
    <>
      <Link to='/home'>Home</Link>
      <Link to='/donate'>Donate</Link>
      <Link to='#'>Team</Link>
    </>
  )
}

export default NavElement