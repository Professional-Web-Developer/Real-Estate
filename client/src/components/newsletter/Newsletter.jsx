import React from 'react'
import {FiSend} from 'react-icons/fi'
import classes from '../newsletter/newsletter.module.css'
function Newsletter() {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h5>Want to get the latest offer</h5>
          <h2>Send us your email we will do the rest</h2>
        </div>
        <div className={classes.inputcontainer}>
          <input type="email" placeholder='Type your Email...' required/>
          <FiSend className={classes.sendIcon}/>
        </div>
      </div>
    </div>
  )
}

export default Newsletter