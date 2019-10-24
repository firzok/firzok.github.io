import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function PageHeader(props) {
	return (
		<div className="index-page page-header header-filter">
			<div className="squares square1" />
			<div className="squares square2" />
			<div className="squares square3" />
			<div className="squares square4 shadow-10" />
			<div className="squares square5" />
			<div className="squares square6 shadow-20" />
			<div className="squares square7" />

			<Container id="intro">
				<div className="content-center brand">
					<h1 className="h1-seo">Firzok Nadeem</h1>
					{/* <h3 className="d-none d-sm-block">
							A fast learner whose ability to adapt to various cultures,
							identifying and resolving bottlenecks have always been a striking
							feature. Born to think outside the box. Deliverance greater than
							expectancy is what I stand for, and believe in.
						</h3> */}
				</div>
			</Container>
		</div>
	);
}

export default PageHeader;
