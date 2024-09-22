import React from 'react'
import logo from '../component/img/logo1.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='row f'>
      <div className='col-md-1'></div>
      <div className='col-md-11'>
        <nav class="navbar navbar-expand-lg navbar-dark">
          <div class="container-fluid">
            <a class="navbar-brand mx-5" href="/">
              <img src={logo} />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav  ms-auto w-75">
                <li class="nav-item ">
                  <Link class="nav-link  k" aria-current="page" to={'/'}>Home</Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link  k " href="#abu" >About</a>
                </li>
                <li class="nav-item">
                  <Link class="nav-link  k" to={'/contact'} >Contact</Link>
                </li>
              </ul>
              <ul class="navbar-nav ms-auto justify-content-end w-75">
                <li class="nav-item">
                  <a class="nav-link k " href="/login">Query ?</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link k " href="/adlogin">Admin Login</a>
                </li>
              </ul>

            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar