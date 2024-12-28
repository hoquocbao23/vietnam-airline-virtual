import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import StaffCard from "../card/staff-card";
import { staffData } from "../../data/card/staff-card-data";
import "../staffs/staff.scss"

const Staff = () => {
    return (
        <>
            <div className="staff">
                <div className="text-center">
                    <h1 className="staff-title">Our Staff</h1>
                </div>
                <Container>
                    <Row className="g-3"> 
                        {staffData.map((data, index) => (
                            <Col xs={12} sm={4} md={4} lg={4}>
                                <StaffCard
                                    key={index}
                                    name={data.name}
                                    position={data.position}
                                    account={data.account}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>

            </div>
        </>
    )
}

export default Staff
