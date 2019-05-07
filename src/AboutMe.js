import React, { Component } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./AboutMe.css";

class AboutMe extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h3> About Me </h3>
            <hr />
            <p>
              I am Ramya, currently living in München, Deutschland. I have good
              experience in web development.
            </p>
            <hr />
          </Col>
        </Row>
        {/*
        <Row>
          <Col>
            <h5>Hobbies</h5>
            <hr />
          </Col>
        </Row>
        <Row>
          <Carousel>
            <Carousel.Item>
              <p />
            </Carousel.Item>
          </Carousel>
          <hr />
        </Row>
        */}
        <Row>
          <Col>
            <h5>Testimonials</h5>

            <p style={{ marginTop: "0", fontSize: "60%", color: "gray" }}>
              From linkedin
            </p>

            <hr />
          </Col>
        </Row>
        <Row>
          <Carousel>
            <Carousel.Item>
              <p style={{ marginTop: "0", fontSize: "90%", color: "green" }}>
                Tomas Klauz, Client Manager
              </p>
              <p>
                I would like to recommend Ramya for her programming skills, but
                also for her great personal behaviour. Ramya is motivated,
                quickly learning person with helthy ambitious and good way of
                working. Best regards. Tomas Klauz
              </p>
            </Carousel.Item>
            <Carousel.Item>
              <p style={{ marginTop: "0", fontSize: "90%", color: "green" }}>
                Pankaj Bajaj, Client Program Director
              </p>
              <p>
                I had the pleasure of working with Ramya who was responsible for
                a complex business and performance oriented application. The
                Project required working with global team along with learning
                custom database for Engineering calculations. She was able to
                quickly comprehend overall landscape along with integrating well
                with global team to enhance the architecture as per business
                needs. she is a diligent professional with focus on the details
                and good communication skills and a delightful person with
                positive attitude and pleasure to work with. I would highly
                recommend Ramya as she would be an asset to any team.
              </p>
            </Carousel.Item>
            <Carousel.Item>
              <p style={{ marginTop: "0", fontSize: "90%", color: "green" }}>
                Chetan Bhandi, Manager
              </p>
              <p>
                Ramya during her stint in Infosys worked with me in two
                projects. One of them involved enhancements in PLM package
                Enovia V6 2009x. When she joined the project she didn't have the
                privilege of well defined ramp-up time. But she picked up the
                needed package concepts in quick time and started working
                directly. She already had a good Java knowledge which helped her
                in delivering on time. The second time when we came together was
                in a large program for a European transport giant. The project
                assigned to her was about migration and consolidation of
                different clearcase sites. It was again new domain for her but
                she was on top of it soon. During the project she got some
                health issues and was not able to travel to office. But after
                providing the laptop and connections she could work from home
                and finished her work well ahead of time. As her project manager
                in both the projects she worked with me, based on my evaluation,
                she is very professional in her attitude towards work. She is
                technically sound and has quick learning ability. She works
                diligently to ensure the timelines are met.
              </p>
            </Carousel.Item>
            <Carousel.Item>
              <p style={{ marginTop: "0", fontSize: "90%", color: "green" }}>
                Surya Prakash, TeamMate
              </p>
              <p>
                Ramya has strong understanding of programming concepts and goes
                that extra mile to deliver things on time. Very committed and
                career driven professional, Has very good communication skills,
                can handle pressure situations with ease and has good problem
                solving/analytical skills. She has received several accolades
                for her performance in the project i've worked with her. Clearly
                an asset to any team she is part of
              </p>
            </Carousel.Item>
            <Carousel.Item>
              <p style={{ marginTop: "0", fontSize: "90%", color: "green" }}>
                Tirimula Rao Benala, Professor
              </p>
              <p>
                As a student, Ramya is very hard working. She has excellent
                aptitude and attitude. She always thinks out of box. She is a
                good leader. She has worked as student coordinator for various
                events. She has excellent communication skills and never say die
                attitude. She has done her under graduate project under my
                guidance. She also published a paper in a Journal & conference.
                Overally I would say she is an asset for any organisation she
                works for.
              </p>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    );
  }
}

export default AboutMe;
