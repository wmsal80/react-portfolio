import React from "react";
import ProfilePic from "../components/Profile";
import Contact from "../components/Contact";
import { Row, Container, Col } from "../components/Grid";
import Image from "../images/about/backgroundImage.jpg";
import "./style.css";


function About() {
  return (
      <>
      <ProfilePic backgroundImage={Image}>
        <h1>John Alexander</h1>
        <h2>New guy ready to try</h2>
      </ProfilePic>

      <Container>
        <Row>
          <Col size="md-12">
            <h1>This is my react portfolio page</h1>
          </Col>
        </Row>
        </Container>

        <Container>
        <Row>
          <Col size="md-12">
            <p>“None of us are as smart as all of us” Dr. Ken Blanchard</p>
            <p>
              My name is John. I love solving problems and making sure the customer gets what they need. I took on a
              full stack bootcamp not really sure what to expect. I was surprised to learn just how hard it would be.
              I am a navy nuke with over eight years experience in nuclear power, a former maintenance supervisor with
              almost 10 years experience between nuke plants, coal plants, steel mills, stamping, forging. I took on 
              this challenge because I remember a time when I was happy as a new programmer working with C++ in college.
              I loved it. Today I have that same drive and the field of opportunity is vast. I'm looking forward to doing
              my best and provide my services to people that need them.
            </p>
            <p>
              I'm a strong believer in family. Without them life would not be the same. I'm also an Eagle Scout so you know 
              i'll give any situation my best effort. I'm hoping to find that next opportunity.
            </p>
            <Row>
              <Contact />
            </Row>
          </Col>
        </Row>
      </Container>
   
    </>
  );
}

export default About;
