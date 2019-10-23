import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Button,
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardBody,
    CardFooter

} from "reactstrap";

function WorkExperience(props) {
    return (
        <div className="section section-typo section-padding-20" id="workexperience">
            <div className="squares square3" />
            <div className="squares square-7" />
            <div className="squares square5" />
            <div className="squares square6 shadow-10" />

            <Container>
                <h1 className="title">Work Experience</h1>
                <div className="space-70" />

                <div>
                    <Row>
                        <Col md="12">
                            <Card className="card-coin card-plain shadow-10">
                                <CardTitle className="content-center">
                                    <div className="space-30" />
                                    <h2 className="text-center">Work Experience 1</h2>
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
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <Card className="card-coin card-plain shadow-10">
                                <CardTitle className="content-center">
                                    <div className="space-30" />
                                    <h2 className="text-center">Work Experience 1</h2>
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
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <Card className="card-coin card-plain shadow-10">
                                <CardTitle className="content-center">
                                    <div className="space-30" />
                                    <h2 className="text-center">Work Experience 1</h2>
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
                        </Col>
                    </Row>
                </div>
                {/* <div className="space-50" /> */}
            </Container>
        </div >
    );
}

export default WorkExperience;