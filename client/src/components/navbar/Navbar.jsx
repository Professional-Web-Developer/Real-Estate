import React, { useState } from 'react'
import classes from './navbar.module.css'
import {Link, useNavigate} from 'react-router-dom'
import {BsHouseDoor} from 'react-icons/bs';
import {useDispatch, useSelector} from 'react-redux'
import {logout} from '../../redux/authSlice'
import { AiOutlineClose, AiOutlineFileImage } from 'react-icons/ai';
function Navbar() {
  const [state,setstate]=useState({})
  const[photo,setPhoto]=useState("")
  const handleState=(e)=>{
    setstate(prev=>{
      return {...prev,[e.target.name]:e.target.value}
    })
  }
  const handleClosedForm=()=>{
    setShowForm(false)
    setPhoto(null)
    setstate({})


  }
  const dispatch=useDispatch()
 const Navigate=useNavigate() 
  const [ShowForm,setShowForm]=useState(false)
  const {user}=useSelector((state)=>state.auth)
  const handleListProperty=async(e)=>{
    e.preventDefault()

    let filename=null;
    if (photo){
      const formData=new FormData(
        filename=crypto.randomUUID()
      )
    }
  }
  const handleLogout=()=>{
   dispatch(logout())
   Navigate('/signin') 

  }
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Link to='/' className={classes.left}>
          Real Estate <BsHouseDoor/>
        </Link>
        <ul className={classes.center}>
          <li className={classes.listItem}>Home</li>
          <li className={classes.listItem}>About</li>
          <li className={classes.listItem}>Featured</li>
          <li className={classes.listItem}>Contact</li>
        </ul>
        <div className={classes.right}>
          { !user ?
          <> <Link to='/signup'>Sign Up</Link>
          <Link to='/signin'>Sign In</Link>
          </>
          :<>
          <span>
            Hello {user.username}</span>
            <span onClick={handleLogout} className={classes.logout8tn}>Logout</span>
            <Link onClick={()=>setShowForm(true)} className={classes.list}>List Your Property
            </Link>
            </>
           }
        </div>


      </div>
     {
      ShowForm&&(
        <div onClick={handleClosedForm} className={classes.listpropertyForm}>
          <div className={classes.listpropertywrapper} onClick={((e)=>e.stopPropagation())}>
            <h2>List Property</h2>
           <form onSubmit={handleListProperty}>
           <input type="text" placeholder='Title' name='title' onChange={handleState}/> 
           <input type="text"  placeholder='Type' name='type' onChange={handleState}/>
           <input type="text"  placeholder='Desc' name='desc' onChange={handleState}/>
           <input type="text" placeholder='Continent' name='continent' onChange={handleState}/>


           <input type="number" placeholder='price' name='price' onChange={handleState} />
           <input type="number" placeholder='sq.meters' name='sqmeters' onChange={handleState} />
           <input type="number" name="beds" placeholder='Beds' step={1} min={2}/>
           <div style={{display:'flex',alignItems:'center',gap:"12px",width:"50%"}}>
        <label htmlFor="Photo">Property picture<AiOutlineFileImage/></label>
        <input type="file" id='photo' style={{display:"none"}}
        onChange={(e)=>setPhoto(e.target.files[0])} />
        {photo && <p>{photo.name}</p>}
           </div>
           <button>List Property</button>
           <AiOutlineClose onClick={handleClosedForm} className={classes.removeIcon}/>
            </form> 

          </div>
        </div>
      )
     } 
    </div>
  )
}

export default Navbar