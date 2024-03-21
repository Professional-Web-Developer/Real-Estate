import React, { useState } from 'react'
import classes from '../signUp/signup.module.css'
import {AiOutlineFileImage} from 'react-icons/ai'
import {useNavigate,Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {v4 as randomUUID} from 'uuid'
import {request} from '../../util/fetchAPI'

function SignUp() {
  const [state,setstate]=useState({})
  const [photo,setphoto]=useState("")
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const handlePhotoChange = (e) => {
    const selectedFile = e.target.files[0];
    setphoto(selectedFile);
  };
  const handlesubmit=async(e)=>{
    e.preventDefault()
    try{

      let filename=null;
      if(photo){
        const formData=new FormData()
        filename=randomUUID()+photo.name;
        formData.append("filename",filename)
        formData.append('image',photo)
        await request('/upload/image',"POST",{},formData)
        console.log(filename)
      }
      else{
        return
      }
      const headers={
        'Content-Type':'application/json'
    
      }
      console.log({...state})
      const data=await request('/auth/register',"POST",headers,{...state,profileimg:filename})
      console.log(data)
      navigate('/')
    }catch(err){
          console.log(err)
    }
  }
  const handleState=(e)=>{
    setstate(prev=>{
      return {...prev,[e.target.name]:e.target.value}
    })
  }
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Sign Up</h2>
        <form onSubmit={handlesubmit}>
          <input type="text" name='username' placeholder='username' onChange={handleState}/>
          <input type="email" name='email' placeholder='email' onChange={handleState}/>
          <label htmlFor="photo">
           Upload Photo <AiOutlineFileImage/>
          </label>
          <input
           id="photo"
          type='file'
          style={{ display: 'none' }}
          onChange={(e) => handlePhotoChange(e)}
          />





        
          {/* <label htmlFor="photo ">Upload Photo <AiOutlineFileImage/></label> */}
          {/* <input id="photo" type='file' style={{display:'none'}} onChange={(e)=>setphoto(e.target.value[0])}/> */}
          <input type="password" name='password' placeholder='Password' onChange={handleState}/>
          <button>Register</button>
          <p>Already have an account? <Link to='/signin'>Sign in</Link></p>
        </form>
      </div>
    </div>
  )
}

export default SignUp