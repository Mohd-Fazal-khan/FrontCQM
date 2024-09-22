import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import { Link, useNavigate} from 'react-router-dom';
import { baseUrl } from '../Urls';

const Login = () => {
    const navigate=useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const logcode=async(e)=>{
        e.preventDefault();
        const user={email,password};
        // const response=await fetch('http://localhost:8000/login'
        const response=await fetch(`${baseUrl}/login`,{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(user)
        });
        const data =await response.json();
        console.log(data);
        
        
        if (data.msg==="Login Success") {
            
            alert("Login Success");
            console.log(data.id);
            setEmail("")
            setPassword("");
           
            navigate(`/userdash/${data.id}`)
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
                    <h4 className='text-light text-center'>Sign In</h4>
                    <br />
                    <form onSubmit={logcode} className='text-light' >
                        Enter Your Email :
                        <input className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" />
                        <br />
                        Enter Your Password :
                        <input className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" />
                        <br />
                        <button className='form-control btn btn-primary' type="submit">Submit</button>
                        <p>Don't have an account ? &nbsp; &nbsp;<Link to={'/registration'} className='mb-3'>Create account</Link></p>
                        
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login