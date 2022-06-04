import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { FiHeart, FiSearch } from 'react-icons/fi'

import { openSidebar, closeSidebar } from '../redux/features/sidebarSlice'
import '../styles/menu.css'

const Menu = () => {
  const dispatch = useDispatch()
  const { isOpen } = useSelector(state => state.sidebar)

  const toggleSidebar = () => {
    if(isOpen) {
      dispatch(closeSidebar())
    } else {
      dispatch(openSidebar())
    }
  }

  return (
    <>
    <div className={isOpen ? 'menu__button open' : 'menu__button'} onClick={toggleSidebar}>
      <div className="button__line"></div>
      <div className="button__line"></div>
      <div className="button__line"></div>
    </div>
    <aside className={isOpen ? 'menu open' : 'menu'} onClick={() => dispatch(closeSidebar())}>
      <div className="menu__nav">
        <h1>
          <Link to='/'>
            Dev<span>Hire</span>
          </Link>
        </h1>

        <ul className="nav__list">
          <li>
            <NavLink to='/' onClick={() => dispatch(closeSidebar())} className={({ isActive}) => isActive ? 'nav__link active' : 'nav__link'}>
              <FiSearch className='nav__icon' />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/favorites' onClick={() => dispatch(closeSidebar())} className={({ isActive}) => isActive ? 'nav__link active' : 'nav__link'}>
              <FiHeart className='nav__icon' />
              Favorites
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
    </>
  )
}

export default Menu