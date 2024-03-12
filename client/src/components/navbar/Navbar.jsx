import React from 'react'
import classes from './navbar.module.css'
import {Link} from 'react-router-dom'
import {BsHouseDoor} from 'react-icons/bs';
function Navbar() {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Link to='/' className={classes.left}>
          Real Estate <BsHouseDoor/>
        </Link>
        <ul className={classes.center}>
          <li className={classes.listItem}></li>
          <li className={classes.listItem}></li>
          <li className={classes.listItem}></li>
          <li className={classes.listItem}></li>
        </ul>
        <div className={classes.right}>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/signin'>Sign In</Link>
        </div>

      </div>
    </div>
  )
}

export default Navbar