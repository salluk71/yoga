import React, { Component } from "react";
import Logo from "../img/logo.png";
import header_bg from "../img/header-bg.png";
import $ from "jquery";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../../node_modules/slicknav/dist/jquery.slicknav.js";
import "../../node_modules/jquery-circle-progress/dist/circle-progress.min.js";
import "../css/font-awesome.min.css";
import "../css/flaticon.css";
import "../css/style.css";

import { Link } from "react-router-dom";
//import slicknav from "slicknav";

export default class Header extends Component {
  componentDidMount() {
    $(window).on("load", function() {
      $(".loader").fadeOut();
      $("#preloder")
        .delay(400)
        .fadeOut("slow");
    });
    $(".set-bg").each(function() {
      var bg = $(this).data("setbg");
      $(this).css("background-image", "url(" + bg + ")");
    });
  }
  state = {
    toggle: true
  };
  toggleMenu = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  menuOff = () => {
    this.setState({ toggle: true });
  };
  render() {
    return (
      <>
        <div id="preloder">
          <div className="loader"></div>
        </div>
        <header className="header-section set-bg" data-setbg={header_bg}>
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="main-menu">
                  <div className="logo">
                    <Link to="/">
                      <img src={Logo} alt="" />
                    </Link>
                  </div>
                  <nav
                    className={
                      this.state.toggle
                        ? "inner-main-navbar mobile-menu"
                        : "inner-main-navbar mobile-menu active"
                    }
                  >
                    <Link
                      to="/"
                      className="d-md-none mb-4 border-bottom pb-4 d-block"
                    >
                      <img src={Logo} alt="" />
                    </Link>
                    <ul>
                      <li>
                        <Link to="/" onClick={this.menuOff}>
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link to="/classes" onClick={this.menuOff}>
                          Classes
                        </Link>
                      </li>
                      <li>
                        <Link to="/about" onClick={this.menuOff}>
                          About us
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact" onClick={this.menuOff}>
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  <div
                    id="mobile-menu-wrap"
                    className="d-md-none"
                    onClick={this.toggleMenu}
                  >
                    <i
                      className={
                        this.state.toggle ? "fa fa-bars" : "fa fa-times"
                      }
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
