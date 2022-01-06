import styled from "styled-components";
import TechStack from "./TechStack";
import Proficiencies from "./Proficiencies";
import Projects from "./Projects";

const Container = styled.div`
    margin-top: 80px;

    h1 {
        margin-bottom: 5px;
        color: black;
        font-size: 2em;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
    }

    .top-section {
        padding: 15px;
    }

    .top-section > img {
        width: 150px;
    }

    .about {
         padding-bottom: 30px;
        border-bottom: 1px solid #d8d2d2;
    
             background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab); 
          /*  background: linear-gradient(
                -45deg,
                rgb(150, 150, 155),
                #df7823,
                #766f7a,
                #81db9c,
                #8dd7ee,
                #8b1e82,
                #41445e,
                rgb(187, 148, 148)
            );*/
            background-size: 400% 400%;
            animation: gradient 10s ease-in infinite;
            height: 100vh;
        }
        
       @keyframes gradient {
            0% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0% 50%;
            }
        }
    

    p {
        font-size: 1.1em;
        font-weight: 500;
        color: black;
    }
`;

export default function About() {
    return (
        <Container>
            <div className="about">
                <h1>About</h1>
                <div className="top-section">
                    <img src="slacknewdp.jpeg" alt="" />
                    <p>
                    I am a disciplined and hard-working full-stack web developer
who has a unique approach to problems.<br/>I am Great at
communication and an artistic at mind.<br/>  Looking forward
to working at an organization where my skills can be
utilized well. 
                    </p>
                </div>
            </div>
            <div>
                <TechStack/>
            </div>
            <div>
                <Proficiencies/>
            </div>
            <div>
                <Projects/>
            </div>
            
        </Container>
    );
}
