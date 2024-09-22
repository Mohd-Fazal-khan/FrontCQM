import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import logo from '../component/img/logo1.png'
import complaint from '../component/img/complaint.jpg'
import feedback from '../component/img/feedback.jpg'
import general from '../component/img/general.jpg'
import Footer from './Footer'
import { baseUrl } from '../Urls'

const Contact = () => {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");
  const [feed, setFeed] = useState("");

  const [cfirstname, setCfirstname] = useState("");
  const [clastname, setClastname] = useState("");
  const [cemail, setCemail] = useState("");
  const [cproduct, setCproduct] = useState("");
  const [cfeed, setCfeed] = useState("");

  const [ffirstname, setFfirstname] = useState("");
  const [flastname, setFlastname] = useState("");
  const [femail, setFemail] = useState("");
  // const [cproduct, setCproduct] = useState("");
  const [ffeed, setFfeed] = useState("");

  const gcode = async (e) => {
      e.preventDefault();
      const guser = { firstname, lastname, email, product,feed};
      // const response = await fetch('http://localhost:8000/generalenquery'
      const response = await fetch(`${baseUrl}/generalenquery`, {
          method: 'POST',
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(guser)
      });
      const result = await response.json();
      if (result.msg === "Success") {
          alert("Query Sended");
          setFirstname("");
          setLastname("");
          setEmail("");
          setProduct("");
          setFeed("");
          navigate('/contact')
      }
      else {
          alert("Failed")
      }
  }

  const cmcode = async (e) => {
    e.preventDefault();

    const cuser = { cfirstname, clastname, cemail, cproduct,cfeed};
    // const response = await fetch('http://localhost:8000/complaint',
    const response = await fetch(`${baseUrl}/complaint`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(cuser)
    });
    const result = await response.json();
    if (result.msg === "Success") {
        alert("Complaint Sended");
        setCfirstname("");
        setClastname("");
        setCemail("");
        setCproduct("");
        setCfeed("");
        navigate('/contact')
    }
    else {
        alert("Failed")
    }
}

const fcode = async (e) => {
  e.preventDefault();
  const fuser = { ffirstname, flastname, femail,ffeed};
  // const response = await fetch('http://localhost:8000/feedback',
  const response = await fetch(`${baseUrl}/feedback`, {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(fuser)
  });
  const result = await response.json();
  if (result.msg === "Success") {
      alert("Feedback Sended");
      setFfirstname("");
      setFlastname("");
      setFemail("");
      setFfeed("");
      navigate('/contact')
  }
  else {
      alert("Failed")
  }
}
  return (
    //     <>
    //   <meta charSet="UTF-8" />
    //   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    //   <title>Contact Us</title>
    //   <style
    //     dangerouslySetInnerHTML={{
    //       __html:
    //         '\n        /* General Styling */\n        body {\n            margin: 0;\n            font-family: Arial, sans-serif;\n            background-color: #121212;\n            color: #FFFFFF;\n            line-height: 1.6;\n        }\n\n        h1, h2 {\n            color: #ec3237;\n            text-align: center;\n        }\n\n        p {\n            text-align: center;\n        }\n\n        a {\n            color: #ec3237;\n            text-decoration: none;\n        }\n\n        .container {\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            min-height: 100vh;\n            padding: 20px;\n        }\n\n        .contact-form {\n            background-color: #1E1E1E;\n            padding: 30px;\n            border-radius: 10px;\n            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);\n            width: 100%;\n            max-width: 600px;\n        }\n\n        .contact-form input,\n        .contact-form textarea {\n            width: 100%;\n            padding: 15px;\n            margin: 10px 0;\n            border: none;\n            border-radius: 5px;\n            background-color: #2B2B2B;\n            color: #FFFFFF;\n        }\n\n        .contact-form input[type="submit"] {\n            background-color: #ec3237;\n            color: white;\n            cursor: pointer;\n            transition: background-color 0.3s;\n        }\n\n        .contact-form input[type="submit"]:hover {\n            background-color: #00D88D;\n        }\n\n        .contact-info {\n            text-align: center;\n            margin-top: 20px;\n        }\n\n        .contact-info h2 {\n            margin: 10px 0;\n        }\n\n        /* Responsive Design */\n        @media (max-width: 768px) {\n            .container {\n                padding: 10px;\n            }\n\n            .contact-form {\n                padding: 20px;\n            }\n\n            .contact-form input,\n            .contact-form textarea {\n                font-size: 14px;\n            }\n        }\n\n        @media (max-width: 480px) {\n            .contact-form input,\n            .contact-form textarea {\n                font-size: 12px;\n            }\n        }\n    '
    //     }}
    //   />
    //   <div className="container">
    //     <h1>Contact Us</h1>
    //     <p>
    //       We’d love to hear from you! Please fill out the form below, and we’ll get
    //       in touch as soon as possible.
    //     </p>
    //     <form className="contact-form" action='' method="post">
    //       <input type="text" name="name" placeholder="Your Name" required="" />
    //       <input type="email" name="email" placeholder="Your Email" required="" />
    //       <textarea
    //         name="message"
    //         rows={5}
    //         placeholder="Your Message"
    //         required=""
    //         defaultValue={""}
    //       />
    //       <input onClick={ccode} type="submit" defaultValue="Send Message" />
    //     </form>
    //     <div className="contact-info">
    //       <h2>Contact Information</h2>
    //       <p>
    //         Email: <a href="mailto:info@example.com">info@example.com</a>
    //       </p>
    //       <p>Phone: +1 (123) 456-7890</p>
    //     </div>
    //   </div>
    // </>

    <>
      <div className='container-fluid p-0'>
        <div className='row ng'>
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
                      <Link class="nav-link active" aria-current="page" to={'/'}>Home</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link active " to={'/'} >About</Link>
                    </li>
                  </ul>

                </div>
              </div>
            </nav>
          </div>
          <div className='row'>
            <div className='col-md-1'></div>
            <div className='col-md-11'>
              <nav aria-label="breadcrumb ">
                <ol class="breadcrumb justify-content-start mt-5">
                  <li class="breadcrumb-item mt-5"><a href="/">Home</a></li>
                  <li class="breadcrumb-item active mt-5" aria-current="page">Contact Us</li>
                </ol>
              </nav>
              <h1 className='text-light' >Contact Us</h1>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <h1 className="text-center mb-2">Reach out to us</h1>
          <p className="text-center mb-2">Connect with KARAM and let us help you achieve workplace safety.</p>
          <p className="text-center mb-5 fw-bold" >Toll Free No:<span className='text-danger'>1800-103-7085 &nbsp;</span> <span className='text-danger' > &nbsp; |</span> &nbsp; &nbsp; Write to us:<span className='text-danger'>karam@karam.in</span></p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3484.907495426613!2d77.5687268749213!3d29.935916928481305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb1c31f16f06f%3A0x1294c9dc9d40da52!2sKARAM%20Industries!5e0!3m2!1sen!2sin!4v1694786165011!5m2!1sen!2sin"
            className="map-iframe mg p-0" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="row my-5">
         
          <div className="col-md-1 col-sm-1 col-xs-1"></div>
          <div className="row justify-content-center">
            <div className="col-md-3 col-sm-6 col-xs-12 mb-4">
              <div className="card">
                <img src={general} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">General Enquiry</h5>
                  <form onSubmit={gcode}className='text-dark' >
                    Enter Your First Name :
                    <input className='form-control' value={firstname} onChange={(e) => { setFirstname(e.target.value) }} type="text" name="firstName" />
                    <br />
                    Enter Your Last Name :
                    <input className='form-control'  value={lastname} onChange={(e) => { setLastname(e.target.value) }} type="text" name="lastName" />
                    <br />
                    Enter Your Email :
                    <input className='form-control'  value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" />
                    <br />
                    Product Code:
                    <input className='form-control'  value={product} onChange={(e) => setProduct(e.target.value)}  type="text" name="product" />
                    <br />
                    Query:
                    <input className='form-control' value={feed} onChange={(e) => setFeed(e.target.value)} type="text" name="feed" /><br />
                    <button className='form-control btn btn-danger' type="submit">Submit</button>
                    
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 mb-4">
              <div className="card">
                <img src={complaint} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Complaint</h5>
                  <form onSubmit={cmcode}className='text-dark' >
                    Enter Your First Name :
                    <input className='form-control' value={cfirstname} onChange={(e) => { setCfirstname(e.target.value) }} type="text" name="cfirstName" />
                    <br />
                    Enter Your Last Name :
                    <input className='form-control'  value={clastname} onChange={(e) => { setClastname(e.target.value) }} type="text" name="clastName" />
                    <br />
                    Enter Your Email :
                    <input className='form-control'  value={cemail} onChange={(e) => setCemail(e.target.value)} type="email" name="cemail" />
                    <br />
                    Product Code:
                    <input className='form-control'  value={cproduct} onChange={(e) => setCproduct(e.target.value)}  type="text" name="cproduct" />
                    <br />
                    Complaint:
                    <input className='form-control' value={cfeed} onChange={(e) => setCfeed(e.target.value)} type="text" name="cfeed" /><br />
                    <button className='form-control btn btn-danger' type="submit">Submit</button>
                    
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 mb-4">
              <div className="card">
                <img src={feedback} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Feedback</h5>
                  <form onSubmit={fcode}className='text-dark' >
                    Enter Your First Name :
                    <input className='form-control' value={ffirstname} onChange={(e) => { setFfirstname(e.target.value) }} type="text" name="ffirstName" />
                    <br />
                    Enter Your Last Name :
                    <input className='form-control'  value={flastname} onChange={(e) => { setFlastname(e.target.value) }} type="text" name="flastName" />
                    <br />
                    Enter Your Email :
                    <input className='form-control'  value={femail} onChange={(e) => setFemail(e.target.value)} type="email" name="femail" />
                    <br />
                    Feedback:
                    <input className='form-control' value={ffeed} onChange={(e) => setFfeed(e.target.value)} type="text" name="ffeed" /><br />
                    <button className='form-control btn btn-danger' type="submit">Submit</button>
                    
                  </form>
                </div>
              </div>
            </div>

          </div>
          <div className="col-md-1 col-sm-1 col-xs-1"></div>
        </div>
      </div>
      <Footer></Footer>

    </>

  )
}

export default Contact