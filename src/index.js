import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Index from "components/Index.jsx";

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path="/" render={props => <Index {...props} />} />
			<Redirect from="/" to="/" />
		</Switch>
	</BrowserRouter>,
	document.getElementById("root")
);
// For deployment see
// https://medium.com/swlh/deploying-react-apps-to-github-pages-on-master-branch-creating-a-user-site-bc96c2a37dc8