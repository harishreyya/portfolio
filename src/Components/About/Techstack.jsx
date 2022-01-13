import React from "react";
import "./About.css";
import "./Techstack.css";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiHtml5,
  DiCss3,
  DiNpm,
  DiBootstrap,
  DiCodeBadge,
  DiHackernews
} from "react-icons/di";

//import { SiRedux, SiMaterialUi } from "react-icons/si";

import { SiRedux} from "react-icons/si";
export const TechStack = () => {
  return (
    <div>
    <h1 className="Skills-heading">
          Professional <strong className="purple"> Skills </strong>
        </h1>
        
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /> <h6>react</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /> <h6>JavaScript</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 /><h6>Html5</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs /><h6>Nodejs</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb /><h6>Mongodb</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /><h6>Git</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 /><h6>Css3</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux /><h6>Redux</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNpm /><h6>Npm </h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap /><h6>Bootstrap</h6>
      </Col>
     
    </Row>
    </div>
  );
};
