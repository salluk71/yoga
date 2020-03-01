import React, { Component } from "react";
import footer_bg from "../img/footer-bg.jpg";
import footer_logo from "../img/footer-logo.png";
import { Link } from "react-router-dom";
export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24176.251535937678!2d-73.96828677849068!3d40.761333182809906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258c4d85a0d8d%3A0x11f877ff0b8ffe27!2sRoosevelt+Island!5e0!3m2!1sen!2sbd!4v1564859733175!5m2!1sen!2sbd"
            style={{ height: 590, border: 0 }}
            allowFullScreen
            title="map"
          ></iframe>
        </div>
        <footer className="footer-section set-bg" data-setbg={footer_bg}>
          <div className="container">
            <div className="contact-inner">
              <div className="contact-form">
                <div className="section-title">
                  <span>Say hello</span>
                  <h2>Contact us</h2>
                </div>
                <form action="#">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Mail" />
                  <input type="text" placeholder="Subject" />
                  <textarea placeholder="Message"></textarea>
                  <button type="submit" className="submit-btn">
                    Send
                  </button>
                </form>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="footer-text">
                    <Link to="/" className="logo">
                      <img src={footer_logo} alt="" />
                    </Link>
                    <p>
                      Aenean quis velit pulvinar, pellentesque neque vel,
                      laoreet orci. Suspendisse potenti. Donec congue vel justo
                      eget malesuada. “True meditation is about being fully
                      present with everything that is–including.
                    </p>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-pinterest"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-dribbble"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-behance"></i>
                        </a>
                      </li>
                    </ul>
                    <div className="copyright text-white"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
