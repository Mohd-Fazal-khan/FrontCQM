import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Slider from '../component/Slider';
import a1 from '../component/img/a1.jpg';
import sale from '../component/img/sale.png';
import training from '../component/img/training.jpg';
import demo from '../component/img/demo.jpg';
import map from '../component/img/map.jpg';
import volunteer from '../component/img/volunteer.jpg';
import Koshika from '../component/img/Koshika.jpg';
import water from '../component/img/Water.jpg';

const About = () => {
  return (
    <>
    <Navbar />
    <Slider />
    <div className="container-fluid p-0">
      <div className="row my-5">
        <div className="col-md-1"></div>
        <div className="row my-5">
          <div className="col-md-5 mx-auto col-sm-12 col-xs-12">
            <img src={a1} className="w-100" />
          </div>
          <div className="col-md-5 mx-auto my-auto col-sm-12 col-xs-12">
            <h1 id='abu'>About Us</h1>
            <p className="pb">
              KARAM is a leading global occupational safety brand with a vast portfolio of over 3500 certified products conforming to multiple national and international standards and export our safety solutions to over 100 nations.
            </p>
            <p className="pb">
              Our team of over 4200 professionals have been relentlessly developing, testing, and evaluating products, earning KARAM a reputation as one of the finest global companies that provide world-class personal protective equipment (PPE), fall protection solutions and fixed-line systems.

              We are also a CRISIL A/Stable/CRISIL A1 rated company which reflects the robust market position of the entire KARAM Group
            </p>
            <button className="btn btn-lg bb">View More</button>
          </div>
        </div>
        <div className="row my-5">
          <h1 className="text-center mb-2">OUR SERVICES</h1>
          <p className="text-center mb-5">From equipment maintenance to workforce training, we're your one-stop safety solution</p>
          <div className="col-md-1 col-sm-1 col-xs-1"></div>
          <div className="row justify-content-center">
            <div className="col-md-3 col-sm-6 col-xs-12 mb-4">
              <div className="card">
                <img src={sale} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Authorised Service Centres</h5>
                  <p className="card-text">KARAM's Authorised Service Centre inspects, repairs and revalidates PPE, harnesses, lanyards, blocks, tripods...</p>
                  <a href="#" className="btn btn-danger">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 mb-4">
              <div className="card">
                <img src={training} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Training & Consultancy</h5>
                  <p className="card-text">KARAM's Training & Consultancy (KTC) institute promotes safety by training a workforce that values lives.KTC is focused...</p>
                  <a href="#" className="btn btn-danger">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 mb-4">
              <div className="card">
                <img src={demo} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Mobile Demo Van</h5>
                  <p className="card-text">KARAM re-introduces its latest state-of-the-art Mobile Demo Van (MDV). The MDV exhibits KARAM's, bridging the......</p>
                  <a href="#" className="btn btn-danger">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1 col-sm-1 col-xs-1"></div>
        </div>
      </div>
      <div className='row p-0'>
      <h1 className="text-center mb-2">Global Presence</h1>
      <p className="text-center mb-5">Expanding our reach: Providing products and services to customers worldwide</p>
      <img className='p-0' src={map} alt="" />
      </div>
      <div class="row text-center text-light p-0 bg-danger">
          <div class="col-md-4 col-12 stat-box pt-5 pb-5">
              <div class="icon">🌍</div>
              <h2>50+</h2>
              <p>Global Offices</p>
          </div>
          <div class="col-md-4 col-12 stat-box pt-5 pb-5">
              <div class="icon">📦</div>
              <h2>3500+</h2>
              <p>Certified Products</p>
          </div>
          <div class="col-md-4 col-12 stat-box pt-5 pb-5">
              <div class="icon">🏭</div>
              <h2>7</h2>
              <p>Manufacturing Units</p>
          </div>
      </div>
      <div class="row text-center text-light p-0 bg-danger">
          <div class="col-md-4 col-12 stat-box pt-5 pb-5">
              <div class="icon">💲</div>
              <h2>100+</h2>
              <p>Million Dollar Revenue</p>
          </div>
          <div class="col-md-4 col-12 stat-box pt-5 pb-5">
              <div class="icon">👥</div>
              <h2>4200+</h2>
              <p>Professionals</p>
          </div>
          <div class="col-md-4 col-12 stat-box pt-5 pb-5">
              <div class="icon">🌐</div>
              <h2>100+</h2>
              <p>Exporting Countries</p>
          </div>
      </div>
      <div className="row my-5">
          <h1 className="text-center mb-2">Environmental Social & Governance</h1>
          <p className="text-center mb-5">Committed to fostering a safer, sustainable future for everyone</p>
          <div className="col-md-1 col-sm-1 col-xs-1"></div>
          <div className="row justify-content-center">
            <div className="col-md-3 col-sm-6 col-xs-12 mb-4">
              <div className="card">
                <img src={volunteer} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">KARAM Volunteers Supporting Education and Development at Udyat Kheda Primary School</h5>
                  <p className="card-text">At KARAM, we believe in giving back to the community. As part of our CSR initiatives our…</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 mb-4">
              <div className="card">
                <img src={Koshika} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">KARAM Volunteers Make a Difference for Children with Retinoblastoma</h5>
                  <p className="card-text">KARAM volunteers, in association with Koshika Foundation, recently facilitated a visit to Dr.…</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 mb-4">
              <div className="card">
                <img src={water} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">KARAM Saves Water with Innovation</h5>
                  <p className="card-text">At KARAM, we believe in responsible resource management. That is why we are excited to share our…</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1 col-sm-1 col-xs-1"></div>
        </div>
    </div>
    <Footer />
  </>
  )
}

export default About