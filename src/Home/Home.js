import React from 'react';
import { Card } from 'react-bootstrap';
import './Home.css';
import img from '../Img/images (2).jpg';
import { faEye, faFileVideo, faHandPointer, faList12, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faContactBook } from '@fortawesome/free-regular-svg-icons';
import MyApp from '../Carusol/MyApp';




const Home = () => {
  return (
    <div>
      <div className="banner-css row">
        <div className="col-lg-5 col-sm-12  text-white m-auto pt-5">
          <div className="container m-auto ms-lg-5 ps-5">
            <span className="frist-line-span">
              #MOST TRUSTED CERTIFICATIONS BY THE INDUSTRY
            </span>

            <h2 className=" my-4">
              Unleash Your SCRUM Skills, <br /> Grab More Attention To Résumé
            </h2>
            <button className="btn-enroll">ENROLL NOW</button>

            <p className="my-5 p-css-banner">
              10% OFF on all courses* | Offer Valid For
              <hr className=" hr-css" />
            </p>

            <span className="time-css mx-2">02</span>
          
            <span className="time-css mx-2">58</span>
            <span className="time-css mx-2">50  </span>
          </div>
        </div>
        <div className="col-7  hiden">
          <div className="div-img">
            <span className="p2-css"></span>
            <span className="p3-css"></span>
            <span className="p4-css"></span>

            <span className="p-css"></span>
          </div>
        </div>
      </div>
      <section className="my-5 container">
        <h2 className="pt-5">A broad range of courses</h2>
        <p>
          Choose from 100+ online video courses with new additions published
          every month
        </p>

        <div className="my-5 card-div-home">
          <Card className="card-custom-css" style={{ width: '18rem' }}>
            <Card.Img className="card-custom-img" variant="top" src={img} />
            <Card.Body>
              <Card.Title>Learn SCRUM: The Complete Beginner Course</Card.Title>
              <Card.Text>Samay Jain, Ex-KPMG</Card.Text>
              <button className="btn2-enroll">ENROLL NOW</button>
            </Card.Body>
          </Card>
          <Card className="card-custom-css" style={{ width: '18rem' }}>
            <Card.Img className="card-custom-img" variant="top" src={img} />
            <Card.Body>
              <Card.Title>Learn SCRUM: The Complete Beginner Course</Card.Title>
              <Card.Text>Samay Jain, Ex-KPMG</Card.Text>
              <button className="btn2-enroll">ENROLL NOW</button>
            </Card.Body>
          </Card>
          <Card className="card-custom-css" style={{ width: '18rem' }}>
            <Card.Img className="card-custom-img" variant="top" src={img} />
            <Card.Body>
              <Card.Title>Learn SCRUM: The Complete Beginner Course</Card.Title>
              <Card.Text>Samay Jain, Ex-KPMG</Card.Text>
              <button className="btn2-enroll">ENROLL NOW</button>
            </Card.Body>
          </Card>
          <Card className="card-custom-css" style={{ width: '18rem' }}>
            <Card.Img className="card-custom-img" variant="top" src={img} />
            <Card.Body>
              <Card.Title>Learn SCRUM: The Complete Beginner Course</Card.Title>
              <Card.Text>Samay Jain, Ex-KPMG</Card.Text>
              <button className="btn2-enroll">ENROLL NOW</button>
            </Card.Body>
          </Card>
        </div>
      </section>

      <section className="m-lg-5 py-5 row container">
        <div className="col-lg-5 d-lg-flex  align-items-center">
          <div>
            <h1 className="medel-heading">
              Start learning with <br /> us right now!
            </h1>
            <p>
              Choose from 100+ online video <br /> courses with new updates.
            </p>
            <button className="btn2-enroll">ENROLL NOW</button>
          </div>
        </div>
        <div className="col-lg-7 live-items">
          <div className="">
            <div className="single-div-live my-5">
              <p className="colors1">
                Live <br /> Exams
              </p>
              <span className="live-span1">
                <FontAwesomeIcon className="icons1" icon={faContactBook} />
              </span>
            </div>
            <div className="single-div-live my-5">
              <p className="colors2">
                Live <br /> Classes
              </p>
              <span className="live-span2">
                <FontAwesomeIcon className="icons2" icon={faList12} />
              </span>
            </div>
            <div className="single-div-live my-5">
              <p className="colors3">
                100 K+ <br /> Views
              </p>
              <span className="live-span3">
                <FontAwesomeIcon className="icons3" icon={faEye} />
              </span>
            </div>
          </div>
          <div className="">
            <div className="single-div-live my-5">
              <p className="colors4">
                1000+ <br /> Lessons
              </p>
              <span className="live-span4">
                <FontAwesomeIcon className="icons4" icon={faFileVideo} />
              </span>
            </div>
            <div className="single-div-live my-5">
              <p className="colors5">
                1000+ <br /> Lessons
              </p>
              <span className="live-span5">
                <FontAwesomeIcon className="icons5" icon={faHandPointer} />
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* OUR TESTIMONIALS..........section */}
      <section className='container my-5'>
        <div className='d-flex our-hr'>
        <h4 className=''>OUR TESTIMONIALS</h4>

        <h4 className='w-25 ms-5'><hr  /></h4>

        </div>
        <div className='my-5 py-3 comment'>
        <MyApp></MyApp>
        </div>
       
        
      </section>
     

      <section className='container my-4 '>
        <div className='email-div my-5 pb-4 text-white p-4'>
          <div>
          <h4>Email Us</h4>
          <p>Connect with us in case of any queries, complaints or feedbacks...</p>
          </div>
          <div>
          <button className='btn-email mt-3'>CONTACT US</button>
          </div>
        </div>
        

      </section>
    </div>
  )
}

export default Home
