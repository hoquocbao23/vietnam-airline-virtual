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
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Link to="/" className="nav-link"><Image style={{ width: '60px', height: '60px' }} src="/images/logo/vietnam_airlines_favicon.png" /></Link>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto custom-nav" >
              <Link to="/hubs" className="nav-link">HUBS</Link>
              <Link to="/fleet" className="nav-link">FLEET</Link>
              <Link to="/routes" className="nav-link">ROUTES</Link>
              <Link to="/staffs" className="nav-link">STAFF</Link>
              <Link to="/ranks" className="nav-link">RANKS</Link>
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
