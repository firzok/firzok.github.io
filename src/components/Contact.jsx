import React from "react";
import Bounce from "react-reveal/Bounce";
import {
    Container,
    Row,
    UncontrolledTooltip
} from "reactstrap"

export default function Contact(props) {

    return (
        <div className="section section-typo section-padding-20" id="contact">
            <div className="squares square4" />
            <div className="squares square5" />
            <div className="squares square6 shadow-10" />
            <div className="squares square5" />
            <Container>
                <Bounce left>
                    <h1 className="title">Get in touch</h1>
                </Bounce>
                <hr className="line-info" style={{ width: "205px" }} />
                <div className="space-50" />
                <div>
                    <Bounce right>
                        <Row>

                            <a href="mailto:firzok.nadeem@gmail.com" id="mail">
                                <img
                                    alt="..."
                                    className="contact-icon"
                                    src={require("assets/img/gmail.png")}
                                />
                            </a>
                            <UncontrolledTooltip placement="top" target="mail" delay={0}>
                                Email Me
            				</UncontrolledTooltip>

                            <a href="https://github.com/firzok" id="git">
                                <img
                                    alt="..."
                                    className="contact-icon"
                                    src={require("assets/img/github-logo.png")}
                                />
                            </a>
                            <UncontrolledTooltip placement="top" target="git" delay={0}>
                                GitHub
            				</UncontrolledTooltip>

                            <a href="https://www.linkedin.com/in/firzok-nadeem/" id="linkedin">
                                <img
                                    alt="..."
                                    className="contact-icon"
                                    src={require("assets/img/linkedin.png")}
                                />
                            </a>
                            <UncontrolledTooltip placement="top" target="linkedin" delay={0}>
                                LinkedIn
            				</UncontrolledTooltip>

                            <a href="https://www.facebook.com/Firzoknadeem" id="fb">
                                <img
                                    alt="..."
                                    className="contact-icon"
                                    src={require("assets/img/facebook.png")}
                                />
                            </a>
                            <UncontrolledTooltip placement="top" target="fb" delay={0}>
                                Facebook
            				</UncontrolledTooltip>

                            <a href="https://www.instagram.com/ifirzok/" id="instagram">
                                <img
                                    alt="..."
                                    className="contact-icon"
                                    src={require("assets/img/instagram.png")}
                                />
                            </a>
                            <UncontrolledTooltip placement="top" target="instagram" delay={0}>
                                Instagram
            				</UncontrolledTooltip>

                            <a href="https://twitter.com/Firzok" id="twitter">
                                <img
                                    alt="..."
                                    className="contact-icon"
                                    src={require("assets/img/twitter.png")}
                                />
                            </a>
                            <UncontrolledTooltip placement="top" target="twitter" delay={0}>
                                Twitter
            				</UncontrolledTooltip>
                        </Row>
                        <div className="space-90"></div>
                    </Bounce>
                </div>
            </Container>


        </div>
    )
}