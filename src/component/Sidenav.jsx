import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Sidenav = () => {
    const {id}=useParams("")
  return (
    <div className='row'>
        <div className='col-sm-12 text-light pt-4 '>
            <Link className='nav-link my-3 ps-3' to={`/userdash/${id}`}> <i className='fa fa-book'></i> Dashboard</Link>
            <Link className='nav-link my-3 ps-3' to={`/addquery/${id}`}> <i className='fa fa-question'></i> Add Query</Link>
            <Link className='nav-link my-3 ps-3' to={`/viewpenquery/${id}`}> <i className='fa fa-eye'></i> View Pending Query</Link>
            <Link className='nav-link my-3 ps-3' to={`/viewprocessingquery/${id}`}> <i className='fa fa-eye'></i> View Processing Query</Link>
            <Link className='nav-link my-3 ps-3' to={`/viewcompletegquery/${id}`}> <i className='fa fa-eye'></i> View Complete Query</Link>
        </div>
    </div>
  )
}

export default Sidenav