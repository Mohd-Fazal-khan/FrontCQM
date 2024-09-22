import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Sidenav from '../component/Sidenav';
import Usernav from '../component/Usernav';
import { baseUrl } from '../Urls';

const EditPendingQuery = () => {
   
  const {id,qid}=useParams();
  const [department,setDepartment]=useState("");
  const [subject,setSubject]=useState("");
  const [description,setDescription]=useState("");
  const [uid,setUid]=useState("")
  const navigate = useNavigate();

  const getqur= async ()=>{
    // const response = await fetch(`http://localhost:8000/getquery/${qid}`);
    const response = await fetch(`${baseUrl}/getquery/${qid}`);
    const data = await response.json();
    if(response.ok){
        setDepartment(data.department);
        setSubject(data.subject);
        setDescription(data.description);   
        setUid(data.uid);
        
    }
}

const editquery= async (e)=>{
  e.preventDefault();
  const qur ={department,subject,description};
  // const response = await fetch(`http://localhost:8000/editpendingquery/${id}/${qid}`,{
  const response = await fetch(`${baseUrl}/editpendingquery/${id}/${qid}`,{
      method: 'PATCH',
      headers:{
          'Content-Type': 'application/json',
          },
      body:JSON.stringify(qur)
  });
  const result =await response.json();
  if(result.msg==="Success"){
      alert("Query Edit");
      navigate(`/ViewPenQuery/${uid}`);
  }
  else{
      alert(result.msg);
  }
}


useEffect(()=>{
  getqur();
},[])
  





   
   

  


  return (
  //   <>
  //   <div className='row vh-7'>
  //       <div className='col-sm-12 py-5 bg-dark'></div>
  //   </div>
  //   <div className='row vh-93'>
  //       <div className='col-2 py-5 h-100 scroll bg-danger'>
  //           <Sidenav></Sidenav>
  //       </div>
  //       <div className='col-10 py-5 h-100 scroll bg-success'>
  //           <div className='row h-100'>
  //             <div className='col-md-6 mx-auto'>
  //               <form  onSubmit={editquery} className='mt-5 p-5 bg-light rounded-5'>
  //                 <h4 className='text-center mb-4'>Edit Query</h4>
  //                 Select Department
  //                 <input type="text" value={department} className="form-control" />
  //                 Enter Your Subject
  //                 <input type="text" value={subject} onChange={(e)=>{ setSubject(e.target.value)} } className="form-control" placeholder="Enter Your Subject" />
  //                 Describe in Details
  //                 <textarea value={description}  onChange={(e)=>{ setDescription(e.target.value)} } className="form-control" placeholder="Describe in Details"></textarea><br></br>
  //                 <input type='submit' value={"Edit Query"}  className='form-control btn btn-primary'></input>
  //               </form>
  //             </div>
                
  //           </div>
  //       </div>
  //   </div>
  //  </>

  <>
      <Usernav></Usernav>
      <div className='row vh-93'>
        <div className='col-2 py-5 scroll l'>
          <Sidenav></Sidenav>
        </div>
        <div className='col-10 py-5 scroll bg-dark jk'>
          <div className='row '>
            <div className='col-md-6 mt-5 mx-auto transparent-bg p-4'>
              <form onSubmit={editquery} className='fb' >
                <h4 className='text-center mb-4'>Edit Query</h4>
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
                <input type='submit' value={"Edit Query"} className='form-control btn btn-primary'></input>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditPendingQuery