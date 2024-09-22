import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../Urls';

const Adlogin = () => {
  
  const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const adcode=async(e)=>{
    e.preventDefault();
    const ad={email,password};
    // const response=await fetch('http://localhost:8000/adlogin',{
    const response=await fetch(`${baseUrl}/adlogin`,{
        method:'POST',
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(ad)
    });
    const data =await response.json();
    if (data.msg==="Login Success") {
        alert("login Sucess");
        setEmail("");
        setPassword("");
        navigate('/admindash');
    } else {
        alert(data.msg)
    }
}


  return (
  
    <>
            
    <div className='row vh-100 ug '>
        <div className='col-md-4 mx-auto p-5 my-auto ud '>
        <button
                        className='btn btn-transparent btn-lg'
                        onClick={() => navigate(-1)}
                        style={{ position: 'absolute', top: 10, left: 10, color:"white" }}
                    >
                        <i className='fas fa-arrow-left'></i>
                    </button>
            <h4 className='text-light text-center'> Admin Sign In</h4>
            <br />
            <form onSubmit={adcode} className='text-light' >
                Enter Your Email :
                <input className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" />
                <br />
                Enter Your Password :
                <input className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" />
                <br />
                <button className='form-control btn btn-primary' type="submit">Submit</button>
                
            </form>
        </div>
    </div>

</>
  )
}

export default Adlogin