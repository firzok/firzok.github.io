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


function Education(props) {
    return (

        <div className="section section-typo section-padding-20" id="education">
            <div className="squares square3" />
            <div className="squares square-7" />
            <div className="squares square5" />
            <div className="squares square6 shadow-10" />

            <Container>
                <Bounce left>
                    <h1 className="title">Education</h1>
                </Bounce>
                <hr className="line-info" style={{ width: "170px" }} />
                <div className="space-50" />

                <div>
                    <Row>
                        <Col md="12">
                            <Bounce right>
                                <Card className="card-rounded card-plain card-shadow-10">


                                    <Bounce top>
                                        <CardTitle className="content-center">
                                            <div className="space-30 " />
                                            <a href="http://nu.edu.pk/">
                                                <div class="d-flex justify-content-center">
                                                    <img
                                                        alt="National University of Computer and Emerging Sciences"
                                                        className="d-block content-center"
                                                        src={require("assets/img/NU-logo.png")}
                                                        style={{ width: "200px" }}
                                                        id="nuces"
                                                    />
                                                    <UncontrolledTooltip placement="top" target="nuces" delay={0}>
                                                        FAST - National University of Computer and Emerging Sciences
            					                </UncontrolledTooltip>
                                                </div>
                                            </a>
                                        </CardTitle>
                                    </Bounce>
                                    <CardBody>
                                        <Row>
                                            <Col className="text-justify" md="12">
                                                <span>University</span>
                                                <h4>FAST - National University of Computer and Emerging Sciences</h4>
                                                <span>Degree</span>
                                                <h4>Bachelors in Computer Science</h4>
                                                <span>Time Period</span>
                                                <h4>08/2015 - 06/2019</h4>
                                                <span>CGPA</span>
                                                <h4>3.49 / 4.0</h4>
                                            </Col>
                                        </Row>
                                    </CardBody>

                                </Card>
                            </Bounce>
                        </Col>
                    </Row>
                </div>
            </Container >
        </div >
    );
}

export default Education;