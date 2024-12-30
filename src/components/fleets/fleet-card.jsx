import { Button, Card, Image } from "react-bootstrap";

const TextWithLineBreaks = ({ text }) => {
  const formattedDetails = text.replace(/\.\s*(?=[A-Z])/g, ".<br />");
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: formattedDetails,
      }}
    />
  );
};

const FleetCard = (props) => {
  return (
    <>
      <Card style={{ width: "18rem", margin: "auto" }} >
        <Card.Img variant="top" src={props.image}/>
        <Card.Body>
          <Card.Title className="text-center fw-bold">{props.name}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <hr />
          <Card.Text ><TextWithLineBreaks text={props.details} /></Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default FleetCard;
