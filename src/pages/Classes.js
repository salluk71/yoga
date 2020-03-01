import React, { Component } from "react";
import $ from "jquery";
import classess_bg from "../img/classes-bg.jpg";
import yoga_price_bg from "../img/yoga-price-bg.jpg";
import discount_bg from "../img/discount-bg.jpg";
export default class Classes extends Component {
  componentDidMount() {
    $(".set-bg").each(function() {
      var bg = $(this).data("setbg");
      $(this).css("background-image", "url(" + bg + ")");
    });
  }
  render() {
    return (
      <React.Fragment>
        <section className="hero-single set-bg spad" data-setbg={classess_bg}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="hero-item">
                  <span className="tickler-text">Who we are</span>
                  <h1>Classes</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="yoga-classes-section classes-page spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 m-auto text-center">
                <div className="section-title">
                  <span>Your inner Chi</span>
                  <h2>We offer a great number of classes</h2>
                  <p>
                    Aenean quis velit pulvinar, pellentesque neque vel, laoreet
                    orci. Suspendisse potenti. Donec congue vel justo eget
                    malesuada. enean quis velit pulvinar, pellentesque neque
                    vel, laoreet orci. Suspendisse potenti. Donec congue vel
                    justo eget malesuada. In arcu justo, sagittis consequat
                    pulvinar quis.
                  </p>
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
              <div className="col-md-4">
                <div className="single-classes">
                  <i className="flaticon-012-mandala"></i>
                  <h3>Iyengar yoga</h3>
                  <p>
                    Suspendisse potenti. Donec congue vel justo eget malesuada.
                    In arcu justo, sagittis consequat pulvinar quis, pretium
                    quis massa.{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-classes">
                  <i className="flaticon-009-yoga-1"></i>
                  <h3>Ashtanga </h3>
                  <p>
                    Suspendisse potenti. Donec congue vel justo eget malesuada.
                    In arcu justo, sagittis consequat pulvinar quis, pretium
                    quis massa.{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-classes">
                  <i className="flaticon-017-monk"></i>
                  <h3>Prenatal yoga </h3>
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
        <section className="yoga-price set-bg spad" data-setbg={yoga_price_bg}>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 text-center">
                <div className="single-price-item">
                  <h4>
                    Prenatal Yoga
                    <br />
                    Class
                  </h4>
                  <div className="price">
                    <h2>$35</h2>
                    <span>Per month</span>
                  </div>
                  <p>
                    Aenean quis velit pulvinar, pellentesque neque vel, laoreet
                    orci. Suspendisse potenti.{" "}
                  </p>
                  <a href="#" className="price-btn">
                    Get it now
                  </a>
                </div>
              </div>
              <div className="col-lg-4 text-center">
                <div className="single-price-item begginers">
                  <h4>
                    Pillates Class for
                    <br />
                    begginers
                  </h4>
                  <div className="price">
                    <h2>$25</h2>
                    <span>Per month</span>
                  </div>
                  <p>
                    Aenean quis velit pulvinar, pellentesque neque vel, laoreet
                    orci. Suspendisse potenti.{" "}
                  </p>
                  <a href="#" className="price-btn">
                    Get it now
                  </a>
                </div>
              </div>
              <div className="col-lg-4 text-center">
                <div className="single-price-item">
                  <h4>
                    Hatha Yoga
                    <br />
                    Class
                  </h4>
                  <div className="price">
                    <h2>$30</h2>
                    <span>Per month</span>
                  </div>
                  <p>
                    Aenean quis velit pulvinar, pellentesque neque vel, laoreet
                    orci. Suspendisse potenti.{" "}
                  </p>
                  <a href="#" className="price-btn">
                    Get it now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="discount-price set-bg spad"
          data-setbg={discount_bg}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="discount-text">
                  <h2>Join at a discount price</h2>
                  <p>
                    Aenean quis velit pulvinar, pellentesque neque vel, laoreet
                    orci. Suspendisse potenti. Donec congue vel justo eget
                    malesuada. enean quis velit pulvinar, pellentesque neque
                    vel, laoreet orci. Suspendisse potenti. Donec congue vel
                    justo eget malesuada. In arcu justo,
                  </p>
                  <ul>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      <span>
                        Donec congue vel justo eget malesuada. In arcu justo,
                      </span>
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      <span>
                        Suspendisse quam neque, rutrum vel scelerisque eu
                      </span>
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      <span>
                        Nulla mollis dapibus lacus, vel mattis mauris.
                      </span>
                    </li>
                  </ul>
                  <a href="#" className="primary-btn discount-btn">
                    Join Now
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
