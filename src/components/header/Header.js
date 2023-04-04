import React from 'react'
import { NavLink } from 'react-router-dom'
import { SHeader } from './Styles'

const Header = () => {
  return (
    <SHeader>
      <NavLink to="/" activeStyle={{color: 'green'}} end> Home </NavLink> | 
      <NavLink to="/login" activeStyle={{color: 'green'}}> Login </NavLink>
    </SHeader>
  )
}

export default Header