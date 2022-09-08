import React, {useState} from 'react'
import Button from './Button'
import {menuItems} from '../../MenuItem'
import {NavLink} from 'react-router-dom'


function NavBar() {
  const [active, setActive] = useState(false)
  return (
    <nav className='navbar'>
      <h1 className='navbar-logo'>
        React <i className='fab fa-react'></i>
      </h1>
      <div className='menu-icon' onClick={()=>setActive(!active)}>
        <i className={active?'fa fa-times':'fa fa-bars'}></i>
      </div>
      <ul className={active?'nav-menu active':'nav-menu'}>
        {menuItems.map((item, i)=>{
          return <li key={item.title}>
            <NavLink to={item.url} className={item.cName} onClick={()=>setActive(false)}>
              {item.title}
            </NavLink>
          </li>
        })}
      </ul>
      <Button>Sign Up</Button>
    </nav>
  )
}

export default NavBar