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
				<Row>
					<Col md="4">
						<Bounce left>
							<h1 className="title">Projects</h1>
						</Bounce>
					</Col>
				</Row>
				<div className="space-90" />
				<Row>
					<Col md="4">
						<Bounce left>
							<Card className="card-coin card-plain shadow-10">
								<CardTitle className="content-center text-center">
									<div className="space-30" />
									<h2>Project 1</h2>
									<Button
										className="btn-round btn-icon"
										color="primary"

									>
										<i class="fab fa-apple project-icon"></i>
									</Button>

									<div className="space-30" />
								</CardTitle>
								<CardBody>

									<Row>
										<Col className="text-justify" md="12">
											<span>Details</span>
											<h5>
												Detail of projects kghasd hgasdj gsa hasdg jasdg ajdg
												asjd sagdj hajgsd agsdjghas
												</h5>
										</Col>
									</Row>
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
							<Card className="card-coin card-plain shadow-10">
								<CardTitle className="content-center">
									<div className="space-30" />
									<h2 className="text-center">Project 1</h2>
								</CardTitle>
								<CardBody>
									<Row>
										<Col className="text-justify" md="12">
											<span>Details</span>
											<h5>
												Detail of projects kghasd hgasdj gsa hasdg jasdg ajdg
												asjd sagdj hajgsd agsdjghas
												</h5>
										</Col>
									</Row>
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
							<Card className="card-coin card-plain shadow-10">
								<CardTitle className="content-center">
									<div className="space-30" />
									<h2 className="text-center">Project 1</h2>
								</CardTitle>
								<CardBody>
									<Row>
										<Col className="text-justify" md="12">
											<span>Details</span>
											<h5>
												Detail of projects kghasd hgasdj gsa hasdg jasdg ajdg
												asjd sagdj hajgsd agsdjghas
												</h5>
										</Col>
									</Row>
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
				</Row>
				<Row>
					<Col md="4">
						<Bounce left>
							<Card className="card-coin card-plain shadow-10">
								<CardTitle className="content-center text-center">
									<div className="space-30" />
									<h2>Project 1</h2>
									<Button
										className="btn-round btn-icon"
										color="primary"

									>
										<i class="fab fa-apple project-icon"></i>
									</Button>

									<div className="space-30" />
								</CardTitle>
								<CardBody>

									<Row>
										<Col className="text-justify" md="12">
											<span>Details</span>
											<h5>
												Detail of projects kghasd hgasdj gsa hasdg jasdg ajdg
												asjd sagdj hajgsd agsdjghas
												</h5>
										</Col>
									</Row>
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
							<Card className="card-coin card-plain shadow-10">
								<CardTitle className="content-center">
									<div className="space-30" />
									<h2 className="text-center">Project 1</h2>
								</CardTitle>
								<CardBody>
									<Row>
										<Col className="text-justify" md="12">
											<span>Details</span>
											<h5>
												Detail of projects kghasd hgasdj gsa hasdg jasdg ajdg
												asjd sagdj hajgsd agsdjghas
												</h5>
										</Col>
									</Row>
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
							<Card className="card-coin card-plain shadow-10">
								<CardTitle className="content-center">
									<div className="space-30" />
									<h2 className="text-center">Project 1</h2>
								</CardTitle>
								<CardBody>
									<Row>
										<Col className="text-justify" md="12">
											<span>Details</span>
											<h5>
												Detail of projects kghasd hgasdj gsa hasdg jasdg ajdg
												asjd sagdj hajgsd agsdjghas
												</h5>
										</Col>
									</Row>
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
				</Row>
				<Row>
					<Col md="4">
						<Bounce left>
							<Card className="card-coin card-plain shadow-10">
								<CardTitle className="content-center text-center">
									<div className="space-30" />
									<h2>Project 1</h2>
									<Button
										className="btn-round btn-icon"
										color="primary"

									>
										<i class="fab fa-apple project-icon"></i>
									</Button>

									<div className="space-30" />
								</CardTitle>
								<CardBody>

									<Row>
										<Col className="text-justify" md="12">
											<span>Details</span>
											<h5>
												Detail of projects kghasd hgasdj gsa hasdg jasdg ajdg
												asjd sagdj hajgsd agsdjghas
												</h5>
										</Col>
									</Row>
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
							<Card className="card-coin card-plain shadow-10">
								<CardTitle className="content-center">
									<div className="space-30" />
									<h2 className="text-center">Project 1</h2>
								</CardTitle>
								<CardBody>
									<Row>
										<Col className="text-justify" md="12">
											<span>Details</span>
											<h5>
												Detail of projects kghasd hgasdj gsa hasdg jasdg ajdg
												asjd sagdj hajgsd agsdjghas
												</h5>
										</Col>
									</Row>
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
							<Card className="card-coin card-plain shadow-10">
								<CardTitle className="content-center">
									<div className="space-30" />
									<h2 className="text-center">Project 1</h2>
								</CardTitle>
								<CardBody>
									<Row>
										<Col className="text-justify" md="12">
											<span>Details</span>
											<h5>
												Detail of projects kghasd hgasdj gsa hasdg jasdg ajdg
												asjd sagdj hajgsd agsdjghas
												</h5>
										</Col>
									</Row>
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

			</Container>
		</section>
	);

}

export default Projects;
