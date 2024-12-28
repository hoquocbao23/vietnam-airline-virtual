import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
const Routes = () => {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="src/images/routes/routes.png" />
        </Col>
      </Row>
    </Container>
  );
}

export default Routes;