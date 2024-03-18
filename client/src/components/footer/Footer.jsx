import React from 'react'
import classes from './footer.module.css'
function Footer() {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium incidunt asperiores maiores in libero voluptas unde non quia recusandae distinctio. Ex harum dolorem exercitationem quidem deserunt dignissimos id nobis similique.</p>
        </div>
        <div className={classes.col}></div>
        <div className={classes.col}></div>
      </div>
    </footer>
  )
}

export default Footer