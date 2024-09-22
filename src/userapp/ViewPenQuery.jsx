import React, { useEffect, useState } from 'react'
import Sidenav from '../component/Sidenav'
import { Link, useParams } from 'react-router-dom'
import Usernav from '../component/Usernav';
import { baseUrl } from '../Urls';

const ViewPenQuery = () => {
    const { id } = useParams();
    const [penquery, setPenQuery] = useState([])
    var [count, setCount] = useState(1)



    const getpenquery = async () => {
        // const response = await fetch(`http://localhost:8000/getpenquery/${id}`);
        const response = await fetch(`${baseUrl}/getpenquery/${id}`);
        const data = await response.json();
        if (data.msg === "success") {
            setPenQuery(data.result)
        }
    }
    useEffect(() => {
        getpenquery()
    }, [])

    return (

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
                                        <th>Action</th>
                                     </tr>
                                </thead>
                                <tbody>
                                    {penquery?.map((e) => (
                                        <tr>
                                            <td>{count++}</td>
                                            <td>{e.department}</td>
                                            <td>{e.subject}</td>
                                            <td>{e.description}</td>
                                            <td><Link to={`/editpendingquery/${id}/${e._id}`} className='btn btn-danger'>Edit</Link></td>
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

export default ViewPenQuery