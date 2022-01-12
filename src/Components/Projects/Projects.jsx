import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Particle } from "../Home/Particle";
import "./Projects.css";
import sudokologo from "../Assets/S.png";
import Clockifylogo from "../Assets/Internshala.png";
//import Covidlogo from "../Assets/21.png";
//import Travelocitylogo from "../Assets/22.png";
//import Airgaragelogo from "../Assets/23.png";
import { DiReact, DiJavascript, DiGithubBadge, DiHtml5,DiMongodb } from "react-icons/di";
//import { SiRedux, SiStyledComponents, SiMaterialUi } from "react-icons/si";
import { FaLink, FaCss3 } from "react-icons/fa";
export const Projects = () => {
    return (
        <Container className="body">
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My  <strong className="purple">Projects</strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I have worked on .
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={6} className="project-card">
                        <Card className="project-card-view" style={{ textAlign: "center" }}>
                            <Card.Img variant="top" src="https://user-images.githubusercontent.com/87423101/141508718-e9148092-a7e3-4394-ba9a-4ce78666d9a7.png" alt="Clockify Clone" />
                            <Card.Body>
                                <Card.Title style={{ fontWeight: "800" }}>
                                    Lybrate-Clone
                                </Card.Title>
                                <Card.Text style={{ textAlign: "justify" }}>
                                Lybrate.com innovative online doctor database gives you access to over 150,000 highly trained medical experts.So you can ask a doctor anything you want. 
                                </Card.Text>
                                <div className="Techstacks">
                                   <DiJavascript className="Techstacks-icons" />
                                    <FaCss3 className="Techstacks-icons" />
                                    <DiHtml5 className="Techstacks-icons" />
                                    <DiMongodb className="Techstacks-icons" />
                                </div>
                                <Button
                                    variant="primary"
                                    style={{ marginTop: "5%" }}
                                    href="https://github.com/m-sehrawat/Lybrate-Website-Clone-Version-2.0"
                                    target="_blank"
                                >
                                    {" "}
                                    <DiGithubBadge /> Github
                                </Button>
                                <Button
                                    variant="primary"
                                    style={{ marginLeft: "5%", marginTop: "5%" }}
                                    href="https://m-sehrawat.github.io/Lybrate-Website-Clone/frontend/landingpage.html"
                                    target="_blank"
                                >
                                    {" "}
                                    <FaLink /> Demo
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className="project-card" style={{ textAlign: "center" }}>
                        <Card className="project-card-view">
                            <Card.Img variant="top" src="https://user-images.githubusercontent.com/87423101/135589828-fb8a042e-34d4-4a6e-a7ce-27bd0e1dcb7b.png" alt="Clockify Clone" />
                            <Card.Body>
                                <Card.Title style={{ fontWeight: "800" }}>
                                    Kimaye-Clone
                                </Card.Title>
                                <Card.Text style={{ textAlign: "justify" }}>
                                KIMAYE is an Indian e-commerce company. Its a website which deliver fruits to our door steps.
                                </Card.Text>
                                <div className="Techstacks">
                                    
                                    <DiJavascript className="Techstacks-icons" />
                                  
                                    <FaCss3 className="Techstacks-icons" />
                                    <DiHtml5 className="Techstacks-icons" />
                                </div>
                                <Button
                                    variant="primary"
                                    href="https://github.com/harishreyya/kimaye"
                                    target="_blank"
                                    style={{ marginTop: "5%" }}
                                >
                                    {" "}
                                    <DiGithubBadge /> Github
                                </Button>
                                <Button
                                    variant="primary"
                                    style={{ marginLeft: "5%", marginTop: "5%" }}
                                    href="https://harishreyya.github.io/kimaye/"
                                    target="_blank"
                                >
                                    {" "}
                                    <FaLink /> Demo
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                                    
                </Row>
            </Container>
        </Container>
        </Container>
    );
};
