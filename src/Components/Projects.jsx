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
            desc: "Lybrate.com innovative online doctor database gives you access to over 150,000 highly trained medical experts. So you can ask a doctor anything you want.",
            demo: null,
            github: "https://m-sehrawat.github.io/Lybrate-Website-Clone/frontend/landingpage.html",
            Demo:"https://drive.google.com/file/d/10dzxdQXBFoev6XhebczGTo7pruGhu-E1/view?usp=sharing",
            main: "/Lybrate-Logo.webp",
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
            github:"https://harishreyya.github.io/kimaye/",
            Demo:"https://drive.google.com/file/d/1rLmyA-dCT4KQuEmZ5Tw0l87JKlZJFvGf/view?usp=sharing",
            main: "/kimaye_logo.png",
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
