import React from "react";
import { Card, CardImg, Container } from "react-bootstrap";
import { Button,Row,Col } from "react-bootstrap";


const CardCustom = ({name,image,price}) => {
    return (
        <div>
            <Row xs={1} sm={4} className="g-4">
                <Col>
                    <Container>
                            <Card >
                            <CardImg variant="top" src={image} style={{ height: 200, width: 100, margin: 10 }}/>
                                <Card.Body>
                                    <Card.Title>{name }</Card.Title>
                            <Card.Text>
                                {price}
                            </Card.Text>
                            <Button className="fas fa-shopping-cart" variant="danger"></Button>
                                </Card.Body>
                            </Card>
                    </Container>
                </Col>
            </Row>
        </div>
    )
}

export default CardCustom;