import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar () {
  const languages = [{
    name: 'Home',
    param: ''
  }, {
    name: 'All Coins',
    param: 'all'
  }, {
    name: 'Exchanges',
    param: 'exchanges'
  }];

  return (
    <ul>
      {languages.map(({ name, param }) => (
        <li key={param}>
          <NavLink activeStyle={{fontWeight: 'bold'}} to={`/${param}`}>
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}