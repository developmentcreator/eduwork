import React from "react";
import { Container, Nav, Navbar, } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import { Figure } from "react-bootstrap";
import { Card, CardGroup } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";   



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
                    <button type="button w3-hover-opacity" class="btn btn-link">Linkedln profile</button>
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
                <Card>
                    <Card.Img variant="top" src="data:image/jpeg;base64,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" />
                    <Card.Body bg="dark"> 
                      <br /> <br /> <br />              
                    <Card.Title>React Js</Card.Title>
                    <Card.Text>
                        JavaScript library for building user interfaces. 
                    </Card.Text>
                     <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Body>
                    <Card.Footer>                
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Footer>
                </Card>
                <br />
                <Card>
                    <Card.Img variant="top" src="data:image/png;base64,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" />
                    <Card.Body bg="dark">
                        <br />
                    <Card.Title>Node Js</Card.Title>
                    <Card.Text>
                        Node.js is a runtime for JavaScript environments outside of web browsers built on v8 JavaScript Engine.{' '}
                    </Card.Text>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Body>
                    <Card.Footer>                
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Footer>
                </Card>
                <br />
                <Card>
                    <Card.Img variant="top" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASgAAACqCAMAAAAp1iJMAAABCFBMVEX////43yAAAAD8/////v///+/w3kn44Bb59rz13Bn47p704CL43QX8/Pzw8PDz8/MxMTHT09P+//qZmZlsbGxISEixsbGDg4P16IRNTU3+5y1JPx7k5OTCwsLa2trq6uq+vr57e3soKCiPj49hYWF2dnY6Ojqenp6np6cbGxtfX1/Ly8s1NTVXV1dYUBEUFBQAAAkAAwH59cbs2lT3763p0yr64jLRwSq2qDDFuSv56iP06Dg6NRZQRgSMiCQSBwBtZCTm0zsbFgDm2i56cCYuLAuqmidNSR+UgyUhFQukkS3NxzXDsjCEeyfTvz1ZVQtITBV3axgfIg1iWyI1LBZWSRb6+N3y6os4tN8LAAAIsklEQVR4nO2dDXvayBHHF5lW5WBXiDcVRUgCIcDIxPa1R3z4Goezz3Zzeblcnd73/yadWb2glxDwPY2txPOLI1bLrpD+nhnNrh8tjBEEQRDE04ML/tin8FWg2bYtHvskvgI0UMmxncc+jfIDOnHbsS1yv8/jWIxZFuMWKfV5LAcMCjSSG2I7kVCcotQOBKgEEcq2HvtESg8GJ26R4+3GgTyKdNoHTVBqThAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQXx9HLSq1ep9OrRaX+pUSg5ed+tgf6DD/ZT9NoBrbsmXfcEeYZ8nRjVUSUoW/mRfChWt1tM0KakTu4frSY2eoEUhf7knLf4kLYqx7//x13vxzydpUAeM/a2h7k9DbXz32Of8KKBQtco9qJNQJNTnIKH2hITaExJqT0ioPSGh9oSE2hMSak9IqD0hofak7ELNu0XmD3kCMWUXquloRR7yBGJKL9SjqPIJSKg9IaH2hITak61CqSgKbOqyWFPr9UoNSyRU3nJwU1OjHTUUa0lC5Wn8gIAJoUTLF2dnP16uVvWSuJ6TWXcRF1piTGgcF8fRp4Zv9CysDd90sMSDtj+VTZnmev6wHUAnvukftIe+IStlP47v4ZGGniuiI20Rqn7+k6Io/1rV1Vrl/OWFgrxal8X17MPsCpUowtCFwmAynw2CQbs7j5c8E1247mlz6AY27nLjyHCDoOc325vus6bfg149f+QlAgeTMRwp6BlHfvhZ2yzKvAFpnptgQ5d3inIilVJe1MshFOv1M3tj2BgD+N+NlzoLjoOwIPqMT4zYeKzDXlTSvEl85LEflzSjG7WcdpPF5XqKLG4TavUM1Hluqg3zVSiScnp68vNlSYRiwzZLVqGyRlgEoXxj00A71OUrCDVxZQkaWcepNeOCw9DPpsPUcb2OfNEnqbrBCNtttahn0qIqjXfKyYlycXX1Cwj37IVaK4dQrKknUahpYdEI3E66gTiWPcWi58XhiI/sdIteJ+ye+YSRNJ9OkK7ruKy6Uyj1Gq3p15W5vFFeL+Fe+NBCbVm+zDpMPKcnrcUYHGU1nUr7EosFDwMPZ147/T5nfTQ6q5vp5aFv8vSnchb4bKdFqeotvP77HJpcrmVW9dBCzXp5wt+2u5D3KzbzoyvszLI9+QiF05SkWsuLrmNss/osXQ32h0Jl2jnd3RalVl5jKP91JTOpysOnByOvnccN3xni/Z7Z8TV5Sn6t5iE21JQkLEkNMmA8F6NMlTXAbTez/qWGVrbL9SpvIIyfXFwvk0z9YYU6+oTrRVVdHWN2fHfyFoxl2w4wSgslqZzb+RY+GmfGEqP3Z5lwJ9klVO38F1BKUS5ers1KWfKoEAfudgs33jMK9uJgDiE2969R4VAz1Egctou/jEUnb587hKpXTDCpMI96e2mWSig26EDAji/S6OXflpFGJBkXn+QbsIGM95p32Oll1uSFY85Gi1nG/3ZaVGV1FiVSyskbs1aW9EAyPNyUjUGxL08LpR37nSx+P0q8eGBMJsYgMSKZTtjtfjMl4K5gXoPB3voKRAIU5aw0eRQiJv2NOjuFEkd6gZQdOa4x6c+yUUwEXnfi4RnsvOvV5b3OXL+NjOqH0rgeDFyPbH6YuMdO19OKrpfH8Y6DfJ02gwQDTOyzQr1fVdQ6/lTMc8inTk6V6/IIxYYzHGskMWqWbxEG882ocLRr6V05yNEL1VoXD71t9iBJD8D15FyL+Q5D+iuzLEJFI5DZONr1/HwDGapTQk0Ki6i7MPjJGaLMy9zsh3JFFFwPPM18cVmXFnWivDdr4HYf1hCp6uryN5DuZlkWoewow4I0SBa8Ub7FEKNWSijDzbeAvJLn7Qzl7ObWW8eeKaFkOFpdXim3ptpYYk7wwVwtweVuzldgVJe/g1D/KYtF4VBYTsnh8Bjx+jmnCSVICRXks0iB1pPPrsaQlnZyh5rOcq6nqubZzyDH7fqdnFy5bpjv0eHuztbrNzco3XVZhNpkmk44TWD0xtkWU5mBpoRizZzvtXEQNM6J0odGs3a2DkfKKaHkRO9ZnF7idl1R1xjCozRK1pRDqHZq6mnQR8MyAnSQZH4XEu5wmiUlFEiZuflLhd1cJXqwg/lZqhYVzseo1ZUcsZyiWK8xhr9ByaRWsLlWyyFU0E1fiIeqQR41CTa12iicsEoJxdk8bSnYAplkwvlc7hlG+vhtn2XSg3B+YPU2NqlbU1avP8aZ+cWZ+fBCfeqeLkbZkRj6IQglJtO4td10o6bpSWO+SGZ9WTCKJ4tHm7Ges4gsdT7epOlGX75fLdz11rcf7+4+3r4w1foS/6pn/vjy+d3dTx+uL6WSDyvUaaeI38zFFe3YRqE43Pq8wLLs3jy5b4lsmjk9HQ5sxwrak3ESsDTj2HBty9J785EbGhJns+NOT4dDucNjVF8+gpbLo2qqaZ6fm2Y8ASVj/HJphjV1FOoBHxqyi+MOXS98W4pjhUIx7hrjcae9mfLlmdlfaOEanfF42BObP2jB/4EHlX5bZ7FOgN724VDeQAY+3mItEEpN6VSvS2nqcXivRH/ba4R7Kgp1cPDllPmzfGKs9yfYkrxXWy2MUWojhbrZU+Oa+IGhkO9K+Vzx/0eobVSrINR//17gj3D7R6EK+b7a+mYtahtgUlUOmwL4OHrCgXzmM7X/9ISCPKpgHtXkIePYxUKl5JPEMDislvNR2S8t1DcDCbUnXmHKjSAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgvg64LvWJySIexGtZkWGFYPfGYJfDRJumIY/WNKhRtO43CEkurAt27Js2xY2E7awNNizAs2ytYBBfXGd1CeKY9uO0G0HJBHcDixNs4TObUd3HMEtS9hkUiHcERoXAhzN4cKxmKU5DlgSA4ks0EorrDpLSFLfchTtkkVF8Phf9NUr4Tb+hhGS6b78D8so1fjmBVqKAAAAAElFTkSuQmCC" />
                    <Card.Body bg="dark">
                       <br />                 
                    <Card.Title>Express Js</Card.Title>
                    <Card.Text>
                        JavaScript framework.
                    </Card.Text>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Body>
                    <Card.Footer>                
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Footer>
                </Card>
                <br />
                <Card>
                    <Card.Img variant="top" src="data:image/png;base64,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" />
                    <Card.Body bg="dark">
                       <br /> <br />                
                    <Card.Title>MySQL</Card.Title>
                    <Card.Text>
                        MySQL is a SQL database management system software.
                    </Card.Text>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Body>
                    <Card.Footer>                
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Footer>
                </Card>
                <br />            
                <Card>
                    <Card.Img variant="top" src="data:image/png;base64,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" />
                    <Card.Body bg="dark">
                       <br />                
                    <Card.Title>MongoDB</Card.Title>
                    <Card.Text>
                        MongoDB (from "humongous") is a cross-platform document-oriented database system.{' '}
                    </Card.Text>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Body>
                    <Card.Footer>                
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Footer>
                </Card>
                  <br />              
                <Card>
                    <Card.Img variant="top" src="https://res.cloudinary.com/de5lnco7h/image/upload/v1532666051/906c83359a7cd1ffd3e5834aab0c3293_dsf6sg.jpg" />
                    <Card.Body bg="dark">
                    <Card.Title>Soft Skill</Card.Title>
                    <Card.Text>
                        Communication,Flexibility,Leadership,Motivation,Patience,Persuasion,Problem solving skill,Team work,Time management,Work ethic.
                    </Card.Text>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Body>
                    <Card.Footer>                
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Footer>
                </Card>
                 </CardGroup>           
                            <br />
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