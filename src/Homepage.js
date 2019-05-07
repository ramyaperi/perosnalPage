import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Card,
  Jumbotron,
  ListGroup
} from "react-bootstrap";
import AboutMe from "./AboutMe.js";
import Resume from "./Resume.js";
import Blog from "./Blog.js";
import img from "./images/stockimage.jpg";
import profile from "./images/profile.jpg";
import "./Homepage.css";

const MyComponents = {
  AboutMe: AboutMe,
  Resume: Resume,
  Blog: Blog
};
var Comp = AboutMe;
class Homepage extends Component {
  state = {
    selectedKey: "AboutMe"
  };
  handleNav(selectedKey) {
    Comp = MyComponents[selectedKey];
    this.setState(state => ({
      selectedKey
    }));
  }

  render() {
    return (
      <Container fluid={true} className="bgImage">
        <Row>
          <Col md={1} style={{ paddingTop: "5%" }}>
            <Navbar bg="light" className="flex-md-column flex-row">
              <Nav
                defaultActiveKey="/AboutMe"
                className="flex-md-column flex-row"
                variant="pills"
                onSelect={selectedKey => this.handleNav(selectedKey)}
              >
                <Nav.Link eventKey="AboutMe" className="fa fas fa-user-circle">
                  <Nav.Item>AboutMe</Nav.Item>
                </Nav.Link>
                <Nav.Link eventKey="Resume" className="fa fas fa-file-text">
                  <Nav.Item>Resume</Nav.Item>
                </Nav.Link>
                <Nav.Link eventKey="Blog" className="fa fas fa-commenting">
                  <Nav.Item>Blog</Nav.Item>
                </Nav.Link>
              </Nav>
            </Navbar>
          </Col>
          <Col md={5} className="pr-0">
            <Card className="card align-self-center">
              <div>
                <Card.Img variant="top" src={img} />
                <Card.ImgOverlay className="d-flex flex-column justify-content-center">
                  <img src={profile} className="rounded-circle mx-auto" />
                </Card.ImgOverlay>
              </div>
              <Card.Body style={{ position: "relative", paddingTop: "15%" }}>
                <Card.Title>
                  <h1>Ramya Peri</h1>
                </Card.Title>
                <Card.Subtitle>Web Developer</Card.Subtitle>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a
                      href="https://www.linkedin.com/in/ramya-peri"
                      className="fa fas fa-linkedin-square"
                    />
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://github.com/ramyaperi"
                      className="fa fab fa-github"
                    />
                  </li>
                </ul>
                <ListGroup className="d-flex flex-row align-items-end">
                  <ListGroup.Item className="flex-fill fa fas fa-download">
                    {/* adding a white space char with out converstion creating
                    random HTML tags*/}
                    {"      "}
                    Download CV
                  </ListGroup.Item>
                  <ListGroup.Item className="flex-fill fa fas fa-address-card">
                    {/* adding a white space char with out converstion creating
                  random HTML tags*/}
                    {"      "}Contact Me
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="pl-0 my-auto">
            <Jumbotron
              style={{
                maxHeight: "90vh",
                overflowY: "auto"
              }}
            >
              <div className="Jumbotron">
                <Comp />
              </div>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Homepage;
