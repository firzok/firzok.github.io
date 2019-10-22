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
	Col
} from "reactstrap";

class Projects extends React.Component {
	componentDidMount() {
		document.body.classList.toggle("landing-page");
	}
	componentWillUnmount() {
		document.body.classList.toggle("landing-page");
	}
	render() {
		return (
			<div className="wrapper">
				<section className="section section-lg section-coins">
					<img
						alt="..."
						className="path"
						src={require("assets/img/path3.png")}
					/>
					<Container>
						<Row>
							<Col md="4">
								<h1 className="title">Projects</h1>
							</Col>
						</Row>
						<Row>
							<Col md="4">
								<Card className="card-coin card-plain">
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
										>
											<i className="fab fa-github-square project-icon" />
										</Button>
									</CardFooter>
								</Card>
							</Col>
							<Col md="4">
								<Card className="card-coin card-plain">
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
										>
											<i className="fab fa-github-square project-icon" />
										</Button>
									</CardFooter>
								</Card>
							</Col>
							<Col md="4">
								<Card className="card-coin card-plain">
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
										>
											<i className="fab fa-github-square project-icon" />
										</Button>
									</CardFooter>
								</Card>
							</Col>
						</Row>
						<Row>
							<Col md="4">
								<Card className="card-coin card-plain">
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
										>
											<i className="fab fa-github-square project-icon" />
										</Button>
									</CardFooter>
								</Card>
							</Col>
							<Col md="4">
								<Card className="card-coin card-plain">
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
										>
											<i className="fab fa-github-square project-icon" />
										</Button>
									</CardFooter>
								</Card>
							</Col>
							<Col md="4">
								<Card className="card-coin card-plain">
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
										>
											<i className="fab fa-github-square project-icon" />
										</Button>
									</CardFooter>
								</Card>
							</Col>
						</Row>
						<Row>
							<Col md="4">
								<Card className="card-coin card-plain">
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
										>
											<i className="fab fa-github-square project-icon" />
										</Button>
									</CardFooter>
								</Card>
							</Col>
							<Col md="4">
								<Card className="card-coin card-plain">
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
										>
											<i className="fab fa-github-square project-icon" />
										</Button>
									</CardFooter>
								</Card>
							</Col>
							<Col md="4">
								<Card className="card-coin card-plain">
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
										>
											<i className="fab fa-github-square project-icon" />
										</Button>
									</CardFooter>
								</Card>
							</Col>
						</Row>
					</Container>
				</section>
			</div>
		);
	}
}

export default Projects;
