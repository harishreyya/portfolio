import styled from "styled-components";
import ProjectItem from "./ProjectItem";

const Proj = styled.div`
    margin-top: 80px;
    padding-bottom: 40px;

    .items {
        margin: auto;
        padding: 10px;
        display: flex;
        width: 90%;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    h1 {
        margin-bottom: 5px;
        color: #5c5b5b;
        font-size: 2em;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
    }
`;

export default function Projects() {
    const data = [
        {
            id: 1,
            title: "Lybrate-clone",
            desc: "Lybrate.com innovative online doctor database gives you access to over 150,000 highly trained medical experts.So you can ask a doctor anything you want.",
            demo: null,
            github: "https://github.com/m-sehrawat/Lybrate-Website-Clone-Version-2.0",
            Demo:"https://m-sehrawat.github.io/Lybrate-Website-Clone/frontend/landingpage.html",
            main: "https://user-images.githubusercontent.com/87423101/141508718-e9148092-a7e3-4394-ba9a-4ce78666d9a7.png",
            stack: [
                "/html.webp",
                "css.webp",
                "javascript.webp",
                "nodejs.webp",
                "mongodb.webp",
                "express.webp",
            ],
        },
        {
            id: 2,
            title: "Kimaye",
            desc: "KIMAYE is an Indian e-commerce company.Its a fruits door step delivery website",
            demo: null,
            github:"https://github.com/harishreyya/kimaye",
            Demo:"https://harishreyya.github.io/kimaye/",
            main: "https://user-images.githubusercontent.com/87423101/135589828-fb8a042e-34d4-4a6e-a7ce-27bd0e1dcb7b.png",
            stack: [
                "/html.webp",
                "css.webp",
                "javascript.webp",
                
        
            ],
        },
    ];
    return (
        <Proj>
            <h1>Projects</h1>

            <div className="items">
                {data.map((el) => (
                    <div key={el.id}>
                        <ProjectItem el={el}></ProjectItem>
                    </div>
                ))}
            </div>
        </Proj>
    );
}
