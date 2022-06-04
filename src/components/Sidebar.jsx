import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiSearch, FiHeart } from 'react-icons/fi'

import '../styles/sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-header'>
        <h1>
          <Link to='/'>
            Dev<span>Hire</span>
          </Link>
        </h1>
      </div>

      <ul className='sidebar-nav'>
        <li>
          <NavLink to='/' className={({isActive}) => isActive ? 'navlink active' : 'navlink'}>
            <FiSearch className='nav-icon' />
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink to='/favorites' className={({isActive}) => isActive ? 'navlink active' : 'navlink'}>
            <FiHeart className='nav-icon' />
            <p>Favorites</p>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar