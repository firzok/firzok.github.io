import React from "react";
import {
  Container,
  Alert
} from "reactstrap";

function Footer(props) {
  return (
    <footer
      className="footer"
      style={{
        background: "radial-gradient(ellipse at bottom, #171941 30%, #10112d 80%)"
      }}
    >
      <Container>
        <h1 className="title">firzok.github.io</h1>
      </Container>
    </footer>
  );
}

export default Footer;
