import React from 'react'
import classes from './footer.module.css'
function Footer() {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>Luxury places for enjoying your Luxury Life.Here you can buy Estates in this whole world.Anyone can buy anywhere in this world. Here you can sell land for High Rate.You can sell your estate frpom anywhere in the world
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone:+918667328882</span>
          <span>Github: <a href="https://github.com/Professional-Web-Developer">Professional Web Developer</a> </span>
          <span>Email:pasupathy.kavinmca@gmail.com</span>
          <span>LinkedIn: <a href="https://www.linkedin.com/in/kavin-pasupathy-839010289/"> Kavin Pasupathy</a> </span>
        </div>

        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent:Asia</span>
          <span>Country:India</span>
          <span>Current Location:Near Kongu Engineering College,Perundurai</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer