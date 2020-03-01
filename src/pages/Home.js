import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import $ from "jquery";

import OwlCarousel from "react-owl-carousel-safe";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import hero_slider_1 from "../img/hero-slider/hero-slider-1.jpg";
import hero_slider_2 from "../img/hero-slider/hero-slider-2.jpg";
import hero_slider_3 from "../img/hero-slider/hero-slider-3.jpg";
import yoga_bg from "../img/yoga-bg.jpg";
import yoga_1 from "../img/yoga-1.jpg";
import yoga_2 from "../img/yoga-2.jpg";
import yoga_3 from "../img/yoga-3.jpg";
import client_left from "../img/client-left.png";
import callto_bg from "../img/callto-bg.jpg";

//import { render } from "@testing-library/react";

export default class Home extends Component {
  componentDidMount() {
    $(".set-bg").each(function() {
      var bg = $(this).data("setbg");
      $(this).css("background-image", "url(" + bg + ")");
    });
  }

  render() {
    console.log($);
    return (
      <>
        <section className="hero-slider">
          <div className="">
            <OwlCarousel
              className="slider-items owl-carousel"
              items="1"
              nav={true}
              animateOut="fadeOut"
              animateIn="fadeIn"
              smartSpeed={1200}
              autoplay={true}
            >
              <div
                className="single-slider-item set-bg"
                data-setbg={hero_slider_1}
              >
                <div className="hero_content">
                  <span className="tickler-text">{this.props.name}</span>
                  <h1>Find Your Zen</h1>
                  <p>{this.props.children}</p>
                  <a href="/" className="primary-btn">
                    Read More
                  </a>
                </div>
              </div>
              <div
                className="single-slider-item set-bg"
                data-setbg={hero_slider_2}
              >
                <div className="hero_content">
                  <span className="tickler-text">Your inner Chi</span>
                  <h1>Find Your Zen</h1>
                  <p>
                    Aenean quis velit pulvinar, pellentesque neque vel, laoreet
                    orci. Suspendisse potenti. Donec congue vel justo eget
                    malesuada. In arcu justo, sagittis consequat.
                  </p>
                  <a href="/" className="primary-btn">
                    Read More
                  </a>
                </div>
              </div>
              <div
                className="single-slider-item set-bg"
                data-setbg={hero_slider_3}
              >
                <div className="hero_content">
                  <span className="tickler-text">Your inner Chi</span>
                  <h1>Find Your Zen</h1>
                  <p>
                    Aenean quis velit pulvinar, pellentesque neque vel, laoreet
                    orci. Suspendisse potenti. Donec congue vel justo eget
                    malesuada. In arcu justo, sagittis consequat.
                  </p>
                  <a href="/" className="primary-btn">
                    Read More
                  </a>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </section>
        <section className="yoga-classes-section spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="home-title">
                  <span>Your inner Chi</span>
                  <h2>
                    &#34;The very heart of yoga practice is &#39;abyhasa&#39; –
                    steady effort in the direction you want to go.&#34;
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="single-classes">
                  <i className="flaticon-002-yin-yang"></i>
                  <h3>Yoga</h3>
                  <p>
                    Aenean quis velit pulvinar, pellentesque neque vel, laoreet
                    orci. Suspendisse potenti. Donec congue vel justo eget
                    malesuada.{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-classes">
                  <i className="flaticon-021-yoga-mat"></i>
                  <h3>Pilates</h3>
                  <p>
                    Etiam pretium, nibh vitae varius ultricies, tellus diam
                    gravida elit, vel rhoncus eros eros sit amet ipsum. Cras
                    cursus pellentesque.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-classes">
                  <i className="flaticon-001-meditation"></i>
                  <h3>Hatha</h3>
                  <p>
                    Suspendisse potenti. Donec congue vel justo eget malesuada.
                    In arcu justo, sagittis consequat pulvinar quis, pretium
                    quis massa.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="different-yoga set-bg spad" data-setbg={yoga_bg}>
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="home-title">
                  <span>Your inner Chi</span>
                  <h2>
                    &#34;True meditation is about being fully present with
                    everything that is–including discomfort and challenges. It
                    is not an escape from life.&#34;
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="yoga-name-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="single-yoga-name">
                  <div className="yoga-pic">
                    <img src={yoga_1} alt="" />
                  </div>
                  <div className="yoga-text">
                    <span>Your inner Chi</span>
                    <h4>
                      Aenean quis velit lacinia <br />
                      pulvinar.
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="single-yoga-name">
                  <div className="yoga-pic">
                    <img src={yoga_2} alt="" />
                  </div>
                  <div className="yoga-text">
                    <span>Your inner Chi</span>
                    <h4>
                      Velit pulvinar, pelle <br />
                      neque .
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="single-yoga-name">
                  <div className="yoga-pic">
                    <img src={yoga_3} alt="" />
                  </div>
                  <div className="yoga-text">
                    <span>Your inner Chi</span>
                    <h4>
                      Quis velit pulvinar, pellen <br />
                      tesque.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="client-section spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="client-left-img">
                  <img src={client_left} alt="client-left" />
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1">
                <div className="client-says">
                  <div className="section-title">
                    <span>Your inner Chi</span>
                    <h2>What our clients say</h2>
                  </div>
                  <OwlCarousel className="client-items owl-carousel" items="1">
                    <div className="single-client-item">
                      <p>
                        Aenean quis velit pulvinar, pellentesque neque vel,
                        laoreet orci. Suspendisse potenti. Donec congue vel
                        justo eget malesuada. “True meditation is about being
                        fully present with everything that is–including
                        discomfort and challenges. It is not an escape from
                        life.
                      </p>
                      <h5>
                        Mark Smith, <span>Client</span>
                      </h5>
                    </div>
                    <div className="single-client-item">
                      <p>
                        Aenean quis velit pulvinar, pellentesque neque vel,
                        laoreet orci. Suspendisse potenti. Donec congue vel
                        justo eget malesuada. “True meditation is about being
                        fully present with everything that is–including
                        discomfort and challenges. It is not an escape from
                        life.
                      </p>
                      <h5>
                        Mark Smith, <span>Client</span>
                      </h5>
                    </div>
                    <div className="single-client-item">
                      <p>
                        Aenean quis velit pulvinar, pellentesque neque vel,
                        laoreet orci. Suspendisse potenti. Donec congue vel
                        justo eget malesuada. “True meditation is about being
                        fully present with everything that is–including
                        discomfort and challenges. It is not an escape from
                        life.
                      </p>
                      <h5>
                        Mark Smith, <span>Client</span>
                      </h5>
                    </div>
                    <div className="single-client-item">
                      <p>
                        Aenean quis velit pulvinar, pellentesque neque vel,
                        laoreet orci. Suspendisse potenti. Donec congue vel
                        justo eget malesuada. “True meditation is about being
                        fully present with everything that is–including
                        discomfort and challenges. It is not an escape from
                        life.
                      </p>
                      <h5>
                        Mark Smith, <span>Client</span>
                      </h5>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="callto-section set-bg" data-setbg={callto_bg}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="callto-text">
                  <h2>Take a free class now</h2>
                  <Link to="/" className="primary-btn callto-btn">
                    Ream More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
