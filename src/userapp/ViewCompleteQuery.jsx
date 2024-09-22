import React, { useEffect, useState } from 'react'
import Sidenav from '../component/Sidenav';
import { useParams } from 'react-router-dom';
import Usernav from '../component/Usernav';
import { baseUrl } from '../Urls';

const ViewCompleteQuery = () => {

    const { id } = useParams();
    const [penquery, setPenQuery] = useState([])
    var [count, setCount] = useState(1)

    const getpenquery = async () => {
        // const response = await fetch(`http://localhost:8000/getcompleteingquery/${id}`);
        const response = await fetch(`${baseUrl}/getcompleteingquery/${id}`);
        const data = await response.json();
        if (data.msg === "success") {
            setPenQuery(data.result)
        }
    }
    useEffect(() => {
        getpenquery()
    }, [])

    const raise= async(id)=>{
        const status={status:"pen"};
        // const response = await fetch(`http://localhost:8000/status/${id}`,
        const response = await fetch(`${baseUrl}/status/${id}`,
          {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              },
              body: JSON.stringify(status)
              });
        const data=await response.json();
        if(data.msg==="Success"){
          alert("Query Raise again")
          getpenquery();
        }
        else{
          alert("Error")
        }
      
      }

      const de = async (id)=>{
        // const response = await fetch(`http://localhost:8000/del/${id}`,{
        const response = await fetch(`${baseUrl}/del/${id}`,{
            method: 'DELETE',
        });
        const result = await response.json();
        if(result.msg==="Success"){
            alert("Query Deleted");
            getpenquery();
        }
        else{
            alert(result.msg);
        }
    }

  return (
    // <>
    //         <div className='row vh-7'>
    //             <div className='col-sm-12 py-5 bg-dark'></div>
    //         </div>
    //         <div className='row vh-93'>
    //             <div className='col-2 py-5 h-100 scroll bg-danger'>
    //                 <Sidenav></Sidenav>
    //             </div>
    //             <div className='col-10 py-5 h-100 scroll bg-success'>
    //                 <div className='row h-100'>
    //                     <div className='col-md-6 table-responsibe mx-auto p-2 rounded-2 my-auto shadow-lg bg-light'>
    //                         <table className='table table-light'>
    //                             <thead>
    //                                 <tr>
    //                                     <th>S.no</th>
    //                                     <th>Department</th>
    //                                     <th>Subject</th>
    //                                     <th>Query</th>
                                       
    //                                 </tr>
    //                             </thead>
    //                             <tbody>
    //                                 {penquery?.map((e) => (
    //                                     <tr>
    //                                         <td>{count++}</td>
    //                                         <td>{e.department}</td>
    //                                         <td>{e.subject}</td>
    //                                         <td>{e.description}</td>
                                           
    //                                     </tr>
    //                                 ))}

    //                             </tbody>
    //                         </table>
    //                     </div>

    //                 </div>
    //             </div>
    //         </div>
    //     </>

    <>
    <Usernav></Usernav>
    <div className='row vh-93'>
        <div className='col-2 py-5 scroll l'>
            <Sidenav></Sidenav>
        </div>
        <div className='col-10 py-5 scroll bg-dark jk'>
            <div className='row h-100'>
                <div className='col-md-6 table-responsibe mx-auto p-2 rounded-2 my-auto transparent-bg'>
                    <table className='table fb'>
                        <thead>
                             <tr>
                                 <th>S.no</th>
                                 <th>Department</th>
                                 <th>Subject</th>
                                 <th>Query</th>
                                 <th className='text-center' colSpan={2}>Action</th>
                                
                             </tr>
                        </thead>
                        <tbody>
                            {penquery?.map((e) => (
                                <tr>
                                    <td>{count++}</td>
                                    <td>{e.department}</td>
                                    <td>{e.subject}</td>
                                    <td>{e.description}</td>
                                    <td><button onClick={()=>{raise(e._id);}} className='btn btn-primary'>Raise Again</button></td>
                                    <td><button onClick={()=>{de(e._id);}} className='btn btn-danger'>Delete</button></td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default ViewCompleteQuery