import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
  Hi everyone, I’m <span className="purple">Sujay S. Jirapure</span>, originally
  from <span className="purple">Akola, India</span>, currently based in Pune.
  <br /><br />
  I am a passionate Full Stack Developer actively seeking new opportunities to
  learn, grow, and contribute to impactful projects.
  <br /><br />
  I completed my Bachelor of Computer Applications (BCA) from Shankarlal
  Khandelwal College, Akola in 2022, And Master of Computer Applications
  (MCA) from Saraswati College, Shegaon in 2025.
  <br /><br />
  Apart from coding, here are a few activities that I genuinely enjoy:
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
