import React from "react";
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
import ProjectBlock from "./ProjectBlock";

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
				<Bounce right>
					<h1 className="title">Projects</h1>
				</Bounce>
				<hr className="line-info" style={{ width: "140px" }} />
				<div className="space-50" />
				<Row>

					<Col md="4">
						<Bounce right>

							<ProjectBlock
								id={1}
								title="Flask Scheduler"
								date="Oct, 2019"
								description='As a Platform Developer in Incline Artificial Intelligence(IAI), Islamabad,
										I needed to use a flask thread to schedule events on specific times.
										So I created an open-source library using the
										<a href="https://schedule.readthedocs.io/en/stable/"> Python schedule library</a>.
										I configured this library to make it usable with flask thread and run
										the scheduled tasks. This library also uses MongoDB to handle
										scheduled events even if the app crashes after registering an event.
										That means that if an event has been scheduled the library will make
								sure to run it even if the app crashes and restarts any number of times before it.'
								github="https://github.com/firzok/flask_scheduler"
							/>

						</Bounce>
					</Col>

					<Col md="4">
						<Bounce top>

						<ProjectBlock
								id={2}
								title="Rule based traffic simulation"
								date="Jan, 2019"
								description='As an Intern in Automotive Artificial Intelligence(AAI), Islamabad,
										I along with a team worked on creating a rule based traffic simulation
										platform using Python that can test the performance of self driving cars.'
								github="https://github.com/internaccounts123/internship.platform"
							/>

						</Bounce>
					</Col>

					<Col md="4">
						<Bounce left>

							<ProjectBlock
								id={3}
								title="Firzok.github.io"
								date="Oct, 2019"
								description='Using React I created this portfolio for myself.'
								github="https://github.com/firzok/firzok.github.io"
							/>

						</Bounce>
					</Col>

					<Col md="4">
						<Bounce right>

							<ProjectBlock
								id={4}
								title="LeARn"
								date="Aug, 2018 - May, 2019"
								description='leARn is my Final Year Project that I and my team worked on in the last year
										of my bachelors. It is an iOS-based Augmented Reality application designed
										for the iPad Pro. It is targeted towards children to help them improve their
										motivation and cognitive abilities.'
								github="https://github.com/firzok/Learn"
							/>

						</Bounce>
					</Col>

					<Col md="4">
						<Bounce top>

							<ProjectBlock
								id={5}
								title="Wheres My Class"
								date="Nov, 2018 - Dec, 2018"
								description='Wheres My Class is an Android Application designed specifically
										for students of my university to help them with their timetable.
										It notifies them about their upcoming class so they dont have to
										remember each and every class.'
								github="https://github.com/firzok/Wheres-My-Class"
							/>

						</Bounce>
					</Col>

					<Col md="4">
						<Bounce left>

							<ProjectBlock
								id={6}
								title="Distributed Password Checker"
								date="May, 2019"
								description='Distributed Password Search is a distributed approach
										to {<a href="https://haveibeenpwned.com/"> haveibeenpwned.com</a>} where a user can
									 	check if his or her password has been compromised or not.'
								github="https://github.com/firzok/distributed-password-checker"
							/>

						</Bounce>
					</Col>

					<Col md="4">
						<Bounce right>

							<ProjectBlock
								id={7}
								title="Timetable Scheduler"
								date="Dec, 2018"
								description='A semester project for the course of Artificial Intelligence
										where I implemented a Genetic Algorithm to schedule a timetable
										by fulfilling hard and soft constraints.'
								github="https://github.com/firzok/Timetable-Scheduler"
							/>

						</Bounce>
					</Col>

				</Row>
			</Container >
		</div >
	);

}

export default Projects;
