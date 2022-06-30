import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="main-div">
      {/* frist div............. */}
      <div className="fotter-frist px-5 mt-5">
        <div className="px-2  p-lg-5">
          <h2>Logo</h2>
          <p>
            We ara a lorem ipsum dolor sit amet, <br /> consectetur adipiscing
            elit, sed do eiusmod tempor incididun.
          </p>
          <div className="logo-div pe-5 mt-2">
          <FontAwesomeIcon className="icons2 px-2" icon={faPhone} />    <div className="me-5">
              <h6> Have a question?</h6>
              <p>310-437-2766</p>
            </div>
            <FontAwesomeIcon className="icons2 px-2" icon={faEnvelope} /> <div className="">
              <h6>Contact us at</h6>
              <p>unreal@outlook.com</p>
            </div>
          </div>
        </div>

        <div className="p-lg-5">
          <h2>Newsletter</h2>
          <p>
            Be the first one to know about discounts, offers and events weekly
            in your mailbox. Unsubscribe whenever you like with one click.
          </p>
          <input className="input-css" type="text" placeholder="Your Email" />
          <button className="btn-submit">Submit</button>
        </div>
      </div>
      <hr />

      {/* last div........ */}
      <div className=" container ">
        <div className="footer-nav">
          <button className="btn text-white">About Us</button>
          <button className="btn text-white">Blogs</button>
          <button className="btn text-white">About Us</button>
          <button className="btn text-white">Contract Us</button>
          <button className="btn text-white">FAQ</button>
          <button className="btn text-white">Privecy</button>
          <button className="btn text-white">Stime</button>
          <button className="btn text-white">Team of Us</button>
        </div>
        <div className="pt-5 d-flex justify-content-between">
          <div>
            <FontAwesomeIcon className="icons2 px-2" icon={faFacebook} />
            <FontAwesomeIcon className="icons2 px-2" icon={faInstagram} />
            <FontAwesomeIcon className="icons2 px-2" icon={faTwitter} />
            <FontAwesomeIcon className="icons2 px-2" icon={faYoutube} />
            <FontAwesomeIcon className="icons2 px-2" icon={faPhone} />
            <FontAwesomeIcon className="icons2 px-2" icon={faWhatsapp} />
          </div>

          <div>
            <p>
              Developed By <br />
              Mohammad Habibullah
            </p>
            <p>Copyright@ 2022</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
