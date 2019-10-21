import React, { Component } from "react";
import { Grid, Cell } from "react-mdl/lib/Grid";

class Landing extends Component {
	render() {
		return (
			<div style={{ width: "100%", margin: "auto" }}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<img
							src="http://bootdey.com/img/Content/avatar/avatar7.png"
							alt="avatar"
							className="avatar-img"
						/>
						<div className="banner-text">
							<h1>Software Engineer</h1>
							<hr />

							<p>
								Python | iOS | MacOS | Linux | C++ | Golang | Swift | JavaScript
								| React | HTML/CSS | MongoDB
							</p>

							<div className="social-links">
								{/* Linked In */}
								<a
									href="https://linkedin.com/in/firzok-nadeem/"
									target="_blank"
									rel="noopener noreferer"
								>
									<i className="fa fa-linkedin-square" aria-hidden="true" />
								</a>

								{/* GitHub */}
								<a
									href="https://github.com/firzok"
									target="_blank"
									rel="noopener noreferer"
								>
									<i className="fa fa-github-square" aria-hidden="true" />
								</a>

								{/* Facebook */}
								<a
									href="https://facebook.com/Firzoknadeem"
									target="_blank"
									rel="noopener noreferer"
								>
									<i class="fa fa-facebook-square"></i>
								</a>

								{/* Instagram */}
								<a
									href="https://instagram.com/ifirzok/"
									target="_blank"
									rel="noopener noreferer"
								>
									<i class="fa fa-instagram"></i>
								</a>

								{/* Email */}
								<a
									href="mailto:firzok.nadeem@gmail.com"
									target="_blank"
									rel="noopener noreferer"
								>
									<i class="fa fa-envelope"></i>
								</a>
							</div>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Landing;
