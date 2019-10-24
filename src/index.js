import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

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
