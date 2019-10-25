import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";
import Bounce from 'react-reveal/Bounce';


function AboutMe(props) {

	return (
		<div className="section section-typo section-padding-20" id="aboutme">
			<div className="squares square3" />
			<div className="squares square4" />
			<div className="squares square5" />
			<div className="squares square6 shadow-10" />

			<Container>
				<Bounce left>
					<h1 className="title">About Me</h1>
					<div className="space-70" />
				</Bounce>

				<div>
					<Row>

						<Col xs={2} md={2}>
							<Bounce bottom>
								<img
									alt="..."
									className="img-fluid rounded-circle shadow-20"
									src={require("assets/img/Firzok.jpg")}
									style={{ width: "250px" }}
								/>
							</Bounce>
						</Col>

						<Col xs={4} md={10}>
							<div className="typography-line">
								<Bounce right>
									<h2>
										Hi, my name is Firzok Nadeem, I am a Software Engineer by
										profession. I am currently doing Bachelors in Computer
										Science from FAST National University of Computer and
										Emerging Sciences, Islamabad, Pakistan. I have done various
										projects on different technologies including iOS, Android,
										Python, C++ and Java some of them are mentioned below. I
										have also done Internships in International companies like
										Automotive Artificial Intelligence and Bentley Systems both
										located in Islamabad.
									</h2>
								</Bounce>
							</div>
						</Col>
					</Row>
				</div>
				{/* <div className="space-50" /> */}
			</Container>
		</div >
	);

}

export default AboutMe;
