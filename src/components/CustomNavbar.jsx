import React from "react";
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

} from "reactstrap";

class CustomNavbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapseOpen: false,
			color: "navbar-transparent"
		};
	}
	componentDidMount() {
		window.addEventListener("scroll", this.changeColor);
	}
	componentWillUnmount() {
		window.removeEventListener("scroll", this.changeColor);
	}
	changeColor = () => {
		if (
			document.documentElement.scrollTop > 99 ||
			document.body.scrollTop > 99
		) {
			this.setState({
				color: "bg-info-semi-transparent"
			});
		} else if (
			document.documentElement.scrollTop < 100 ||
			document.body.scrollTop < 100
		) {
			this.setState({
				color: "navbar-transparent"
			});
		}
	};
	toggleCollapse = () => {
		document.documentElement.classList.toggle("nav-open");
		this.setState({
			collapseOpen: !this.state.collapseOpen
		});
	};
	onCollapseExiting = () => {
		this.setState({
			collapseOut: "collapsing-out"
		});
	};
	onCollapseExited = () => {
		this.setState({
			collapseOut: ""
		});
	};
	scrollToDownload = () => {
		document
			.getElementById("download-section")
			.scrollIntoView({ behavior: "smooth" });
	};
	scrollToAboutMe = () => {
		document.getElementById("aboutme").scrollIntoView({ behavior: "smooth" });
	};
	scrollToIntro = () => {
		document.getElementById("intro").scrollIntoView({ behavior: "smooth" });
	}
	render() {
		return (
			<Navbar
				className={"fixed-top " + this.state.color}
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
						{/* <button
							aria-expanded={this.state.collapseOpen}
							className="navbar-toggler navbar-toggler"
							onClick={this.toggleCollapse}
						>
							<span className="navbar-toggler-bar bar1" />
							<span className="navbar-toggler-bar bar2" />
							<span className="navbar-toggler-bar bar3" />
						</button> */}
					</div>
					<Collapse
						className={"justify-content-end " + this.state.collapseOut}
						navbar
						isOpen={this.state.collapseOpen}
						onExiting={this.onCollapseExiting}
						onExited={this.onCollapseExited}
					>
						<Nav navbar>
							<NavItem>
								<NavLink href="#" onClick={this.scrollToIntro}>Intro</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="#" onClick={this.scrollToAboutMe}>
									About me
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="#">Projects</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="#">Work</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="#">Contact</NavLink>
							</NavItem>
							<NavItem>
								<Button
									className="nav-link d-none d-lg-block"
									color="info"
									onClick={this.scrollToDownload}
								>
									<i className="tim-icons icon-single-02" /> Log In
								</Button>
							</NavItem>
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		);
	}
}

export default CustomNavbar;
