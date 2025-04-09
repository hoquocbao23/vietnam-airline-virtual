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
        <meta name="description" content="homepage" />
      </Helmet>


      <Container fluid className="banner p-0 position-relative">
        {/* Ảnh banner */}
        <Image
          className="banner-image"
          src="/images/homepage/main_banner.png"
          fluid
        />
        <div className="welcome-text position-absolute w-100 text-center">
          <h1>
            <span className="">Xin chào Việt Nam!</span>
          </h1>
        </div>
      </Container>

      <div className="welcome-section" style={{ backgroundColor: "#166987", color: "#FFFFFF", padding: "3rem 0" }}>
        <Container className="text-center"  >
          <Row>
            <Col>
              <h1>Welcome to Vietnam Airlines Virtual</h1>
              <div
                style={{
                  width: "30%", // Tăng chiều dài đường kẻ
                  height: "4px",
                  backgroundColor: "#FAB12F",
                  margin: "0 auto 1rem auto", // Căn giữa
                }}
              ></div>
              <p style={{ fontSize: "1.2rem" }}>
                Vietnam's virtual national airline in Infinite Flight skies.
                We are pleased to welcome you on board. With many destinations connecting the world,
                a professional and respectful environment in our VA will give you the best experience to accompany us.
                Vietnam Airlines Virtual will not only bring you joy to fly but also to explore the beautiful Vietnam landscape and culture.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      
        <Container fluid className=" mt-4">
          <Row className="justify-content-center">
            <Col xs={12} sm={10} md={8} lg={6} xl={7}>
              <Image
                src="/images/homepage/landmark.png"
                fluid
                className="w-100"
                alt="Banner"
              />
            </Col>
          </Row>
        </Container>

        <hr class="short-hr"></hr>

        <Container className="homepage-message text-center">
          <Row>
            <Col>
              <h1>About Us</h1>
              <p>
                Vietnam Airlines Virtual is not just a virtual airline but also a vibrant community for aviation enthusiasts who love flying on Infinite Flight Simulator.
                With a mission to create a professional and engaging platform, Vietnam Airlines Virtual provides a realistic and captivating flying experience to members.
                The community currently operates a fleet of three aircraft, offering versatility for various flight routes.
                Our main hubs are Noi Bai International Airport and Tan Son Nhat International Airport, serving as central points for domestic and international connections. Vietnam Airlines Virtual is not just a place to fulfill the passion for flying but also a hub for networking, learning, and exploring the boundless skies together.
              </p>
            </Col>
          </Row>
        </Container>

        <Container fluid >
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


        <hr class="short-hr"></hr>

        <Container className="homepage-message text-center ">
          <Row>
            <Col>
              <h1>A Message From CEO</h1>
              <p>
                A warm welcome to Vietnam Airlines Virtual, this is a place where you can explore, learn how to fly, share experiences, and enjoy our beautiful Vietnam landscape.
                I, TaiXipo, as a Vietnamese, will ensure the quality and professional operations of all pilots and also fly with joy together.
                I am proud to welcome you on board to our VA!
              </p>
            </Col>
          </Row>

          <Row xs={2} sm={3} md={8} lg={6} xl={7} className="justify-content-center mt-3 mb-3">
            <Image
              src="/images/staffs/tai_xipo.png"
              roundedCircle fluid
            />
          </Row>


          <h4 style={{ textAlign: 'center' }}>IFVN-TaiXipo</h4>
          <p style={{ color: "#8B91A1", textAlign: 'center' }}>Chief Executive Officer</p>
        </Container>
      



    </>
  );
}

export default HomePage