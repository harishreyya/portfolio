import React from "react";
import "./About.css";
import { Col, Container, Row } from "react-bootstrap";

import { TechStack } from "./Techstack";
import { AboutCard } from "./AboutCard";
import { Particle } from "../Home/Particle";
import Tilt from "react-parallax-tilt";
import myImg from "../Assets/slacknewdp.jpeg";

export const About = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px"
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know more <strong className="purple">About me</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src="https://www.revenueriver.co/hubfs/fullstack.jpeg" className="img-fluid myImage" alt="Avatar" />
            </Tilt>
          </Col>
        </Row>
       
        
      </Container>
     
        
    </Container>
    
  );
};
