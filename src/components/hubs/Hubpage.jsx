import { useParams } from "react-router-dom";
import { hubDatas } from "../../data/hubs/hubs-data";
import {Container, Col, Row, Image } from 'react-bootstrap';

const HubPage = () => {
    const { hubId } = useParams(); // Lấy giá trị hubId từ URL
    const hub = hubDatas[hubId];
    if (!hub) {
        return <p>Hub not found!</p>; // Xử lý khi hubId không khớp với dữ liệu
    }

    return (
        <>
        <Container className="mt-4 mb-5" >
            <Row className="justify-content-center text-center mb-4">
                <Col style={{ fontSize: "2rem", fontWeight: "bold" }}>{hub.title}</Col>
            </Row>

            <Row className="justify-content-center">
                <Col xs={12} sm={8} md={6} ><Image src={hub.img} fluid/></Col>
            </Row> 

            <Row className="justify-content-center mt-4">
            <Col xs={12} sm={10} md={8} lg={6} style={{ fontSize: "1.1rem" }}>{hub.description}</Col>
            </Row>                
        </Container>   
        </>
    );
};

export default HubPage;