import React, { useState, useEffect } from "react";
import CustomNavbar from "components/CustomNavbar.jsx";
import PageHeader from "components/PageHeader.jsx";
import Footer from "components/Footer.jsx";
import AboutMe from "components/AboutMe.jsx";
import Projects from "components/Projects.jsx";
import WorkExperience from "components/WorkExperience.jsx"
import Contact from "components/Contact.jsx"
import Education from "components/Education.jsx"
import { DominoSpinner } from "react-spinners-kit";

function Index(props) {

	const [pageLoading, setPageLoading] = useState(true)
	const isMobile = window.innerWidth < 480;
	const loaderSize = isMobile ? 350 : 700;

	useEffect(() => {

		document.body.classList.toggle("index-page");
		wait(2000);
		return () => {
			document.body.classList.toggle("index-page")
		};
	});

	const sleep = (milliseconds) => {
		return new Promise((resolve) => setTimeout(resolve, milliseconds));
	};

	const wait = async (milliseconds = 5000) => {
		await sleep(milliseconds);
		setPageLoading(false)
	};

	if (pageLoading) {
		return (
			<div className="loader-pos-center">
				<DominoSpinner
					size={loaderSize}
					color="#479fd6"
					loading={pageLoading}
				/>
			</div >
		)
	}
	else {
		return (
			<div>
				<img alt="..." className="path" src={require("assets/img/blob.png")} />
				<div className="wrapper">
					<PageHeader className="content-center" />
					<div className="main">
						<img alt="..." className="path" src={require("assets/img/path1.png")} />
						<AboutMe />
						<Education />
						<Projects />
						<WorkExperience />
						<Contact />
						<Footer />
					</div>
				</div>
				<CustomNavbar />
			</div>

		)
	}
}

export default Index;
