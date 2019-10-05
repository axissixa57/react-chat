import React from 'react'
import { Link } from 'react-router-dom';

import './NavBar.scss';

const NavBar = ({items}) => {
  return (
    <div>
      {items.map(i => <Link className='navbar__link-block'>{i}</Link>)}
    </div>
  )
}

export default NavBar
