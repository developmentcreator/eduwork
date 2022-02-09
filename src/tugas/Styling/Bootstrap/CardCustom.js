import { Card, Button } from "react-bootstrap";
const CardCustom = ({ foto, judul, keterangan, tanggal }) => {
   
  return (
    <Card>
      <Card.Img variant="top" src={foto} style={{height: 100, width: 200, margin: 10}} />
      <Card.Body bg="dark">
        <Card.Title>{judul}</Card.Title>
        <Card.Text>{keterangan}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{tanggal}</small>
      </Card.Footer>
    </Card>
  );
};

export default CardCustom;
