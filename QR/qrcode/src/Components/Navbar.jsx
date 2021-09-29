

import react, { Component } from "react";
import Reactdom from "react-dom";
import "./style.css"
import { Container, Navbar, Nav } from "react-bootstrap";


class Navcomp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark"  className="navv" expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
              <Navbar.Brand href="#home" className="navbrandname">
                Adani Digital Airports
              </Navbar.Brand>
            
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
              <div className="navdiv navstyle">
                  <Nav.Link href="/Dashboard" className=" navlinks">
                    Dashboard
                  </Nav.Link>
                </div>
                <div className="navdiv  navstyle">
                  <Nav.Link href="/Dutyfree" className=" navlinks">
                    Duty Free
                  </Nav.Link>
                </div>
                <div className="navdiv navstyle">
                  <Nav.Link href="/Foodcourt" className=" navlinks">
                    Food Court
                  </Nav.Link>
                </div>
              
                <div className="navdiv navstyle">
                  <Nav.Link href="/Forms" classNasme=" navlinks">
                    Forms
                  </Nav.Link>
                </div>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Navcomp;
