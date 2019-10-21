import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./landingpage";
import Project from "./projects";
import Aboutme from "./aboutme";
import Contact from "./contact";
import Resume from "./resume";

const Main = () => (
	<Switch>
		<Route exact path="/" component={LandingPage} />
		<Route path="/aboutme" component={Aboutme} />
		<Route exact path="/contact" component={Contact} />
		<Route exact path="/projects" component={Project} />
		<Route exact path="/resume" component={Resume} />
	</Switch>
);

export default Main;
