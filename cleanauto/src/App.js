import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Fragment>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/footer" element={<Footer />} />

            {/* <Route path="/services">
          <Services />
        </Route>
        <Route path="/footer">
          <Footer />
        </Route> */}
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
