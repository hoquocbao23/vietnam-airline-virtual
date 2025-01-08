import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./homepage.scss";
import { Helmet } from 'react-helmet-async';
import StaffCard from "../staffs/staff-card";
const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home | Vietnam Airlines Virtual</title>
        <meta name="description" content="Our Routes" />
      </Helmet>
      <Container fluid className="banner mb-4 p-0">
        <Image style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          src="/images/homepage/main_banner.png" fluid />
      </Container>

      <Container className="about-us text-center mt-4">
        <Row>
          <Col>
            <h2>About Us</h2>
            <p>
              Vietnam Airlines Virtual is not just a virtual airline but also a vibrant community for aviation enthusiasts who love flying on Infinite Flight Simulator.
              With a mission to create a professional and engaging platform, Vietnam Airlines Virtual provides a realistic and captivating flying experience to members.
              The community currently operates a fleet of three aircraft, offering versatility for various flight routes.
              Our main hubs are Noi Bai International Airport and Tan Son Nhat International Airport, serving as central points for domestic and international connections. Vietnam Airlines Virtual is not just a place to fulfill the passion for flying but also a hub for networking, learning, and exploring the boundless skies together.
            </p>
          </Col>
        </Row>
      </Container>

      <Container fluid className="banner mb-4">
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6} xl={7}>
            <Image
              src="/images/homepage/banner_1.png"
              fluid
              className="w-100"
              alt="Banner"
            />
          </Col>
        </Row>
      </Container>



      <Container className="about-us text-center mt-4">
        <Row>
          <Col>
            <h2>A Message From CEO</h2>
            <p>
              A warm welcome to Vietnam Airlines Virtual, this is a place where you can explore, learn how to fly, share experiences, and enjoy our beautiful Vietnam landscape.
              I, TaiXipo, as a Vietnamese, will ensure the quality and professional operations of all pilots and also fly with joy together.
              I am proud to welcome you on board to our VA!
            </p>
          </Col>
        </Row>

        <Row xs={2} sm={3} md={8} lg={6} xl={7} className="justify-content-center mt-3 mb-3">
          <Image
            src="/images/staffs/tai_xipo.jpeg"
            roundedCircle fluid
          />
        </Row>


        <h3 style={{  textAlign: 'center' }}>IFVN-TaiXipo</h3>
        <p style={{ color: "#8B91A1", textAlign: 'center' }}>Chief Executive Officer</p>
      </Container>


    </>
  );
}

export default HomePage