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
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.0.0";
import "assets/demo/demo.css";

import Index from "views/Index.jsx";
import LandingPage from "views/LandingPage.jsx";
import RegisterPage from "views/RegisterPage.jsx";
import ProfilePage from "views/ProfilePage.jsx";

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path="/home" render={props => <Index {...props} />} />
			<Route
				path="/landing-page"
				render={props => <LandingPage {...props} />}
			/>
			<Route
				path="/register-page"
				render={props => <RegisterPage {...props} />}
			/>
			<Route
				path="/profile-page"
				render={props => <ProfilePage {...props} />}
			/>
			<Redirect from="/" to="/home" />
		</Switch>
	</BrowserRouter>,
	document.getElementById("root")
);
