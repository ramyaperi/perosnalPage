import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Resume extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h3> Resume </h3>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>
            <h5> Experience </h5>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>
            <p style={{ marginBottom: "0", fontSize: "100%", color: "green" }}>
              Full Stack Developer
            </p>
            <p style={{ fontSize: "70%", color: "gray" }}>
              Crossover 08/2018-present
            </p>
            <hr />
            <ul className="a" style={{ fontSize: "70%" }}>
              <li>
                Responsable for developnemnt of new features and maintance of
                the product while ensuring the quality of the overall product
                and highly orgenized to be albe to deliver in remote teams.
              </li>
              <li>
                Agile scrum based development of new user stories tracking using
                jira and confluence.
              </li>
              <li>
                Know how of React JS based application with DynamoDB,Amazon S3,
                AWS lambda as backend.
              </li>
            </ul>
            <hr />
            <p style={{ marginBottom: "0", fontSize: "100%", color: "green" }}>
              Senior Software Engineer
            </p>
            <p style={{ fontSize: "70%", color: "gray" }}>
              Infosys, India 08/2010-03/2012
            </p>
            <hr />
            <ul className="a" style={{ fontSize: "70%" }}>
              <li>
                Development, Enhancement of multiple projects on PLM, operated
                from the Offshore development center at Mysore, including
                regular periodic meeting with Clien
              </li>
              <li>
                Development of new features as well as customization of existing
                PLM packages like e-matrix developed in java. Developed
                functionality that allowed definition and identification of
                various manufacturing locations for routing parts effectively
                and productively
              </li>
            </ul>
          </Col>
          <Col>
            <p style={{ marginBottom: "0", fontSize: "100%", color: "green" }}>
              Technical Lead
            </p>
            <p style={{ fontSize: "70%", color: "gray" }}>
              Infosys, Switerland 03/2012-02/2015
            </p>
            <hr />
            <ul className="a" style={{ fontSize: "70%" }}>
              <li>
                worked directly with client team at client location for a
                critical Engineering project. Including requirement analysis and
                co-ordinating between multiple partners and developers.
              </li>
              <li>
                Proposed and delivered a tool to extract data in 4s directly
                from client specific database, replacing 80s from the local back
                up that was formerly created to improve performance (20x
                performance improvement)
              </li>
              <li>
                Developmet of java swings based desktop application, extendable
                from a properties file and integrated with external excutable
                files that run the in the background and extract output back to
                the application.
              </li>
              <li>
                Developmet of java swings based desktop application, extendable
                from a properties file and integrated with external excutable
                files that run the in the background and extract output back to
                the application.
              </li>
            </ul>
            <hr />

            <p style={{ marginBottom: "0", fontSize: "100%", color: "green" }}>
              Software Engineer
            </p>
            <p style={{ fontSize: "70%", color: "gray" }}>
              Infosys, India 08/2010-08/2012
            </p>
            <hr />
            <ul className="a" style={{ fontSize: "70%" }}>
              <li>
                Reverse engineering of legacy FORTRAN code and implementing the
                same with enhanced features with C and JAVA using Eclipse RCP
                framework.
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h5> Education </h5>
            <hr />
            <p style={{ marginBottom: "0", fontSize: "100%", color: "green" }}>
              BACHELORS IN TECHNOLOGY 7/2004 -5/2008
            </p>
            <p style={{ marginBottom: "0", fontSize: "70%", color: "gray" }}>
              Andhra University-Vishakapatnam
            </p>
            <p style={{ fontSize: "70%", color: "gray" }}>
              Specilization: Information Technology
            </p>

            <p style={{ marginBottom: "0", fontSize: "100%", color: "green" }}>
              SUN certified java programmer (SCJP)
            </p>

            <p style={{ marginBottom: "0", fontSize: "100%", color: "green" }}>
              React nano degree program udacity
            </p>

            <p style={{ marginBottom: "0", fontSize: "100%", color: "green" }}>
              Nanodegree Full Stack Web Developer udacity
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h3> Skills </h3>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>
            <p style={{ marginBottom: "0", fontSize: "100%", color: "green" }}>
              React & Redux <br /> Node js <br /> java <br /> PLM (product
              lifecycle management) <br /> Agile Concepts <br /> SQL
            </p>
          </Col>
          <Col>
            <p style={{ marginBottom: "0", fontSize: "100%", color: "green" }}>
              HTML
              <br /> CSS <br /> Bootstrap <br /> AWS <br /> React test utils
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3> Languages </h3>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>
            <p style={{ marginBottom: "0", fontSize: "100%", color: "green" }}>
              English - fluent (C2) <br /> Deutsch - good(B2)
            </p>
          </Col>
          <Col>
            <p style={{ marginBottom: "0", fontSize: "100%", color: "green" }}>
              Hindi - fluent (C1)
              <br /> Telugu - mother tounge
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Resume;
