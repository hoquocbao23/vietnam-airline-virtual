import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from 'react-helmet-async';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Ranks | Vietnam Airlines Virtual</title>
        <meta name="description" content="Our Rank" />
      </Helmet>
      <Container fluid className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Row>
          <Col className="text-center">
            <h1>To Be Filled Up With A Better Presentation</h1>
          </Col>
        </Row>
      </Container>
    </>

  );
}

export default HomePage