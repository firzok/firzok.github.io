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
				</Bounce>
				<hr className="line-info" style={{ width: "160px" }} />
				<div className="space-50" />
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
										A fast learner whose ability to adapt to various
										cultures, identifying and resolving bottlenecks
										have always been a striking feature. I am born
										to think outside the box. Deliverance greater
										than expectancy is what I stand for, and believe
										in.
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
