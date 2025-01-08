import React from 'react';
import { hubDatas } from "../../data/hubs/hubs-data";
import { Container, Col, Row, Image } from 'react-bootstrap';
import HubLayout from './HubLayout';
import { Helmet } from 'react-helmet-async';

const HubPage = () => {


    return (
        <>
            <Helmet>
                <title>HUBS | Vietnam Airlines Virtual</title>
                <meta name="description" content="Our Hubs" />
            </Helmet>

            <Container>
                <Row className="justify-content-center mb-4 mt-5 page-title">
                    <Col xs={12} md={8} className="text-center">
                        <h1>Our Hubs</h1>
                    </Col>
                </Row>

                <Row className="g-5 mb-5 ">
                    {hubDatas.map((data, index) => (
                        <Col xs={12} sm={12} md={12} lg={12} >
                            <HubLayout
                                key={index}
                                img={data.img}
                                name={data.name}
                                description={data.description}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default HubPage;