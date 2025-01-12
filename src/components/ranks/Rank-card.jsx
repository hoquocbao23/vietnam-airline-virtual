import { Button, Card } from "react-bootstrap";



const RankCard = (props) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.logo} className="rank-img" />
        <Card.Body className="text-center custom-card-body">
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.flight_time}</Card.Text>
          <Card.Text>{props.aircraft}</Card.Text>
        </Card.Body>
      </Card>

    </>
  );
};
export default RankCard;