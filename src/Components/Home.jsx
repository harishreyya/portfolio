import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    color: grey;
    justify-content: center;
    margin-top: -20px;

    .div {
        font-size: 40px;
        font-weight: 700;

        @media only screen and (max-width: 767px) {
            font-size: 20px;
        }
    }

    .highlight {
        color: black;
        font-size:70px;
    }

    img {
        width: 180px;
        margin-bottom: 10px;
        border: 3px solid white;
        border-radius: 50%;

        @media only screen and (max-width: 767px) {
            width: 80px;
        }
    }

    .small-text {
        font-size: 40px;

        @media only screen and (max-width: 767px) {
            font-size: 17px;
        }
    }
`;

export default function Home() {
    return (
        <Container className="body">
            
            <img src="/slacknewdp.jpeg" alt="" />
            <div className="div">
                Hi I am{" "}
                <span className="highlight">Reyya Harish</span> <br />
                <span className="small-text"> A Full-Stack Web Developer</span>
            </div>
            
            
        </Container>
    );
}
