import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./hub-layout.scss";
// Import the CSS file

const HubLayout = (props) => {
  return (
    <Container className="hub-layout">
      <Row>
        <Col md={4} className="p-0">
          <div className="image-wrapper">
            <Image src={props.img} fluid className="hub-image" />
          </div>
        </Col>
        <Col md={8} className="hub-info p-3 ">
          <h2 className="hub-title">{props.name}</h2>
          <p className="hub-description">{props.description}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default HubLayout;