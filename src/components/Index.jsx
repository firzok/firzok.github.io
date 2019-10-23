import React from "react";
import CustomNavbar from "components/CustomNavbar.jsx";
import PageHeader from "components/PageHeader.jsx";
import Footer from "components/Footer.jsx";
import AboutMe from "components/AboutMe.jsx";
import Projects from "components/Projects.jsx";
import WorkExperience from "components/WorkExperience.jsx"
// import "../assets/scss/Orb.scss"

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
						<WorkExperience />
						<Footer />
					</div>
				</div>
			</div>
		);
	}
}

export default Index;
