import React from 'react'
import {Link} from 'react-router-dom';

import './NavBar.scss';

const NavBar = ({items}) => {
  const pages = [
    {title: 'Home', url: '/'},
    {title: 'Login', url: '/login'},
    {title: 'Axis', url: '/im'}
  ];

  return (
    pages.map(({url, title}) => <Link className='navbar__link' to={url}>{title}</Link>)
  )
}

export default NavBar
