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

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
import PageHeader from "views/PageHeader.jsx";
import Footer from "components/Footer/Footer.jsx";

// sections for this page/view
import Basics from "views/IndexSections/Basics.jsx";
import Navbars from "views/IndexSections/Navbars.jsx";
import Tabs from "views/IndexSections/Tabs.jsx";
import Pagination from "views/IndexSections/Pagination.jsx";
import Notifications from "views/IndexSections/Notifications.jsx";
import AboutMe from "views/AboutMe.jsx";
import JavaScript from "views/IndexSections/JavaScript.jsx";
import NucleoIcons from "views/IndexSections/NucleoIcons.jsx";
import Signup from "views/IndexSections/Signup.jsx";
import Examples from "views/IndexSections/Examples.jsx";
import Download from "views/IndexSections/Download.jsx";
import Projects from "views/Projects.jsx";

class Index extends React.Component {
	componentDidMount() {
		document.body.classList.toggle("index-page");
	}
	componentWillUnmount() {
		document.body.classList.toggle("index-page");
	}
	render() {
		return (
			<>
				<img alt="..." className="path" src={require("assets/img/blob.png")} />
				<IndexNavbar />
				<div className="wrapper">
					<PageHeader />
					<div className="main">
						{/* <Basics />
						<Navbars />
						<Tabs />
						<Pagination />
						<Notifications /> */}
						
						<AboutMe />
						<Projects />
						<NucleoIcons />
						<Signup />
						<Examples />
						<Download />
					</div>
					<Footer />
				</div>
			</>
		);
	}
}

export default Index;
