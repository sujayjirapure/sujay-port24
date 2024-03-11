import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import sujayflipkart from "../../Assets/Projects/sujay-flipkart.png";
import chatify from "../../Assets/Projects/chatify.png";
import sujaywhe from "../../Assets/Projects/sujay-whe.png";
import sujayimdb from "../../Assets/Projects/sujay-imdb.png";
import sujayport from "../../Assets/Projects/sujay-port.png";
import sujaypass from "../../Assets/Projects/sujay-pass.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sujayport}
              isBlog={false}
              title="Portfolio wedsite"
              techstack="Techstack :- HTML ,CSS ,Javascript , React js ,Bootstrap , API ,etc."
              description="A portfolio website is a curated, online space that showcases work. It’s one of the most practical and memorable ways to share your work with press, potential collaborators or employers."
              ghLink="https://github.com/sujayjirapure/sujay-port24"
              demoLink="https://sujay-port24.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sujayimdb}
              isBlog={false}
              title="Movie Store ( IMDb clone )"
              techstack="Techstack :- HTML ,CSS ,Javascript , React js ,Bootstrap ,API ,etc."
              description=" Movie Store is an IMDb-inspired web application that provides a platform for movie enthusiasts to discover and
              explore a vast collection of movies and TV shows.
              users can create accounts to save and track their favorite movies and TV shows. Movie-Store is a must-have tool for movie
              buffs and anyone who loves to watch film."
              ghLink="https://github.com/sujayjirapure/imdb_clone"
              demoLink="https://imdb-clone-eight-kappa.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sujayflipkart}
              isBlog={false}
              title="Flipkart clone"
              techstack="Techstack :- HTML ,CSS ,Javascript , React js ,Bootstrap ,API ,etc."
              description="This is an clone of E-commerce website named flipkart in which diffrent type of product is shown and user can add the product in the shopping cart too and there is a feature of login logout."
              ghLink="https://github.com/sujayjirapure/Flipkart-Clone---React-Project---05dkojyayxba"
              demoLink="https://loquacious-valkyrie-388288.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sujaywhe}
              isBlog={false}
              title="Weather App"
              techstack="Techstack :- HTML ,CSS ,Javascript ."
              description="This weather app use API to fetch data of diffrent cities weather and displays the data in UI."
              ghLink="https://github.com/sujayjirapure/weather-app"
              demoLink="https://sujayjirapure.github.io/weather-app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sujaypass}
              isBlog={false}
              title="Passagner data manager"
              techstack="Techstack :- HTML ,CSS ,Javascript ."
              description="This is a dummy airline data application in which uses can perform CRUD opration it means user can read ,delete , update ,delete the demo airline data which is fetch from API with the help of ajax in javascript."
              ghLink="https://github.com/sujayjirapure/passanger-data/tree/main"
              demoLink="https://sujayjirapure.github.io/passanger-data/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
