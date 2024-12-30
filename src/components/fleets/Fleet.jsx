import React from "react";
import { fleetCardData } from "../../data/card/fleet-card-data";
import FleetCard from "./fleet-card";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Helmet } from 'react-helmet-async';
const Fleet = () => {
  return (
    <>
      <Helmet>
        <title>Fleet | Vietnam Airlines Virtual</title>
        <meta name="description" content="Our Routes" />
      </Helmet>
      <Container className="mt-5 mb-5">
        <Row className="justify-content-center mb-4 page-title">
          <Col xs={12} md={8} className="text-center">
            <h1>Our Fleets</h1>
          </Col>
        </Row>
        <Row className="g-5">
          {fleetCardData.map((data, index) => (
            <Col xs={12} sm={12} md={12} lg={4} > 
              <FleetCard
                key={index}
                image={data.image}
                name={data.name}
                description={data.description}
                details={data.details}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default Fleet;
