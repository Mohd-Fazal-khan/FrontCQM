import React from 'react'
import { Link } from 'react-router-dom'

const AddSidenav = () => {
  return (
    <div className='row'>
    <div className='col-sm-12 text-light pt-4'>
        <Link className='nav-link my-3 ps-3' to={`/admindash`}> <i className='fa fa-book'></i> Dashboard</Link>
        <Link className='nav-link my-3 ps-3' to={`/viewalluser`}> <i className='fa fa-user'></i> View All Users</Link>
        <Link className='nav-link my-3 ps-3' to={`/viewallpendingquery`}> <i className='fa fa-eye'></i> View Pending Query</Link>
        <Link className='nav-link my-3 ps-3' to={`/viewallproquery`}> <i className='fa fa-eye'></i> View Processing Query</Link>
        <Link className='nav-link my-3 ps-3' to={`/viewallcomquery`}> <i className='fa fa-eye'></i> View Complete Query</Link>
    </div>
</div>
  )
}

export default AddSidenav