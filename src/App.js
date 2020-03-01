import React from "react";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Classes from "./pages/Classes";
import About from "./pages/About";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Error from "./pages/Error";

import { Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header></Header>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Home name={`Props through component`}>Home</Home>}
        />
        <Route exact path="/classes" component={Classes} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
      <Footer></Footer>
    </>
  );
}
