import React, { useEffect, useState } from 'react'
import classes from './popularproperties.module.css'
import { Link } from "react-router-dom"
import img1 from "../../assets/realestatebeach.jpg"
import img2 from "../../assets/realestatemountain.jpg"
import img3 from "../../assets/realestatecountryside.jpg"

function PopularProperties() {
  const [numProperties,setNumProperties]=useState({})
  useEffect(()=>{
    const fetchNumberProperties= async()=>{
      try{
        const data=await request
      }catch(err){
        console.log(err.message)
      }
    }
  },[])
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h5>Different Types Of Properties</h5>
          <h2>Best Types of Properties For You</h2>
        </div>
        <div className={classes.properties}>
          <Link to={'/properties?type=beach&continent=1&priceRange=2'}>
            <img src={img1}/>
            <div className={classes.quantity}>34Properties</div>
            <h5>Beach Properties</h5>
          </Link>
          <Link to={'/properties?type=mountain&continent=1&priceRange=2'}>
            <img src={img2}/>
            <div className={classes.quantity}>34Properties</div>
            <h5>Mountain Properties</h5>
          </Link>
          <Link to={'/properties?type=village&continent=1&priceRange=2'}>
            <img src={img3}/>
            <div className={classes.quantity}>34Properties</div>
            <h5>Village Properties</h5>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PopularProperties