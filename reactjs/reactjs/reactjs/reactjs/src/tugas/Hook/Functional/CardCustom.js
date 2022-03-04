import { Card, Button } from "react-bootstrap";
const CardCustom = ({urlToImage, title, description, url }) => {
   
  return (
    <Card>
      <Card.Img variant="top" src={urlToImage} style={{height: 500, width: 'auto', margin: 10}} />
      <Card.Body bg="dark">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={url}> Selengkapnya </Button>
      </Card.Body>
    </Card>
  );
};

export default CardCustom;
