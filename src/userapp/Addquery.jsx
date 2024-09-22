import React from 'react'
import Sidenav from '../component/Sidenav'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react';
import Usernav from '../component/Usernav';
import { baseUrl } from '../Urls';

const Addquery = () => {
  
  const navigate=useNavigate();
  const { id } = useParams();
  const [department, setDepartment] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  console.log(department);

  const addquery = async (e) => {
    e.preventDefault();
    const status = "pen";
    const query = { "uid": id, "department": department, "subject": subject, "description": description, "status": status };
    // const response = await fetch('http://localhost:8000/addquery',
    const response = await fetch(`${baseUrl}/addquery`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(query)
    });
    const data = await response.json();
    if (data.msg === "Query Added") {
      alert("Query Added");
      navigate(`/viewpenquery/${id}`)
    }
    else {
      alert("Error");
    }

  }



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
              <form onSubmit={addquery} className='fb' >
                <h4 className='text-center mb-4'>Add Query</h4>
                Select Department
                <select className="form-control" value={department} onChange={(e) => setDepartment(e.target.value)}>
                  <option value="1">Select Department</option>
                  <option value={"IT"}>IT</option>
                  <option value={"Account"}>Account</option>
                  <option value={"Management"}>Management</option>
                  <option value={"Sales"}>Sales</option>
                  <option value={"Staff"}>Staff</option>
                </select>

                Enter Your Subject
                <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} className="form-control" placeholder="Enter Your Subject" />
                Describe in Details
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" placeholder="Describe in Details"></textarea><br></br>
                <input type='submit' value={"Add Query"} className='form-control btn btn-primary'></input>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Addquery