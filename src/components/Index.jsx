/*!

=========================================================
* BLK Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import CustomNavbar from "components/CustomNavbar.jsx";
import PageHeader from "components/PageHeader.jsx";
import Footer from "components/Footer.jsx";
import AboutMe from "components/AboutMe.jsx";
import Projects from "components/Projects.jsx";

class Index extends React.Component {
	componentDidMount() {
		document.body.classList.toggle("index-page");
	}
	componentWillUnmount() {
		document.body.classList.toggle("index-page");
	}
	render() {
		return (
			<div>
				<img alt="..." className="path" src={require("assets/img/blob.png")} />
				<CustomNavbar />
				<div className="wrapper">
					<PageHeader />
					<div className="main">
						<img alt="..." className="path" src={require("assets/img/path1.png")} />
						<AboutMe />
						<Projects />
						<Footer />
					</div>
				</div>
			</div>
		);
	}
}

export default Index;
