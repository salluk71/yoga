import React, { Component } from "react";
import blog_bg from "../img/blog-bg.jpg";
import $ from "jquery";
export default class Contact extends Component {
  componentDidMount() {
    $(".set-bg").each(function() {
      var bg = $(this).data("setbg");
      $(this).css("background-image", "url(" + bg + ")");
    });
  }
  render() {
    return (
      <React.Fragment>
        <section className="hero-single set-bg spad" data-setbg={blog_bg}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="hero-item">
                  <span className="tickler-text">Say hello</span>
                  <h1>Contact</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-details">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-lt">
                  <div className="section-title">
                    <span>Contact info</span>
                    <h2>Get in touch </h2>
                    <p>
                      Aenean quis velit pulvinar, pellentesque neque vel,
                      laoreet orci. Suspendisse potenti. Donec congue vel justo
                      eget malesuada. enean quis velit pulvinar, pellentesque
                      neque vel, laoreet orci. Suspendisse potenti.
                    </p>
                  </div>
                  <div className="address-details">
                    <h5>Information</h5>
                    <ul>
                      <li>Main Str, no 23, New York</li>
                      <li>+546 990221 123</li>
                      <li>yoga@contact.com</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 offset-lg-1">
                <div className="yoga-schedule">
                  <div className="section-title">
                    <span>Hours</span>
                    <h2>Schedule</h2>
                  </div>
                  <ul>
                    <li>
                      <span>Monday</span>
                      <span className="time">10:30 - 19:00</span>
                    </li>
                    <li>
                      <span>Tuesday</span>
                      <span className="time">10:30 - 19:00</span>
                    </li>
                    <li>
                      <span>Wednesday</span>
                      <span className="time">10:30 - 19:00</span>
                    </li>
                    <li>
                      <span>Thursday</span>
                      <span className="time">10:30 - 19:00</span>
                    </li>
                    <li>
                      <span>Friday</span>
                      <span className="time">10:30 - 19:00</span>
                    </li>
                    <li>
                      <span>Saturday</span>
                      <span className="time">10:30 - 14:00</span>
                    </li>
                    <li>
                      <span>Sunday</span>
                      <span className="time">Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
