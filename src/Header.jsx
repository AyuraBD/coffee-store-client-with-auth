import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <div className='text-center flex justify-center gap-4'>
        <Link to='/coffee'>All coffees</Link>
        <Link to='/addCoffee'>Add a coffee</Link>
        <Link to='/signin'>Sign in</Link>
        <Link to='/signup'>Sign up</Link>
        <Link to='/users'>Users</Link>
    </div>
  )
}

export default Header