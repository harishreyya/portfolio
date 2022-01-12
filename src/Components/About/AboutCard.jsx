import React from "react";
import "./About.css";
import { Card } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";
export const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple"> Reyya Harish </span>
            from <span className="purple"> Palasa, Andhra Pradesh.</span>
            <br />
            A disciplined and hard-working full-stack web developer with a unique approach to problems.<br/>
             Great at communication and an artist at mind. Looking forward to working at an organization where my skills can be utilized well. 
<br/>
<br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> painting
            </li>
            
            <li className="about-activity">
              <ImPointRight />travelling
            </li>
          </ul>
          <br/>
          <br/>
        </blockquote>
      </Card.Body>
    </Card>
  );
};
