import React from "react";
import { Container, Nav, Navbar, } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import { Figure } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";   
import CardCustom from "./CardCustom";
 export default class Bootstrap extends React.Component {
    
    render() {
        
        return (
            <div>
                <div className="header">
                    <Navbar bg="danger" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Mern</Navbar.Brand>
                            <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ENio3BoQrT59jyWHBXcgu41YrzXY9GLpKNZjawLsKsptDlROem4VkbVTg5YBtZZc6Kk&usqp=CAU/800x400?text=First slide&bg=373940"
                                    alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>What is MERN ?</h3>
                                        <p>You can find out below.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-VIYNkS-Hsk6R7hChTDyUq3Q_D2-IsR-JvQ&usqp=CAU/800x400?text=Second slide&bg=282c34"
                                    alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                    <h3>What do you need ?</h3>
                                    <p>We can give you what you need.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS3jJbxk0_6CooWzYoRd6FBLEtm-0KO3JFkA&usqp=CAU/800x400?text=Third slide&bg=20232a"
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h3>This is the solution</h3>
                                    <p>We will do what you want,So what are you waiting for order now.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                            
                            <h1>Biodata</h1>
                            <Figure className="rounded-circle">
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src="data:image/jpeg;base64,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"/>
                            <Figure.Caption>
                                Bagus Addin Prabowo ,Junior Programer
                                </Figure.Caption>
                                <Button type="button w3-hover-opacity" class="btn btn-link" href="https://www.linkedin.com/mynetwork/">Linkedln profile</Button>
                            </Figure>

                            <Alert variant="success">
                                <Alert.Heading>Hey, nice to see you</Alert.Heading>
                                <p>
                                    Aww yeah, you successfully read this important alert message.we are a solid and experienced team in their field, we will provide the best service according to what you need, of course according to the price paid .
                                </p>
                                <hr />
                                <p className="mb-0">
                                    If you need more information you can contact us below.
                                </p>
                            </Alert>

                            <h2>Skill</h2>
                            <CardGroup>
                                <CardCustom
                                    foto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGHp4mrTvwmf-qVtXPNK8TnaA3TFJW6_a9R6CqqwFQosUTnTB9S4Tjln8IKGWaZy0rRdA&usqp=CAU'
                                    judul='React Js'
                                    keterangan='JavaScript library for building user interfaces.'
                                    tanggal='Last updated 3 mins ago'
                                    url='https://reactjs.org/'
                                />
                                <CardCustom
                                    foto='https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png'
                                    judul='Node Js'
                                    keterangan='Node.js is a runtime for JavaScript environments outside of web browsers built on v8 JavaScript Engine.'
                                    tanggal='Last updated 3 mins ago'
                                    url='https://nodejs.org/en/'
                                />
                                <CardCustom
                                    foto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5bW6QIpU8Lv2kDK9F6w7gLmplBcqQsUrfOIO4XOCf3jK4261C40c5-gUrHZkZkwQXcQg&usqp=CAU'
                                    judul='Express Js'
                                    keterangan='JavaScript framework.'
                                    tanggal='Last updated 3 mins ago'
                                    url='https://expressjs.com/'
                                />
                                <CardCustom
                                    foto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOsEvPZ-B34DZ5UJkkjlJYYsX890Gys6RGvhIl66zKupXKD_opmmLGhlgJhRMW3cJoaHY&usqp=CAU'
                                    judul='My SQL'
                                    keterangan='MySQL is a SQL database management system software.'
                                    tanggal='Last updated 3 mins ago'
                                    url='https://www.mysql.com/'
                                />
                                <CardCustom
                                    foto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-BIWDQzycI9djwryJ3fUXD22fygWrReayE4BLNmoi1wKxaKp9aRkLhTkIp70sTsYi6Cw&usqp=CAU'
                                    judul='Mongo DB'
                                    keterangan='MongoDB (from "humongous") is a cross-platform document-oriented database system.'
                                    tanggal='Last updated 3 mins ago'
                                    url='https://www.mongodb.com/'
                                />
                                <CardCustom
                                    foto='https://res.cloudinary.com/de5lnco7h/image/upload/v1532666051/906c83359a7cd1ffd3e5834aab0c3293_dsf6sg.jpg'
                                    judul='Soft Skill'
                                    keterangan='Communication,Flexibility,Leadership,Motivation,Patience,Persuasion,Problem solving skill,Team work,Time management,Work ethic.'
                                    tanggal='Last updated 3 mins ago'
                                    url='https://www.linkedin.com/mynetwork/'
                                />
                            </CardGroup>
                            
                            <h2>My Team</h2>
                            <div className="justify-md-9-center ">
                                <div className="position-relative">
                                    <div className="position-absolute-middle">
                                        <Table responsive striped bordered hover variant="dark">                         
                                            <thead>
                                                <tr>
                                                <th>No</th>
                                                <th>Name</th>
                                                <th>Position</th>
                                                <th>Nickname</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                <td>1</td>
                                                <td>Sarman Ginting</td>
                                                <td>Senior</td>
                                                <td>Ginting</td>
                                                </tr>
                                                <tr>
                                                <td>2</td>
                                                <td>Bagus Addin Prabowo</td>
                                                <td>Junior</td>
                                                <td>Bagus</td>
                                                </tr>
                                                <tr>
                                                <td>3</td>
                                                <td>Garreth Joshua</td>
                                                <td>Junior</td>
                                                <td>Garreth</td>
                                                </tr>
                                                <tr>
                                                <td>4</td>
                                                <td>Fajri Anwar Fachrul</td>
                                                <td>Junior</td>
                                                <td>Fajri</td>
                                                </tr>
                                                <tr>
                                                <td>5</td>
                                                <td>Andri Titan</td>
                                                <td>Junior</td>
                                                <td>Andri</td>
                                                </tr>    
                                            </tbody>
                                        </Table>
                                        <h2>Contact Me</h2>
                                            <Form col="sm">
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" />
                                                <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                                </Form.Text>
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formTextArea">
                                                <Form.Label>Text Area</Form.Label>
                                                <Form.Control type="text-area" placeholder="Enter text" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="Check me out" />
                                            </Form.Group>
                                            <Button variant="primary" type="submit">
                                                Submit
                                            </Button>
                                            </Form>
                                            <div className="footer">
                                            <p>&copy; 2021 Bagus, Inc. All rights reserved.</p>    
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
           
}