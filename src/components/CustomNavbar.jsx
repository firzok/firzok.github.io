import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
	Button,
	Collapse,
	NavbarBrand,
	Navbar,
	NavItem,
	NavLink,
	Nav,
	Container,
	UncontrolledTooltip

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
	const scrollToDownload = () => {
		document
			.getElementById("download-section")
			.scrollIntoView({ behavior: "smooth" });
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

	return (
		<Navbar
			className={"fixed-top " + color}
			color-on-scroll="100"
			expand="lg"
		>
			<Container>
				<div className="navbar-translate">
					<NavbarBrand
						// data-placement="bottom"
						to="/"
						// rel="noopener noreferrer"
						title="Firzok Nadeem"
						tag={Link}
					>
						<span>Firzok Nadeem</span>
					</NavbarBrand>
				</div>
				<Collapse
					className={"justify-content-end " + collapseOut}
					navbar
					isOpen={collapseOpen}
					onExiting={onCollapseExiting}
					onExited={onCollapseExited}
				>
					<Nav navbar>
						<NavItem>
							<NavLink href="#" onClick={scrollToIntro}>Intro</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#" onClick={scrollToAboutMe}>About Me</NavLink>
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
						<NavItem>
							<Button
								className="nav-link d-none d-lg-block"
								color="info"
								id="login"
							>
								<i className="tim-icons icon-single-02" /> Log In
							</Button>
							<UncontrolledTooltip placement="bottom" target="login" delay={0}>
								Coming Soon
            				</UncontrolledTooltip>
						</NavItem>
					</Nav>
				</Collapse>
			</Container>
		</Navbar>
	);

}

export default CustomNavbar;
