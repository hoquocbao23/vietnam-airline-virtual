import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from 'react-helmet-async';
import { rankCardData } from "../../data/card/rank-card-data";
import RankCard from "./Rank-card";
import "./rank.scss"

const Rank = () => {
  return (
    <>
      <Helmet>
        <title>Ranks | Vietnam Airlines Virtual</title>
        <meta name="description" content="Our Rank" />
      </Helmet>

      <Container className="mt-5 mb-5">
        <Row className="justify-content-center mb-4 page-title">
          <Col xs={12} md={8} className="text-center">
            <h1>Our Ranks</h1>
          </Col>
        </Row>
        

        <Row className="g-5 justify-content-center">
          {/* Render Regular */}
          <Col xs={6} md={8} className="text-center mt-5 mb-0 ">
            <h3 className="rank-type">Regular Rank</h3>
          </Col>
          <Row className="g-5 justify-content-center rank-card-container mt-0">
            {rankCardData
              .filter(data => data.type === 'Regular Rank')
              .map((data, index) => (
                <Col
                  className="d-flex justify-content-center p-2 "
                  xs={6} sm={6} md={12} lg={4}
                  key={index}
                >
                  <RankCard
                    key={data.id}
                    logo={data.logo}
                    name={data.name}
                    flight_time={data.flight_time}
                    aircraft={data.aircraft}
                  />
                </Col>
              ))}
          </Row>


          

          <Col xs={12} md={8} className="text-center mt-5 mb-0 ">
            <h3 className="rank-type">Membership Rank</h3>
          </Col>
          <Row className="g-5 justify-content-center rank-card-container mt-0">
            {rankCardData
              .filter(data => data.type === 'Membership Rank')
              .map((data, index) => (
                <Col
                  className="d-flex justify-content-center p-2"
                  xs={6} sm={12} md={12} lg={4}
                  key={index}
                >
                  <RankCard
                    key={data.id}
                    logo={data.logo}
                    name={data.name}
                    flight_time={data.flight_time}
                    aircraft={data.aircraft}
                  />
                </Col>
              ))}
          </Row>

        </Row>
      </Container>
    </>

  );
}

export default Rank