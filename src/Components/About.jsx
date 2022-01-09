import styled from "styled-components";


const Container = styled.div`
    margin-top: 60px;

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

    .about_img > img{
        margin-top:2%;
        width:40%
    }

    .about{
        display: flex;
        background: linear-gradient(
            -45deg,
            
            #8E806A,
            #C3B091,
            #E4CDA7,
            #FFE6BC
        );
        @media only screen and (max-width: 767px) {
            flex-direction:column;
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
        <Container >
            <h1>About</h1>
            <div className="about">
                
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
                <div className="about_img">
                
                <img src="https://previews.123rf.com/images/artinspiring/artinspiring2002/artinspiring200200690/140359653-vector-illustration-of-a-full-stack-developer-working-on-computer-it-professional-programmer-coding-.jpg"/>
            </div>
            </div>
           
            
        </Container>
    );
}
