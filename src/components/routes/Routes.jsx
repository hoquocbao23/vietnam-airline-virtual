import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
const Routes = () => {
  return (
    <Container className="mt-5 mb-5 ">
      <Row className="justify-content-center mb-4">
        <Col xs={12} md={8} className="text-center">
          <h1>Our Routes</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4} className="d-flex justify-content-center">
          <Image src="/images/routes/routes.png" />
        </Col>
      </Row>
    </Container>
  );
}

export default Routes;