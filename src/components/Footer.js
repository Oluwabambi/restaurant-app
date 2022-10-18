import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="footer-sect">
        <div className="f-one">
          <h1>DELICE</h1>
          <button className="btn btn-black">BOOK A TABLE</button>
        </div>
        <div className="f-two">
          <div className="w-3">
            <ul className="l-one">
              <li className="fw-bold">SITEMAP</li>
              <li>HOME</li>
              <li>MENU</li>
              <li>PHOTOS GALLERY</li>
              <li>OUR STORY</li>
              <li>NEWS</li>
            </ul>
          </div>
          <div className="w-3">
            <ul className="l-one">
              <li className="fw-bold">SOCIALS</li>
              <li>INSTAGRAM</li>
              <li>FACEBOOK</li>
              <li>PINTEREST</li>
              <li>TRUSTPILOT</li>
              <li>INFO@DELICE.COM</li>
            </ul>
          </div>
          <div className="w-4 ms-auto">
            <ul className="l-one">
              <li className="fw-bold">OPENING HOURS</li>
              <li>
                <span>MON-THU</span>
                <span>2pm - 11pm</span>
              </li>
              <li>
                <span>FRI-SAT</span>
                <span>11am - 11pm</span>
              </li>
              <li>
                <span>SUN</span>
                <span>6pm - 11pm</span>
              </li>
            </ul>
            <ul className="l-two">
              <li className="fw-bold">ADDRESS</li>
              <li>80 rue des Coudriers, 75012 - Paris</li>
            </ul>
          </div>
        </div>
        <div className="sub-footer">
          <div className="subf-one">
            <a href="#">Changelog</a><a href="#">Styleguide</a><a href="#">Licensing</a>
          </div>
          <div className='subf-two'>
            <a href="#">BACK TO TOP</a>
          </div>
          <div className="subf-three">Made In Webflow</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer