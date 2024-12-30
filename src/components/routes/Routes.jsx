import { a, audio } from "framer-motion/client";
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Helmet } from 'react-helmet-async';

const Routes = () => {
  return (
    <>
      <Helmet>
        <title>Routes | Vietnam Airlines Virtual</title>
        <meta name="description" content="Our Routes" />
      </Helmet>
      <Container className="mt-5 mb-5 ">
      <Row className="justify-content-center mb-4 page-title">
        <Col xs={12} md={8} className="text-center ">
          <h1>Our Routes</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4} className="d-flex justify-content-center" style={{width:"100%", height:"auto", objectFit:"contain"}}>
          <Image src="/images/routes/routes.png" fluid />
        </Col>
      </Row>
    </Container>
    </>
    
  );
}

export default Routes;