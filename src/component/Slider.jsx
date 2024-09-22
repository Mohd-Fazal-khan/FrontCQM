import React from 'react';
import s1 from './img/s1.jpg';
import s2 from './img/s2.jpg';
import s3 from './img/s3.jpg';
import s4 from './img/s4.jpg';
import s5 from './img/s5.jpg';

const Slider = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row p-2 text-light f">
        <div className="col-md-1 d-none d-md-block"></div>
        <div className="col-md-4 col-sm-6 col-xs-12 fk">
          <h1 className="fw-bold custom-heading">Saving <br />millions of <br /> <span className="liv">lives</span> globally</h1>
          <p className="mt-4 fw-bold custom-para">KARAM is a leading global PPE & Fall Protection solutions brand.</p>
          <button type="button" className="btn b">Learn More</button>
          <br />
          <button type="button" className="btn btn-lg  x mt-4">Karam Online Product</button>
          <button type="button" className="btn btn-lg xt mt-4">News And Events</button>
        </div>
        <div className="col-md-6 col-sm-6 col-xs-12">
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={s1} className="d-block w-100" alt="..." />
                <div className="s w-50 pe-3 position-absolute">More details on News and Events</div>
              </div>
              <div className="carousel-item">
                <img src={s2} className="d-block w-100" alt="..." />
                <div className="s w-50 pe-3 position-absolute">More details on News and Events</div>
              </div>
              <div className="carousel-item">
                <img src={s3} className="d-block w-100" alt="..." />
                <div className="s w-60 pe-3 position-absolute">KARAM launches new portable single gas detectors</div>
              </div>
              <div className="carousel-item">
                <img src={s5} className="d-block w-100" alt="..." />
                <div className="s w-60 pe-3 position-absolute">KARAM bags the "Platinum Category" at IMEA again!</div>
              </div>
              <div className="carousel-item">
                <img src={s4} className="d-block w-100" alt="..." />
                <div className="s w-60 pe-3 position-absolute">Intersec 2024, Dubai</div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-md-1 my-auto d-none d-md-block">
          <a href="https://www.facebook.com/KARAMsafetyproducts/"><p className="fa-brands fs-4 fa-facebook border p-3 rounded-circle ik "></p> </a>
          <a href="https://x.com/karam_india?mx=2"><p className="fa-brands fs-4 fa-twitter border p-3 rounded-circle ik"></p></a>
          <a href="https://www.youtube.com/channel/UCaqIglxwt9USY0j-7bZomjQ"><p className="fa-brands fs-4 fa-youtube border p-3 rounded-circle ik"></p></a>
          <a href="https://www.instagram.com/karam_safety/"><p className="fa-brands fs-4 fa-instagram border p-3 rounded-circle ik"></p></a>
        </div>
      </div>
    </div>
  );
};

export default Slider;