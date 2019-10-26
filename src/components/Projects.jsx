import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// reactstrap components
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardTitle,
	Container,
	Row,
	Col,
	UncontrolledTooltip
} from "reactstrap";

import Bounce from "react-reveal/Bounce";

function Projects(props) {
	return (
		<div className="section section-typo section-padding-20" id="project" >
			<div className="squares square3" />
			<div className="squares square4" />
			<div className="squares square5" />
			<div className="squares square6 shadow-10" />

			<img
				alt="..."
				className="path"
				src={require("assets/img/path3.png")}
			/>
			<Container>
				<Bounce left>
					<h1 className="title">Projects</h1>
				</Bounce>
				<hr className="line-info" style={{ width: "140px" }} />
				<div className="space-50" />
				<Row>

					<Col md="4">
						<Bounce left>
							<Card className="card-coin card-plain shadow-10 card-min-height">
								<CardTitle className="content-center text-center">
									<div className="space-30" />
									<h2>Flask Scheduler</h2>
									<h4>Oct, 2019</h4>
									<div className="space-30" />
								</CardTitle>
								<CardBody>
									<span>Details</span>
									<h5>
										As a Platform Developer in Incline Artificial Intelligence(IAI), Islamabad,
										I needed to use a flask thread to schedule events on specific times.
										So I created an open-source library using the
										<a href="https://schedule.readthedocs.io/en/stable/"> Python schedule library</a>.
										I configured this library to make it usable with flask thread and run
										the scheduled tasks. This library also uses MongoDB to handle
										scheduled events even if the app crashes after registering an event.
									</h5>
								</CardBody>
								<CardFooter className="text-center">
									<Button
										className="btn-info btn-round btn-sm"
										color="primary"
										id="github1"
										href="https://github.com/firzok/flask_scheduler"
									>
										<i className="fab fa-github-square project-icon" />
									</Button>
									<UncontrolledTooltip placement="top" target="github1" delay={0}>
										View on GitHub
            						</UncontrolledTooltip>
								</CardFooter>
							</Card>
						</Bounce>
					</Col>

					<Col md="4">
						<Bounce left>
							<Card className="card-coin card-plain shadow-10 card-min-height">
								<CardTitle className="content-center text-center">
									<div className="space-30" />
									<h2>Rule based traffic simulation</h2>
									<h4>Jan, 2019</h4>
									<div className="space-30" />
								</CardTitle>
								<CardBody>
									<span>Details</span>
									<h5>
										As an Intern in Automotive Artificial Intelligence(AAI), Islamabad,
										I along with a team worked on creating a rule based traffic simulation
										platform using Python that can test the performance of self driving cars.
									</h5>
								</CardBody>
								<CardFooter className="text-center">
									<Button
										className="btn-info btn-round btn-sm"
										color="primary"
										id="github2"
										href="https://github.com/internaccounts123/internship.platform"
									>
										<i className="fab fa-github-square project-icon" />
									</Button>
									<UncontrolledTooltip placement="top" target="github2" delay={0}>
										View on GitHub
            						</UncontrolledTooltip>
								</CardFooter>
							</Card>
						</Bounce>
					</Col>

					<Col md="4">
						<Bounce left>
							<Card className="card-coin card-plain shadow-10 card-min-height">
								<CardTitle className="content-center text-center">
									<div className="space-30" />
									<h2>Firzok.github.io</h2>
									<h4>Oct, 2019</h4>
									<div className="space-30" />
								</CardTitle>
								<CardBody>
									<span>Details</span>
									<h5>
										Using React I created this portfolio for myself.
									</h5>
								</CardBody>
								<CardFooter className="text-center">
									<Button
										className="btn-info btn-round btn-sm"
										color="primary"
										id="github3"
										href="https://github.com/firzok/firzok.github.io"
									>
										<i className="fab fa-github-square project-icon" />
									</Button>
									<UncontrolledTooltip placement="top" target="github3" delay={0}>
										View on GitHub
            						</UncontrolledTooltip>
								</CardFooter>
							</Card>
						</Bounce>
					</Col>

					<Col md="4">
						<Bounce top>
							<Card className="card-coin card-plain shadow-10 card-min-height">
								<CardTitle className="content-center text-center">
									<div className="space-30" />
									<h2 className="text-center">LeARn</h2>
									<h4>Aug, 2018 - May, 2019</h4>
									<div className="space-30" />
								</CardTitle>
								<CardBody>
									<span>Details</span>
									<h5>
										leARn is my Final Year Project that I and my team worked on in the last year
										of my bachelors. It is an iOS-based Augmented Reality application designed
										for the iPad Pro. It is targeted towards children to help them improve their
										motivation and cognitive abilities.
									</h5>
								</CardBody>
								<CardFooter className="text-center">
									<Button
										className="btn-info btn-round btn-sm"
										color="primary"
										id="github4"
										href="https://github.com/firzok/Learn"
									>
										<i className="fab fa-github-square project-icon" />
									</Button>
									<UncontrolledTooltip placement="top" target="github4" delay={0}>
										View on GitHub
            						</UncontrolledTooltip>
								</CardFooter>
							</Card>
						</Bounce>
					</Col>

					<Col md="4">
						<Bounce right>
							<Card className="card-coin card-plain shadow-10 card-min-height">
								<CardTitle className="content-center text-center">
									<div className="space-30" />
									<h2 className="text-center">Wheres My Class</h2>
									<h4>Nov, 2018 - Dec, 2018</h4>
									<div className="space-30" />
								</CardTitle>
								<CardBody>
									<span>Details</span>
									<h5>
										Wheres My Class is an Android Application designed specifically
										for students of my university to help them with their timetable.
										It notifies them about their upcoming class so they don't have to
										remember each and every class.
									</h5>
								</CardBody>
								<CardFooter className="text-center">
									<Button
										className="btn-info btn-round btn-sm"
										color="primary"
										id="github5"
										href="https://github.com/firzok/Wheres-My-Class"
									>
										<i className="fab fa-github-square project-icon" />
									</Button>
									<UncontrolledTooltip placement="top" target="github5" delay={0}>
										View on GitHub
            						</UncontrolledTooltip>
								</CardFooter>
							</Card>
						</Bounce>
					</Col>

					<Col md="4">
						<Bounce left>
							<Card className="card-coin card-plain shadow-10 card-min-height">
								<CardTitle className="content-center text-center">
									<div className="space-30" />
									<h2>Distributed Password Checker</h2>
									<h4>May, 2019</h4>
									<div className="space-30" />
								</CardTitle>
								<CardBody>
									<span>Details</span>
									<h5>
										Distributed Password Search is a distributed approach
										to {<a href="https://haveibeenpwned.com/"> haveibeenpwned.com</a>} where a user can
									 	check if his or her password has been compromised or not.
									</h5>
								</CardBody>
								<CardFooter className="text-center">
									<Button
										className="btn-info btn-round btn-sm"
										color="primary"
										id="github6"
										href="https://github.com/firzok/distributed-password-checker"
									>
										<i className="fab fa-github-square project-icon" />
									</Button>
									<UncontrolledTooltip placement="top" target="github6" delay={0}>
										View on GitHub
            						</UncontrolledTooltip>
								</CardFooter>
							</Card>
						</Bounce>
					</Col>

					<Col md="4">
						<Bounce top>
							<Card className="card-coin card-plain shadow-10 card-min-height">
								<CardTitle className="content-center text-center">
									<div className="space-30" />
									<h2 className="text-center">Timetable Scheduler</h2>
									<h4>Dec, 2018</h4>
									<div className="space-30" />
								</CardTitle>
								<CardBody>
									<span>Details</span>
									<h5>
										A semester project for the course of Artificial Intelligence
										where I implemented a Genetic Algorithm to schedule a timetable
										by fulfilling hard and soft constraints.
									</h5>
								</CardBody>
								<CardFooter className="text-center">
									<Button
										className="btn-info btn-round btn-sm"
										color="primary"
										id="github7"
										href="https://github.com/firzok/Timetable-Scheduler"
									>
										<i className="fab fa-github-square project-icon" />
									</Button>
									<UncontrolledTooltip placement="top" target="github7" delay={0}>
										View on GitHub
            						</UncontrolledTooltip>
								</CardFooter>
							</Card>
						</Bounce>
					</Col>

				</Row>
			</Container >
		</div >
	);

}

export default Projects;
