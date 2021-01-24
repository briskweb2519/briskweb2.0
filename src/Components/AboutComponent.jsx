import React, { Component } from 'react'
import {Row,Col,Card} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'

class AboutComponent extends Component {
    // constructor(props){
    //     super(props)
    // }
    render() {
        return (
            <>
                <Container >
                <div style={{textAlign:"center"}}>
                        <h2>Our Team</h2>
                </div>

                    <Row>
                        <Col className="mx-auto d-flex justify-content-center">
                                <Card className="card1" style={{ height: "400px", paddingTop:"20%", marginTop: "15px", marginBottom: "15px" }} >
                                    <Card.Img variant="top" src="/Images/Meet.jpg" style={{}} />
                                    <Card.Body className="info">
                                        <Card.Title>Meet Patel</Card.Title>
                                        <Card.Text>
                                            Software Developer
                                        </Card.Text>
                                        <button onClick="location.href='https://www.linkedin.com/in/meetpatel19/'">LinkedIn</button>
                                        </Card.Body>
                                </Card>
                            </Col>
                            <Col className="mx-auto d-flex justify-content-center">
                                <Card className="card1" style={{ height: "400px", paddingTop:"20%", marginTop: "15px", marginBottom: "15px" }} >
                                    <Card.Img variant="top" src="/Images/Parth.jpg" style={{}} />
                                    <Card.Body className="info">
                                        <Card.Title>Parth Parmar</Card.Title>
                                        <Card.Text>
                                            Software Developer
                                        </Card.Text>
                                        <button onClick="location.href='https://www.linkedin.com/in/parth-parmar-8aa318108/'">LinkedIn</button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                </Container>
            </>
        )
    }
}

export default AboutComponent