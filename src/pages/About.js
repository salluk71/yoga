import React, { Component } from "react";
import $ from "jquery";
import about_bg from "../img/aboutus_bg.jpg";
import about_rt from "../img/about-rt.png";
import counter_bg from "../img/counter-bg.jpg";
import team_member_member_1 from "../img/team-member/member-1.jpg";
import team_member_member_2 from "../img/team-member/member-2.jpg";
import team_member_member_3 from "../img/team-member/member-3.jpg";
import about_callTo from "../img/about-callto-bg.jpg";

export default class About extends Component {
  //  console.log(about_bg);
  componentDidMount() {
    $(".set-bg").each(function() {
      var bg = $(this).data("setbg");
      $(this).css("background-image", "url(" + bg + ")");
    });
    $(".counter").each(function() {
      $(this)
        .prop("Counter", 0)
        .animate(
          { Counter: $(this).text() },
          {
            duration: 4000,
            easing: "swing",
            step: function(now) {
              $(this).text(Math.ceil(now));
            }
          }
        );
    });
  }
  render() {
    return (
      <React.Fragment>
        <section className="hero-single set-bg spad" data-setbg={about_bg}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="hero-item">
                  <span className="tickler-text">Who we are</span>
                  <h1>About us</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-us spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-lt">
                  <div className="section-title">
                    <span>Your inner Chi</span>
                    <h2>The very heart of yoga </h2>
                  </div>
                  <p>
                    Aenean quis velit pulvinar, pellentesque neque vel, laoreet
                    orci. Suspendisse potenti. Donec congue vel justo eget
                    malesuada. enean quis velit pulvinar, pellentesque neque
                    vel, laoreet orci. Suspendisse potenti. Donec congue vel
                    justo eget malesuada. In arcu justo, sagittis consequat
                    pulvinar quis, pretium quis massa. Vestibulum nec nibh eu
                    nisi rutrum iaculis. Pellentesque placerat sit amet leo in
                    vestibulum. Suspendisse quam neque, rutrum vel scelerisque
                  </p>
                  <a href="#" className="primary-btn">
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-lg-4 offset-lg-1">
                <div className="about-img">
                  <img src={about_rt} alt="about rt" />>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="about-counter set-bg spad" data-setbg={counter_bg}>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 text-center">
                <div className="single-counter">
                  <i className="flaticon-001-meditation"></i>
                  <span className="counter-num counter">325</span>
                  <span>Active members</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 text-center">
                <div className="single-counter">
                  <i className="flaticon-011-hamsa"></i>
                  <span className="counter-num counter">7</span>
                  <span>Instructors</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 text-center">
                <div className="single-counter">
                  <i className="flaticon-010-chakra"></i>
                  <span className="counter-num counter">49</span>
                  <strong>k</strong>
                  <span>Ig follovers</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 text-center">
                <div className="single-counter">
                  <i className="flaticon-009-yoga-1"></i>
                  <span className="counter-num counter">15</span>
                  <span>Awards won</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="about-team spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="section-title">
                  <span>Your inner Chi</span>
                  <h2>The team</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="single-team-member">
                  <div className="team-pic">
                    <img src={team_member_member_1} alt="" />>
                  </div>
                  <div className="team-text">
                    <span>Yoga master</span>
                    <h4>Maria Smith</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="single-team-member">
                  <div className="team-pic">
                    <img src={team_member_member_2} alt="" />
                  </div>
                  <div className="team-text">
                    <span>Pilates instructor</span>
                    <h4>Anna Michaels</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="single-team-member">
                  <div className="team-pic">
                    <img src={team_member_member_3} alt="" />
                  </div>
                  <div className="team-text">
                    <span>Yoga teacher</span>
                    <h4>Carla Williams</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="about-callto-action set-bg"
          data-setbg={about_callTo}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="about-call-to-text">
                  <h2>Begginers class start this month</h2>
                  <p>
                    Aenean quis velit pulvinar, pellentesque neque vel, laoreet
                    orci. Suspendisse potenti. Donec congue vel justo eget
                    malesuada. enean quis velit pulvinar, pellentesque neque
                    vel, laoreet orci. Suspendisse potenti. Donec congue vel
                    justo eget malesuada. In arcu justo,
                  </p>
                  <a href="#" className="primary-btn about-callto-btn">
                    Join now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
