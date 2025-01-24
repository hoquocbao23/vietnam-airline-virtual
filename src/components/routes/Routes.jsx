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

            <p>At Vietnam Airlines Virtual, we have a pretty wide network connecting the world.
              With over 30 International Routes and over 50 Domestic routes will give you a variety choices to fly.
              As we continue to cooperate with other VAs in the future, our route network will be expanded more.</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} sm={8} md={6} lg={4} className="d-flex justify-content-center" style={{ width: "100%", height: "auto", objectFit: "contain" }}>
            <Image src="/images/routes/routes.png" fluid />
          </Col>

          <Row >
            <Col className="text-center mt-4" style={{fontSize: "1.5rem"}}>
              <p>See our route database in <a target="_blank" rel="noopener noreferrer" href="https://airtable.com/appheCAXOX6H0pVdZ/shrbQhmqTLYudAe7O">here</a></p>
              </Col>

          </Row>


        </Row>
      </Container>
    </>

  );
}

export default Routes;