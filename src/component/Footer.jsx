import React from 'react';
import logo1 from '../component/img/logo1.png';
import s25 from '../component/img/25.png';

const Footer = () => {
  return (
    <>
      <div className='container-fluid text-light p-0'>
        <div className='row fbg'>
          <div className='col-md-1 col-sm-1'></div>
          <div className='col-md-2 col-sm-4 col-xs-12'>
            <img className='mt-5' src={logo1}></img>
            <h4 className='hb mt-3'>Corporate Office</h4>
            <p><i className="fas fa-location-dot tb"></i> D-95, Sector 2, Noida, Uttar Pradesh - 201301</p>
            <p><i className=" fas fa-regular fa-envelope tb"></i> karam@karam.in</p>
            <p><i className=" fas fa-thin fa-mobile tb"></i> 1800-103-7085</p>
            <p><i className=" fas fa-light fa-phone tb"> +91 120 4734400</i></p>
          </div>
          <div className='col-md-2 col-sm-4 col-xs-12 mt-5 pt-5 ms-auto'>
            <p>Press Coverage</p>
            <p>FAQs</p>
            <p>Blogs</p>
            <p>NewsLetter</p>
            <p>News & Events</p>
          </div>
          <div className='col-md-2 col-sm-4 col-xs-12 mt-5 ms-auto'>
            <p>Corporate Affairs</p>
            <p>Product Warranty & Disclaimer</p>
            <p>EU Certification</p>
            <p>Karam Loyalty Reward Program</p>
            <p>IMS Policy</p>
            <p>Quality Policy</p>
          </div>
          <div className='col-md-2 col-sm-4 col-xs-12 mt-5'>
            <img src={s25} alt="" />
          </div>
          <div className='col-md-1 col-sm-1 pr-0'></div>
        </div>

        <div className='row bg-dark text-center'>
          <div className='col-md-12'>
            <p>© Copyright 2024, All rights reserved by KARAM Safety Pvt. Ltd.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer