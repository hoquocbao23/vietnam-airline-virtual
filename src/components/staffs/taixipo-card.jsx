import { Button, Card, Image  } from "react-bootstrap";
import useDevice from "../../hook/useDevice";
import "./staff-card.scss";

const TaiXipoCard = (props) => {
    const isMobile = useDevice();
  return (
    <>
      

      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Card style={{ 
            width: isMobile ? "25rem" : "45rem", 
            textAlign: "center", 
            borderRadius: "10px" , 
            borderColor: "white"}}>
          <Card.Body>
            <div style={{ marginBottom: "15px" }}>
              <Image className="staff-img"
                src={props.image} // Replace this with your actual image URL
                roundedCircle
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
            </div>
            <Card.Subtitle className="mb-2 text-muted">{props.position}</Card.Subtitle>
            <Card.Title style={{ fontWeight: "bold" }}>{props.name}</Card.Title>
            <Card.Text style={{ fontSize: "14px", color: "#555" }}>
              {props.introdution}
            </Card.Text>
            <div className="d-flex justify-content-center">
              <Button variant="light" target="_blank" rel="noopener noreferrer" href={props.account} className="custom-card-button">
                IFC Profile
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>

    </>
  );
};
export default TaiXipoCard;