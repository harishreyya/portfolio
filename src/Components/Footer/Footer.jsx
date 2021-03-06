import React from "react";
import { Row } from "react-bootstrap";
import "./Footer.css";
import {
    AiFillGithub,
    //AiOutlineTwitter,
    //AiFillInstagram
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { GrResume } from "react-icons/gr";
export const Footer = () => {
    return (
        <Row md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
                Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
                <li className="social-icons">
                    <a
                        href="https://github.com/harishreyya"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons"
                    >
                        <AiFillGithub />
                    </a>
                </li>
                <li className="social-icons">
                    <a
                        href="https://www.linkedin.com/in/r-harish-832793218/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons"
                    >
                        <FaLinkedinIn />
                    </a>
                </li>
                
                <li className="social-icons">
                    <a
                        href="https://drive.google.com/file/d/1R44XHb4YIE-2iqiUMH46-decalOJyBEj/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons"
                        id="resumelink"
                    >
                        <GrResume />
                    </a>
                </li>
               
            </ul>
        </Row>
    );
};
