import { Button, Card } from "react-bootstrap";
import "./staff-card.scss";

const StaffCard = (props) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} className="staff-img" />
        <Card.Body className="text-center custom-card-body">
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.position}</Card.Text>
          <Card.Text>{props.introdution}</Card.Text>
          <div className="d-flex justify-content-center">
            <Button variant="light" target="_blank" rel="noopener noreferrer" href={props.account} className="custom-card-button">
              Visit
            </Button>
          </div>
        </Card.Body>
      </Card>

    </>
  );
};
export default StaffCard;