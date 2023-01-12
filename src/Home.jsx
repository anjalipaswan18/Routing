// import React from "react";
// import { Link } from "react-router-dom";

// import "./main.css";
// function Home() {
//   return (
//     <div className="Main-page-list">
//       <Link className="Link" to="/home">
//         Home
//       </Link>
//       <Link className="Link" to="/about">
//         About
//       </Link>
//       <Link className="Link" to="/contact">
//         Contact
//       </Link>
//       <Link className="Link" to="/message">
//         Message
//       </Link>
//     </div>
//   );
// }

// export default Home;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <Navbar bg="dark" variant="dark">
      {/* <Navbar bg="light" expand="lg"> */}
      <Container>
        <Navbar.Brand href="./home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="./about">About</Nav.Link>
            <Nav.Link href="./contact">Contact</Nav.Link>
            <Nav.Link href="./message">Message</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Home;
