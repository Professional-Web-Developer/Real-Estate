import React, { useState } from 'react'
import classes from './hero.module.css'
import {AiOutlineSearch} from 'react-icons/ai'
function Hero() {
  const[type,setType]=useState("Beach")
  const[Continent,setcontinent]=useState("0")
  const[priceRange,setpriceRange]=useState("0")
  const handlesearch=()=>{
    
  }
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Let me find your dream place right now</h2>
        <h5>Search the best selection of luxury real estate</h5>
        <div className={classes.options}>
          <select onChange={(e)=>setType(e.target.value)}>
            <option disabled>Select Type</option>
            <option value="Beach">Beach</option>
            <option value="Mountain">Mountain</option>
            <option value="Village">Village</option>
          </select>
          <select onChange={(e)=> setpriceRange(e.target.value)}>
            <option disabled>Select Price Range</option>
            <option value="0">0-1,00,000</option>
            <option value="1">1,00,000-2,00,000</option>
            <option value="2">2,00,000-3,00,000</option>
            <option value="3">3,00,000-4,00,000</option>
            <option value="4">4,00,000-5,00,000</option>
          </select>
          <select onChange={(e)=> setcontinent(e.target.value)}>
            <option disabled>Select Continent</option>
            <option value="0">Asia</option>
            <option value="1">Europe</option>
            <option value="2">Africa</option>
            <option value="3">South America</option>
            <option value="4">North America</option>
            <option value="5">Oceania</option>
          </select>
          <AiOutlineSearch className={classes.searchIcon}/>
        </div>
      </div>
    </div>
  )
}

export default Hero