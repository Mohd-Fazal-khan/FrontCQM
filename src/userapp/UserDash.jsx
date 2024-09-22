import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import Sidenav from '../component/Sidenav';
import Usernav from '../component/Usernav';
import { baseUrl } from '../Urls';

const UserDash = () => {
    const {id}=useParams();
    const [firstname,setFirstname]=useState("");
    const [lastname,setLastname]=useState("");
    const [email,setEmail]=useState("");
    const getUser=async()=>{
        // const response=await fetch(`http://localhost:8000/${id}`)
        const response=await fetch(`${baseUrl}/${id}`)
        if(response.ok){
            const data =await response.json()
            // console.log(data);
            setFirstname(data.firstname);
            setLastname(data.lastname);
            setEmail(data.email);
           ;
            

        }
    }
    useEffect(()=>{
        getUser()
    },[])
  return (
  

   <>
   <Usernav></Usernav>
    <div className='row vh-93'>
        <div className='col-2 py-5 scroll l'>
            <Sidenav></Sidenav>
        </div>
        <div className='col-10 py-5 scroll bg-dark jk'>
            <div className='row '>
                <div className='col-md-6 mt-5 mx-auto transparent-bg p-4'>
                    <h5 className='text-center text-light'>User Dashboard</h5>
                    <div className='row  text-light'>
                        <div className='col-md-6'>Firstname:</div>
                        <div className='col-md-6'>{firstname}</div>
                    </div>
                    <div className='row text-light'>
                        <div className='col-md-6'>Lastname:</div>
                        <div className='col-md-6'>{lastname}</div>
                    </div>
                    <div className='row text-light'>
                        <div className='col-md-6'>Email:</div>
                        <div className='col-md-6'>{email}</div>
                    </div>
                    <div className='row my-3'>
                        <div className='col-md-6 mx-auto text-center'>
                            <Link to={`/editdash/${id}`} className='btn btn-warning'>Edit</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default UserDash