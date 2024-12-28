import { Button, Card } from "react-bootstrap";


const StaffCard = (props) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} className="staff-img" />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.position}</Card.Text>
          <div className="d-flex justify-content-center">
            <Button href={props.account}>Visit</Button>
          </div>

        </Card.Body>
      </Card>
    </>
  );
};
export default StaffCard;