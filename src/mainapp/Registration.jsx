import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { baseUrl } from '../Urls';

const Registration = () => {
    const navigate = useNavigate();
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const regcode = async (e) => {
        e.preventDefault();
        const user = { firstname, lastname, email, password };
        // const response = await fetch('http://localhost:8000/',
        const response = await fetch(`${baseUrl}/`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        });
        const result = await response.json();
        if (result.msg === "Success") {
            alert("Registration Success");
            setFirstname("");
            setLastname("");
            setEmail("");
            setPassword("");
            navigate('/login')
        }
        else {
            alert("Registration Failed")
        }
    }

    return (
        // <>

        //     <div className='row'>

        //         <div className='col-md-6 mx-auto p-5 shadow-lg my-5 rounded-5'>
        //             <h4><span className='text-danger text-decoration-underline'>Registration</span> Form </h4>
        //             <br />
        //             <form onSubmit={regcode}>
        //                 Enter Your First Name :
        //                 <input className='form-control' value={firstname} onChange={(e) => { setFirstname(e.target.value) }} type="text" name="firstName" />
        //                 <br />

        //                 Enter Your Last Name :
        //                 <input className='form-control' value={lastname} onChange={(e) => { setLastname(e.target.value) }} type="text" name="lastName" />
        //                 <br />
        //                 Enter Your Email :
        //                 <input className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" />
        //                 <br />
        //                 Enter Your Password :
        //                 <input className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" />
        //                 <br />
        //                 <button className='form-control btn btn-primary' type="submit">Submit</button>

        //                 <Link to={'/login'} className='mb-3'>Already account</Link>
        //             </form>
        //         </div>
        //     </div>
        //     <Footer></Footer>
        // </>

        <div className='row vh-100 ug '>
            <div className='col-md-4 mx-auto p-5 my-auto ud '>
            <button
                        className='btn btn-transparent btn-lg'
                        onClick={() => navigate(-1)}
                        style={{ position: 'absolute', top: 10, left: 10, color:"white" }}
                    >
                        <i className='fas fa-arrow-left'></i>
                    </button>
                <h4 className='text-light text-center'> Sign Up </h4>
                <br />
                <form onSubmit={regcode} className='text-light' >
                    Enter Your First Name :
                    <input className='form-control' value={firstname} onChange={(e) => { setFirstname(e.target.value) }} type="text" name="firstName" />
                    <br />

                    Enter Your Last Name :
                    <input className='form-control' value={lastname} onChange={(e) => { setLastname(e.target.value) }} type="text" name="lastName" />
                    <br />
                    Enter Your Email :
                    <input className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" />
                    <br />
                    Enter Your Password :
                    <input className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" />
                    <br />
                    <button className='form-control btn btn-primary' type="submit">Submit</button>
                    <Link to={'/login'} className='mb-3'>Already account</Link>
                </form>
            </div>
        </div>

    )
}

export default Registration