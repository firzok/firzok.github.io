import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.0.0";
import "assets/demo/demo.css";
import "assets/css/app.css";

import Index from "components/Index.jsx";

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path="/home" render={props => <Index {...props} />} />
			<Redirect from="/" to="/home" />
		</Switch>
	</BrowserRouter>,
	document.getElementById("root")
);
