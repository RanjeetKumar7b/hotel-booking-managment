import React from 'react'
import { useState,useeffect } from 'react'
import axios from "axios"
function Registerscreen() {
  const [name,setname]=useState('');
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const [confirmpassword,setconfirmpassword]=useState('');
 async function register(){
    if(password==confirmpassword){
    const user={
      name,
      email,
      password,
      confirmpassword
    }
    try {
      const result=await axios.post('/api/users/register',user).data
    } catch (error) {
      console.log(error);
    }
    // console.log(user);
  }else{
    alert('password not matched')
  }
  }
  return (
    <div>   
          <div className="row justify-content-center mt-5">
            <div className="col-md-5 mt-5">
               <div className='bs'>
                  <h1>Register</h1>
                  <input type="text" className="form-control" placeholder="email" value={email} 
                  onChange={(e)=>{setemail(e.target.value)}}/>
                  <input type="text" className="form-control" placeholder="name" value={name} 
                  onChange={(e)=>{setname(e.target.value)}}/>
                  <input type="text" className="form-control" placeholder="password" value={password} 
                  onChange={(e)=>{setpassword(e.target.value)}}/>
                  <input type="text" className="form-control" placeholder="confirm password" value={confirmpassword} 
                  onChange={(e)=>{setconfirmpassword(e.target.value)}}/>
                  <button className='btn btn-primary mt-3' onClick={register}>Register</button>
               </div>

            </div>
          </div>
   </div>
  )
}

export default Registerscreen