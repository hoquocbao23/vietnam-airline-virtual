import { Button, Card } from "react-bootstrap";

const FleetCard = (props) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} className="" />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default FleetCard;
