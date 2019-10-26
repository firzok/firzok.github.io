import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
	Collapse,
	NavbarBrand,
	Navbar,
	NavItem,
	NavLink,
	Nav,
	Container,
	Row,
	Col

} from "reactstrap";

function CustomNavbar(props) {

	const [collapseOpen, setCollapseOpen] = useState(false)
	const [collapseOut, setCollapseOut] = useState("")
	const [color, setColor] = useState("navbar-transparent")

	useEffect(() => {
		window.addEventListener("scroll", changeColor);

		return function cleanup() {
			window.removeEventListener("scroll", changeColor);
		}
	});

	const changeColor = () => {
		if (
			document.documentElement.scrollTop > 99 ||
			document.body.scrollTop > 99
		) {
			setColor("bg-info-semi-transparent")
		} else if (
			document.documentElement.scrollTop < 100 ||
			document.body.scrollTop < 100
		) {
			setColor("navbar-transparent")
		}
	};
	const toggleCollapse = () => {
		document.documentElement.classList.toggle("nav-open");
		setCollapseOpen(!collapseOpen)
	};
	const onCollapseExiting = () => {
		setCollapseOut("collapsing-out")
	};
	const onCollapseExited = () => {
		setCollapseOut("")
	};
	const scrollToAboutMe = () => {
		document.getElementById("aboutme").scrollIntoView({ behavior: "smooth" });
	};
	const scrollToIntro = () => {
		document.getElementById("intro").scrollIntoView({ behavior: "smooth" });
	}
	const scrollToProject = () => {
		document.getElementById("project").scrollIntoView({ behavior: "smooth" });
	}
	const scrollToWorkExperience = () => {
		document.getElementById("workexperience").scrollIntoView({ behavior: "smooth" });
	}
	const scrollToContact = () => {
		document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
	}
	const scrollToEducation = () => {
		document.getElementById("education").scrollIntoView({ behavior: "smooth" });
	}

	return (
		<Navbar
			className={"fixed-top " + color}
			color-on-scroll="100"
			expand="lg"
			style={{ background: "radial - gradient(ellipse at bottom, #292D61 30 %, #171941 80 %)" }}
		>
			<Container>
				<div className="navbar-translate">
					<NavbarBrand
						data-placement="bottom"
						to="/"
						rel="noopener noreferrer"
						title="Firzok Nadeem"
						tag={Link}
					>
						<span>Firzok Nadeem • </span>
						Portfolio
					</NavbarBrand>
					<button
						aria-expanded={collapseOpen}
						className="navbar-toggler navbar-toggler"
						onClick={toggleCollapse}
					>
						<span className="navbar-toggler-bar bar1" />
						<span className="navbar-toggler-bar bar2" />
						<span className="navbar-toggler-bar bar3" />
					</button>
				</div>
				<Collapse
					className={"justify-content-end " + collapseOut}
					navbar
					isOpen={collapseOpen}
					onExiting={onCollapseExiting}
					onExited={onCollapseExited}
				>
					<div className="navbar-collapse-header">
						<Row>
							<Col className="collapse-brand" xs="6">
								<h3>
									Firzok Nadeem
                  				</h3>
							</Col>
							<Col className="collapse-close text-right" xs="6">
								<button
									aria-expanded={collapseOpen}
									className="navbar-toggler"
									onClick={toggleCollapse}
								>
									<i class="fa fa-times" aria-hidden="true"></i>
								</button>
							</Col>
						</Row>
					</div>
					<Nav navbar>
						<NavItem>
							<NavLink href="#" onClick={scrollToIntro}>Intro</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#" onClick={scrollToAboutMe}>About Me</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#" onClick={scrollToEducation}>Education</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#" onClick={scrollToProject}>Projects</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#" onClick={scrollToWorkExperience}>Work Experience</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#" onClick={scrollToContact}>Contact</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Container>
		</Navbar>
	);


	return (
		<Navbar
			className={"fixed-top " + color}
			color-on-scroll="100"
			expand="lg"
		>
			<Container>
				<div className="navbar-translate">
					<NavbarBrand
						data-placement="bottom"
						to="/"
						rel="noopener noreferrer"
						title="Designed and Coded by Creative Tim"
						tag={Link}
					>
						<span>Firzok Nadeem  •  </span>
						Portfolio
			  </NavbarBrand>
					<button
						aria-expanded={collapseOpen}
						className="navbar-toggler navbar-toggler"
						onClick={toggleCollapse}
					>
						<span className="navbar-toggler-bar bar1" />
						<span className="navbar-toggler-bar bar2" />
						<span className="navbar-toggler-bar bar3" />
					</button>
				</div>
				<Collapse
					className={"justify-content-end " + collapseOut}
					navbar
					isOpen={collapseOpen}
					onExiting={onCollapseExiting}
					onExited={onCollapseExited}
				>
					<div className="navbar-collapse-header">
						<Row>
							<Col className="collapse-brand" xs="6">
								<a href="#pablo" onClick={e => e.preventDefault()}>
									BLK•React
                  </a>
							</Col>
							<Col className="collapse-close text-right" xs="6">
								<button
									aria-expanded={collapseOpen}
									className="navbar-toggler"
									onClick={toggleCollapse}
								>
									<i class="fa fa-times" aria-hidden="true"></i>
								</button>
							</Col>
						</Row>
					</div>
					<Nav navbar>
						<NavItem className="p-0">
							<NavLink
								data-placement="bottom"
								href="https://twitter.com/CreativeTim"
								rel="noopener noreferrer"
								target="_blank"
								title="Follow us on Twitter"
							>
								<i className="fab fa-twitter" />
								<p className="d-lg-none d-xl-none">Twitter</p>
							</NavLink>
						</NavItem>
						<NavItem className="p-0">
							<NavLink
								data-placement="bottom"
								href="https://www.facebook.com/CreativeTim"
								rel="noopener noreferrer"
								target="_blank"
								title="Like us on Facebook"
							>
								<i className="fab fa-facebook-square" />
								<p className="d-lg-none d-xl-none">Facebook</p>
							</NavLink>
						</NavItem>
						<NavItem className="p-0">
							<NavLink
								data-placement="bottom"
								href="https://www.instagram.com/CreativeTimOfficial"
								rel="noopener noreferrer"
								target="_blank"
								title="Follow us on Instagram"
							>
								<i className="fab fa-instagram" />
								<p className="d-lg-none d-xl-none">Instagram</p>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink tag={Link} to="/">
								Back to Kit
				  </NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://github.com/creativetimofficial/blk-design-system-react/issues">
								Have an issue?
				  </NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Container>
		</Navbar>
	);

}

export default CustomNavbar;
