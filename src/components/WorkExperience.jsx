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
    CardHeader,
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
                                        <Row>
                                            <Col className="text-justify" md="12">
                                                <span>Position</span>
                                                <h4>Intern</h4>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="text-justify" md="12">
                                                <span>Details</span>
                                                <h5>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
												</h5>
                                            </Col>
                                        </Row>
                                    </CardBody>

                                    <CardFooter className="text-center">
                                        <Button
                                            className="btn-info btn-round btn-sm icon-spacing"
                                            color="primary"
                                        >
                                            <i className="fab fa-linkedin project-icon" />
                                        </Button>
                                        <Button
                                            className="btn-info btn-round btn-sm icon-spacing"
                                            color="primary"
                                        >
                                            <i className="fab fa-facebook-square project-icon" />
                                        </Button>
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
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="text-justify" md="12">
                                                <span>Details</span>
                                                <h5>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
												</h5>
                                            </Col>
                                        </Row>
                                    </CardBody>

                                    <CardFooter className="text-center">
                                        <Button
                                            className="btn-info btn-round btn-sm icon-spacing"
                                            color="primary"
                                        >
                                            <i className="fab fa-linkedin project-icon" />
                                        </Button>
                                        <Button
                                            className="btn-info btn-round btn-sm icon-spacing"
                                            color="primary"
                                        >
                                            <i className="fab fa-facebook-square project-icon" />
                                        </Button>
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
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="text-justify" md="12">
                                                <span>Details</span>
                                                <h5>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
												</h5>
                                            </Col>
                                        </Row>
                                    </CardBody>

                                    <CardFooter className="text-center">
                                        <Button
                                            className="btn-info btn-round btn-sm icon-spacing"
                                            color="primary"
                                        >
                                            <i className="fab fa-linkedin project-icon" />
                                        </Button>
                                        <Button
                                            className="btn-info btn-round btn-sm icon-spacing"
                                            color="primary"
                                        >
                                            <i className="fab fa-facebook-square project-icon" />
                                        </Button>
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
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="text-justify" md="12">
                                                <span>Details</span>
                                                <h5>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
												</h5>
                                            </Col>
                                        </Row>
                                    </CardBody>

                                    <CardFooter className="text-center">
                                        <Button
                                            className="btn-info btn-round btn-sm icon-spacing"
                                            color="primary"
                                        >
                                            <i className="fab fa-linkedin project-icon" />
                                        </Button>
                                        <Button
                                            className="btn-info btn-round btn-sm icon-spacing"
                                            color="primary"
                                        >
                                            <i className="fab fa-facebook-square project-icon" />
                                        </Button>
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