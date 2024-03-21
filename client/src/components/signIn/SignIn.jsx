import React, { useState } from 'react'
import classes from './SignIn.module.css'
import {useDispatch} from 'react-redux'
import {login} from '../../redux/authSlice'
import {Link, useNavigate} from 'react-router-dom'
import { request } from '../../util/fetchAPI'
function SignIn() {
  const [email,setEmail]=useState("")
  const [password, setPassword] = useState('')
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handlelogin=async(e)=>{
    e.preventDefault()

    try{
        const options={
          'Content-Type': "application/json"
        }
        const data=await request('/auth/login',"POST",options,{email,password})
        dispatch(login(data))
        navigate('/')
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Sign In</h2>
        <form onSubmit={handlelogin}>
          <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
          <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
          <button type='Submit'>Sign In</button>
          <p>Don't have an account <Link to='/signup'>Sign Up</Link></p>
        </form>
      </div>
    </div>
  )
}

export default SignIn