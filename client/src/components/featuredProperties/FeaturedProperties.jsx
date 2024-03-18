import React, { useEffect } from 'react'
import { useState } from 'react'
import classes from './featuredProperties.module.css'
import { request } from '../../util/fetchAPI'
import {Link} from 'react-router-dom'
import img from '../../assets/estate3.jpg'
import person from '../../assets/person.jpg'
import {FaBed,FaSquareFull}  from 'react-icons/fa'

function FeaturedProperties() {
  const[featuredProperties,setfeaturedproperties]=useState([])
  useEffect( () =>{
    const fetchFeatured=async()=>{
      try{
        const data=await request('/property/find/featured','GET')
        setfeaturedproperties(data)
      }
      catch(err)
      {
          console.log(err);
      }
    }
    fetchFeatured()
  },[])
  console.log(featuredProperties)
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h5>Properties you  may like</h5>
          <h2>Our Featured Properties</h2>
        </div>
        <div className={classes.featuredProperties}>
          {featuredProperties?.map((property)=>(
            <div key={property._id} className={classes.featuredproperty}>
                <Link to={`/propertyDetail/${property._id}`} className={classes.imgcontainer}>
                  <img src={img} alt=''/>
                </Link>
                <div className={classes.details}>
                  <div className={classes.priceAndowner}>
                    <span className={classes.price}>${property.price}</span>
                    <img src={person} alt="" className={classes.owner}/>
                  </div>
                  <div className={classes.moredetails}>
                    <span>{property?.beds} Beds<FaBed className={classes.icon}/></span>
                    <span>{property?.sqrmeters} sqrmeters<FaSquareFull className={classes.icon}/></span>
                  </div>
                  <div className={classes.desc}>
                    {property.desc}
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedProperties