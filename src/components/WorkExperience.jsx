import React from "react";
import {
    Button,
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardBody,
    CardFooter,
    UncontrolledTooltip

} from "reactstrap";

import Bounce from 'react-reveal/Bounce';


function WorkExperience(props) {
    return (

        <div className="section section-typo section-padding-20" id="workexperience">
            <div className="squares square3" />
            <div className="squares square-7" />
            <div className="squares square5" />
            <div className="squares square6 shadow-10" />

            <Container>
                <Bounce left>
                    <h1 className="title">Work Experience</h1>
                </Bounce>
                <hr className="line-info" style={{ width: "284px" }} />
                <div className="space-50" />
                <div>
                    <Row>
                        <Col md="12">
                            <Bounce right>
                                <Card className="card-rounded card-plain card-shadow-10">

                                    <CardTitle className="content-center">
                                        <div className="space-30 " />
                                        <div class="d-flex justify-content-center">
                                            <img
                                                alt="Incline Artificial Intelligence"
                                                className="d-block content-center"
                                                src={require("assets/img/iai.png")}
                                                style={{ width: "250px" }}
                                                id="iai"
                                            />
                                            <UncontrolledTooltip placement="top" target="iai" delay={0}>
                                                Incline Artificial Intelligence
            					            </UncontrolledTooltip>
                                        </div>
                                    </CardTitle>

                                    <CardBody>
                                        <span>Position</span>
                                        <h4>Platform Developer (Python)</h4>
                                        <h4>Jul, 2019 - Present</h4>
                                        <span>Details</span>
                                        <h5>
                                            Surveillance Team:<br />
                                            As part of the Surveillance team I worked on a Micro Service-Based Architecture
                                            to build a Surveillance System by using different hardware instruments like Walk-Through
                                            Metal Detectors, Biometric Attendance System and CCTV Cameras etc.<br />
                                            HRMS Team:<br />
                                            As part of the HRMS team, I am working on the Front End using React.
                                        </h5>
                                    </CardBody>

                                    <CardFooter className="text-center">
                                        <Button
                                            className="btn-info btn-round btn-sm"
                                            color="primary"
                                            href="http://incline-ai.com/"
                                            id="w1"
                                        >
                                            <i class="fas fa-globe project-icon" />
                                        </Button>
                                        <UncontrolledTooltip placement="top" target="w1" delay={0}>
                                            View Website
            						    </UncontrolledTooltip>
                                        <Button
                                            className="btn-info btn-round btn-sm"
                                            color="primary"
                                            href="https://www.linkedin.com/company/incline-artificial-intelligence/"
                                            id="li1"
                                        >
                                            <i className="fab fa-linkedin project-icon" />
                                        </Button>
                                        <UncontrolledTooltip placement="top" target="li1" delay={0}>
                                            View on LinkedIn
            						    </UncontrolledTooltip>
                                        <Button
                                            className="btn-info btn-round btn-sm"
                                            color="primary"
                                            href="https://www.facebook.com/InclineAI/"
                                            id="fb1"
                                        >
                                            <i className="fab fa-facebook-square project-icon" />
                                        </Button>
                                        <UncontrolledTooltip placement="top" target="fb1" delay={0}>
                                            View on Facebook
            						    </UncontrolledTooltip>
                                    </CardFooter>

                                </Card>
                            </Bounce>
                        </Col>

                        <Col md="12">
                            <Bounce left>
                                <Card className="card-rounded card-plain card-shadow-10">

                                    <CardTitle className="content-center">
                                        <div className="space-30 " />
                                        <div class="d-flex justify-content-center">
                                            <img
                                                alt="Automotive Artificial Intelligence"
                                                className="d-block content-center"
                                                src={require("assets/img/aai.svg")}
                                                style={{ width: "250px" }}
                                                id="aai"
                                            />
                                            <UncontrolledTooltip placement="top" target="aai" delay={0}>
                                                Automotive Artificial Intelligence
            					            </UncontrolledTooltip>

                                        </div>

                                    </CardTitle>

                                    <CardBody>
                                        <Row>
                                            <Col className="text-justify" md="12">
                                                <span>Position</span>
                                                <h4>Intern</h4>
                                                <h4>Jan, 2019</h4>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="text-justify" md="12">
                                                <span>Details</span>
                                                <h5>
                                                    Working as an Intern in AAI was one of the best working experience.
                                                    The environment, work and seniors were all very helpful and encouraged
                                                    creativity and out of the box thinking. I worked in the Platform team
                                                    there. I along with a team of 5 worked on a Rule based Traffic simulation
                                                    that we completed in 3 weeks.
												</h5>
                                            </Col>
                                        </Row>
                                    </CardBody>

                                    <CardFooter className="text-center">
                                        <Button
                                            className="btn-info btn-round btn-sm"
                                            color="primary"
                                            href="https://www.automotive-ai.com/"
                                            id="w2"
                                        >
                                            <i class="fas fa-globe project-icon" />
                                        </Button>
                                        <UncontrolledTooltip placement="top" target="w2" delay={0}>
                                            View Website
            						    </UncontrolledTooltip>
                                        <Button
                                            className="btn-info btn-round btn-sm"
                                            color="primary"
                                            href="https://www.linkedin.com/company/automotive-artificial-intelligence-aai-gmbh/"
                                            id="li2"
                                        >
                                            <i className="fab fa-linkedin project-icon" />
                                        </Button>
                                        <UncontrolledTooltip placement="top" target="li2" delay={0}>
                                            View on LinkedIn
            						    </UncontrolledTooltip>
                                        {/* <Button
                                            className="btn-info btn-round btn-sm"
                                            color="primary"
                                            href="https://www.facebook.com/InclineAI/"
                                            id="fb2"
                                        >
                                            <i className="fab fa-facebook-square project-icon" />
                                        </Button>
                                        <UncontrolledTooltip placement="top" target="fb2" delay={0}>
                                            View on Facebook
            						    </UncontrolledTooltip> */}
                                    </CardFooter>

                                </Card>
                            </Bounce>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <Bounce right>
                                <Card className="card-rounded card-plain card-shadow-10">

                                    <CardTitle className="content-center">
                                        <div className="space-30 " />
                                        <div class="d-flex justify-content-center">
                                            <img
                                                alt="Bentley Systems"
                                                className="d-block content-center"
                                                src={require("assets/img/bentley.png")}
                                                style={{ width: "250px" }}
                                                id="bentley"
                                            />
                                            <UncontrolledTooltip placement="top" target="bentley" delay={0}>
                                                Bentley Systems
            					            </UncontrolledTooltip>
                                        </div>
                                    </CardTitle>

                                    <CardBody>
                                        <Row>
                                            <Col className="text-justify" md="12">
                                                <span>Position</span>
                                                <h4>Intern</h4>
                                                <h4>Jun, 2018 - Aug, 2018</h4>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="text-justify" md="12">
                                                <span>Details</span>
                                                <h5>
                                                    At Bentley, I worked as an Intern in the iModel Tools.
                                                    I integrated Microsoft Rush which is an automated Package
                                                    Manager for Node Applications. After its successful completion,
                                                    I was able to write Python Automation scripts that generated Graphs
                                                    based on the tests entered and passed by different developers
                                                    working at Bentley in different departments.
												</h5>
                                            </Col>
                                        </Row>
                                    </CardBody>

                                    <CardFooter className="text-center">
                                        <Button
                                            className="btn-info btn-round btn-sm"
                                            color="primary"
                                            href="https://www.bentley.com/"
                                            id="w3"
                                        >
                                            <i class="fas fa-globe project-icon" />
                                        </Button>
                                        <UncontrolledTooltip placement="top" target="w3" delay={0}>
                                            View Website
            						    </UncontrolledTooltip>
                                        <Button
                                            className="btn-info btn-round btn-sm"
                                            color="primary"
                                            href="https://www.linkedin.com/company/bentley-systems/"
                                            id="li3"
                                        >
                                            <i className="fab fa-linkedin project-icon" />
                                        </Button>
                                        <UncontrolledTooltip placement="top" target="li3" delay={0}>
                                            View on LinkedIn
            						    </UncontrolledTooltip>
                                        <Button
                                            className="btn-info btn-round btn-sm"
                                            color="primary"
                                            href="https://www.facebook.com/pages/Bentley-Systems-Islamabad/304143156342593"
                                            id="fb3"
                                        >
                                            <i className="fab fa-facebook-square project-icon" />
                                        </Button>
                                        <UncontrolledTooltip placement="top" target="fb3" delay={0}>
                                            View on Facebook
            						    </UncontrolledTooltip>
                                    </CardFooter>

                                </Card>
                            </Bounce>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <Bounce left>
                                <Card className="card-rounded card-plain card-shadow-10">

                                    <CardTitle className="content-center">
                                        <div className="space-30 " />
                                        <div class="d-flex justify-content-center">
                                            <img
                                                alt="Reveal Lab"
                                                className="d-block content-center"
                                                src={require("assets/img/reveal.png")}
                                                style={{ width: "250px" }}
                                                id="reveal"
                                            />
                                            <UncontrolledTooltip placement="top" target="reveal" delay={0}>
                                                Reveal Lab
            					            </UncontrolledTooltip>

                                        </div>

                                    </CardTitle>

                                    <CardBody>
                                        <Row>
                                            <Col className="text-justify" md="12">
                                                <span>Position</span>
                                                <h4>Intern</h4>
                                                <h4>May, 2017 - Jul, 2017</h4>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="text-justify" md="12">
                                                <span>Details</span>
                                                <h5>
                                                    As an Intern in Reveal Lab, my task was to learn and implement different
                                                    Artificial Intelligence and Machine Learning concepts.
                                                </h5>
                                            </Col>
                                        </Row>
                                    </CardBody>

                                    <CardFooter className="text-center">
                                        <Button
                                            className="btn-info btn-round btn-sm"
                                            color="primary"
                                            href="http://reveal.ml/"
                                            id="w4"
                                        >
                                            <i class="fas fa-globe project-icon" />
                                        </Button>
                                        <UncontrolledTooltip placement="top" target="w4" delay={0}>
                                            View Website
            						    </UncontrolledTooltip>
                                        <Button
                                            className="btn-info btn-round btn-sm"
                                            color="primary"
                                            href="https://www.facebook.com/revealai/"
                                            id="fb4"
                                        >
                                            <i className="fab fa-facebook-square project-icon" />
                                        </Button>
                                        <UncontrolledTooltip placement="top" target="fb4" delay={0}>
                                            View on Facebook
            						    </UncontrolledTooltip>
                                    </CardFooter>

                                </Card>
                            </Bounce>
                        </Col>
                    </Row>
                </div>
                {/* <div className="space-50" /> */}
            </Container >
        </div >
    );
}

export default WorkExperience;