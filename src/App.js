import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Wrapper from "./components/Wrapper";

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Navbar />
          <Wrapper>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            
          </Wrapper>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
