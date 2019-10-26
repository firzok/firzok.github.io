import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// reactstrap components
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	CardTitle,
	ListGroupItem,
	ListGroup,
	Container,
	Row,
	Col,
	UncontrolledTooltip
} from "reactstrap";

import Bounce from "react-reveal/Bounce";

function Projects(props) {
	return (
		<section className="section section-lg section-margin-top-50" id="project" >
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
									<h2>Distributed Password Checker</h2>
									<h4>Jan, 2019</h4>
									<div className="space-30" />
								</CardTitle>
								<CardBody>
									<span>Details</span>
									<h5>
										As an Intern in Automotive Artificial Intelligence(AAI), Islamabad I along with a team worked on creating a rule based traffic simulation platform using Python. We were able to complete the project in 3 weeks.
									</h5>
								</CardBody>
								<CardFooter className="text-center">
									<Button
										className="btn-info btn-round btn-sm"
										color="primary"
										id="github1"
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
						<Bounce top>
							<Card className="card-coin card-plain shadow-10 card-min-height">
								<CardTitle className="content-center text-center">
									<div className="space-30" />
									<h2 className="text-center">LeARn</h2>
									<h4>Aug, 2018 - Aug, 2019</h4>
									<div className="space-30" />
								</CardTitle>
								<CardBody>
									<span>Details</span>
									<h5>
										leARn is my Final Year Project that I am currently working on. It is an iOS based Augmented Reality application designed for children to help them improve their motivation, cognitive abilities and learning skills.
									</h5>
								</CardBody>
								<CardFooter className="text-center">
									<Button
										className="btn-info btn-round btn-sm"
										color="primary"
										id="github2"
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
						<Bounce right>
							<Card className="card-coin card-plain shadow-10 card-min-height">
								<CardTitle className="content-center text-center">
									<div className="space-30" />
									<h2 className="text-center">Wheres My Class</h2>
									<h4>Oct, 2018 - Dec, 2018</h4>
									<div className="space-30" />
								</CardTitle>
								<CardBody>
									<span>Details</span>
									<h5>
										Wheres My Class is an Android Application designed specifically for students of my university to help them with their timetable. It notifies them about their upcoming class so they don't have to remember each and every class.
									</h5>
								</CardBody>
								<CardFooter className="text-center">
									<Button
										className="btn-info btn-round btn-sm"
										color="primary"
										id="github3"
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
						<Bounce left>
							<Card className="card-coin card-plain shadow-10 card-min-height">
								<CardTitle className="content-center text-center">
									<div className="space-30" />
									<h2>Decision Making System</h2>
									<h4></h4>
									<div className="space-30" />
								</CardTitle>
								<CardBody>
									<span>Details</span>
									<h5>
										As an Intern in Automotive Artificial Intelligence(AAI), Islamabad I along with a team worked on creating a rule based traffic simulation platform using Python. We were able to complete the project in 3 weeks.
									</h5>
								</CardBody>
								<CardFooter className="text-center">
									<Button
										className="btn-info btn-round btn-sm"
										color="primary"
										id="github4"
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
						<Bounce top>
							<Card className="card-coin card-plain shadow-10 card-min-height">
								<CardTitle className="content-center text-center">
									<div className="space-30" />
									<h2 className="text-center">F-16 Path Finder</h2>
									<h4></h4>
									<div className="space-30" />
								</CardTitle>
								<CardBody>
									<span>Details</span>
									<h5>
										leARn is my Final Year Project that I am currently working on. It is an iOS based Augmented Reality application designed for children to help them improve their motivation, cognitive abilities and learning skills.
									</h5>
								</CardBody>
								<CardFooter className="text-center">
									<Button
										className="btn-info btn-round btn-sm"
										color="primary"
										id="github5"
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
						<Bounce right>
							<Card className="card-coin card-plain shadow-10 card-min-height">
								<CardTitle className="content-center text-center">
									<div className="space-30" />
									<h2 className="text-center">Wheres My Class</h2>
									<h4>Oct, 2018 - Dec, 2018</h4>
									<div className="space-30" />
								</CardTitle>
								<CardBody>
									<span>Details</span>
									<h5>
										Wheres My Class is an Android Application designed specifically for students of my university to help them with their timetable. It notifies them about their upcoming class so they don't have to remember each and every class.
									</h5>
								</CardBody>
								<CardFooter className="text-center">
									<Button
										className="btn-info btn-round btn-sm"
										color="primary"
										id="github6"
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
										As an Intern in Automotive Artificial Intelligence(AAI), Islamabad I along with a team worked on creating a rule based traffic simulation platform using Python. We were able to complete the project in 3 weeks.
									</h5>
								</CardBody>
								<CardFooter className="text-center">
									<Button
										className="btn-info btn-round btn-sm"
										color="primary"
										id="github7"
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
					<Col md="4">
						<Bounce top>
							<Card className="card-coin card-plain shadow-10 card-min-height">
								<CardTitle className="content-center text-center">
									<div className="space-30" />
									<h2 className="text-center">leARn</h2>
									<h4>Aug, 2018 - Aug, 2019</h4>
									<div className="space-30" />
								</CardTitle>
								<CardBody>
									<span>Details</span>
									<h5>
										leARn is my Final Year Project that I am currently working on. It is an iOS based Augmented Reality application designed for children to help them improve their motivation, cognitive abilities and learning skills.
									</h5>
								</CardBody>
								<CardFooter className="text-center">
									<Button
										className="btn-info btn-round btn-sm"
										color="primary"
										id="github8"
									>
										<i className="fab fa-github-square project-icon" />
									</Button>
									<UncontrolledTooltip placement="top" target="github8" delay={0}>
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
									<h4>Oct, 2018 - Dec, 2018</h4>
									<div className="space-30" />
								</CardTitle>
								<CardBody>
									<span>Details</span>
									<h5>
										Wheres My Class is an Android Application designed specifically for students of my university to help them with their timetable. It notifies them about their upcoming class so they don't have to remember each and every class.
									</h5>
								</CardBody>
								<CardFooter className="text-center">
									<Button
										className="btn-info btn-round btn-sm"
										color="primary"
										id="github9"
									>
										<i className="fab fa-github-square project-icon" />
									</Button>
									<UncontrolledTooltip placement="top" target="github9" delay={0}>
										View on GitHub
            						</UncontrolledTooltip>
								</CardFooter>
							</Card>
						</Bounce>
					</Col>
				</Row>
			</Container >
		</section >
	);

}

export default Projects;
