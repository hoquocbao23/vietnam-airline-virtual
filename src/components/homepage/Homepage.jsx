import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./homepage.scss";
const HomePage = () => {
    return (
        <>
      <Container fluid className="banner mb-4">
        <Image style={{ width: '100%', height: 'auto' }} 
            src="public/images/homepage/InfiniteFlight_2024-11-22-04-02-52.JPG" fluid  />
      </Container>

      <Container className="about-us text-center mt-4">
        <Row>
          <Col>
            <h2>About Us</h2>
            <p>
            Vietnam Airlines Virtual is a virtual airline also a vibrant community for aviation enthusiasts who loves to fly Infinite Flight Simulator in Vietnam. 
            With a mission to create a professional and engaging platform, Vietnam Airlines Virtual provides a realistic and captivating flying experience to members. 
            The community currently operates a fleet of three aircraft, offering versatility for various flight routes. Our main hubs are Noi Bai International Airport and Tan Son Nhat International Airport, serving as central points for domestic and international connections. 
            Vietnam Airlines Virtual is not just a place to fulfill the passion for flying but also a hub for networking, learning, and exploring the boundless skies together.
            </p>
          </Col>
        </Row>
      </Container>
     
    </>
    );
}

export default HomePage