import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className='navbar-Navbar'> 
        <Link to={"/About"}className='link-nav1'>
        Почему у нас
        </Link >
        <Link to={"/"}className='link-nav'>
        Меню бургеров
        </Link>

        <Link to={"/Order"}className='link-nav'>
        Оформление заказ
        </Link>
        </nav>
    </>
  )
}

export default Navbar
