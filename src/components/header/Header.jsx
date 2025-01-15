import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { btnDatas } from "../../data/button/button-data";
import "./header.scss";

const Header = () => {
  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: "#166987" }} data-bs-theme="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav.Link href="/" className="d-flex align-items-center">
            <Image style={{ width: '60px', height: '60px' }} src="/images/logo/vietnam_airlines_favicon.png" />
          </Nav.Link>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto custom-nav" >
              <Link to="/fleet" className="nav-link">FLEET</Link>
              <Nav.Link href="/hubs">HUBS</Nav.Link>
              <Nav.Link href="/fleet">FLEET</Nav.Link>
              <Nav.Link href="/routes">ROUTES</Nav.Link>
              <Nav.Link href="/staffs">STAFF</Nav.Link>
              <Nav.Link href="/ranks">RANKS</Nav.Link>
            </Nav>
            <div className="d-flex ">
              {btnDatas.map((data, index) => (
                <Button variant="warning" target="_blank" rel="noopener noreferrer" href={data.link} key={index} className="mx-1 custom-button ">
                  {data.name.toUpperCase()}
                </Button>
              ))}
            </div>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>
  );
};

export default Header;
