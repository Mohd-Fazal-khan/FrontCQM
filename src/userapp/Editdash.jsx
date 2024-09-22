import React, { useEffect, useState } from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import { baseUrl } from '../Urls'

const Editdash = () => {

    const { id } = useParams();
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const navigate = useNavigate();

    const getUser = async () => {
        // const response = await fetch(`http://localhost:8000/${id}`
        const response = await fetch(`${baseUrl}/${id}`)
        if (response.ok) {
            const data = await response.json()
            // console.log(data);
            setFirstname(data.firstname);
            setLastname(data.lastname);
            setEmail(data.email);
        }
    }
    useEffect(() => {
        getUser()
    }, [])

    const editcode = async (e) => {
        e.preventDefault();
        const info = { firstname, lastname, email };
        //   const response = await fetch(`http://localhost:8000/editdash/${id}`
        const response = await fetch(`${baseUrl}/editdash/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(info)
        });
        const result = await response.json();
        if (result.msg = "Success") {
            alert("Edited");
            navigate(`/userdash/${id}`);
        }
        else {
            alert(result.msg);
        }
    }
    return (
        //     <>
        //     <Navbar></Navbar>
        //     <div className='row'>

        //         <div className='col-md-6 mx-auto p-5 shadow-lg my-5 rounded-5'>
        //             <h4><span className='text-danger text-decoration-underline'>Edit</span> Dashboard </h4>
        //             <br />
        //             <form onSubmit={editcode}>
        //                 Enter Your First Name :
        //                 <input className='form-control' value={firstname} onChange={(e) => { setFirstname(e.target.value) }} type="text" name="firstName" />
        //                 <br />

        //                 Enter Your Last Name :
        //                 <input className='form-control' value={lastname} onChange={(e) => { setLastname(e.target.value) }} type="text" name="lastName" />
        //                 <br />
        //                 Enter Your Email :
        //                 <input className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" />
        //                 <br />
        //                 <button className='form-control btn btn-primary' type="submit">Submit</button>

        //             </form>
        //         </div>
        //     </div>
        //     <Footer></Footer>
        // </>
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
                    <h4 className='text-light text-center'> Edit Dashboard </h4>
                    <br />
                    <form onSubmit={editcode} className='text-light' >
                        Enter Your First Name :
                        <input className='form-control' value={firstname} onChange={(e) => { setFirstname(e.target.value) }} type="text" name="firstName" />
                        <br />

                        Enter Your Last Name :
                        <input className='form-control' value={lastname} onChange={(e) => { setLastname(e.target.value) }} type="text" name="lastName" />
                        <br />
                        Enter Your Email :
                        <input className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" />
                        <br />
                        <button className='form-control btn btn-primary' type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>


    )
}

export default Editdash