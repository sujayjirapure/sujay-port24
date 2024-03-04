import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sujay S. Jirapure </span>
            from  <span className="purple"> Akola, India.</span>
            <br />
            I am currently looking for opportunities .
            <br />
            I have completed BCA at shankarlal khandelwal college , Akola in 2022.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Cricket (U19 vidhbha player)
            </li>
            <li className="about-activity">
              <ImPointRight /> Sketching
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sujay</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
