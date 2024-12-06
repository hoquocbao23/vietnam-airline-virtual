import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { btnDatas } from "../../data/button/button-data";
const Header = () => {
  return (
    <>
      <Navbar style={{ backgroundColor: "#166987" }} data-bs-theme="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav.Link href="#home">VNVA LOGO</Nav.Link>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavDropdown
                title="HUBS"
                id="basic-nav-dropdown"
                data-bs-theme="dark"
              >
                <NavDropdown.Item href="hubs/vvts">
                  Tan Son Nhat International Airport
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="hubs/vvnb">
                  Noi Bai International Airport
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="fleet">FLEET</Nav.Link>
              <Nav.Link href="routes">ROUTES</Nav.Link>
              <Nav.Link href="ranks">RANKS</Nav.Link>
              <Nav.Link href="about">ABOUT US</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="d-flex">
            {btnDatas.map((data, index) => (
              <Button key={index} variant="warning" className="mx-2">
                {data.name.toUpperCase()}
              </Button>
            ))}
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
