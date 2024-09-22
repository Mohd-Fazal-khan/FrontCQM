import React from 'react'
import logo from '../component/img/logo1.png'
import { Link } from 'react-router-dom'

const Addnav = () => {
  return (
    <div className='row ab p-0'>
    <div className='col-md-1'></div>
    <div className='col-md-10'>
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid p-0">
          <a class="navbar-brand " href="/">
            <img src={logo} />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav justify-content-end ms-auto p-0">
              <li class="nav-item ">
                <Link class="nav-link active " to={'/adlogin'} > <i class=" fas fa-light fa-right-from-bracket"></i></Link>
              </li>

            </ul>

          </div>
        </div>
      </nav>
    </div>
  </div>
  )
}

export default Addnav