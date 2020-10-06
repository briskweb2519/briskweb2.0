import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

class ContactComponent extends Component {
    constructor(props) {
        super(props)
        this.routChange = this.routChange.bind(this)
    }

    routChange() {
        this.props.history.push('/project-discuss')
    }

    render() {
        return (
            <>
                <Container>
                    <div className="row">
                        <div className="col-md-4">
                            <Card className="mb-5">
                                <Card.Body>
                                    <Card.Title>Ready to get started?</Card.Title>
                                    <Card.Text>
                                        Please fill out the project planner to get a quote based on your project requirements. Once submitted, we will get in touch with you as soon as possible to provide you with a quote and to get started on your project.
                                    </Card.Text>
                                    <div id="container">
                                        <button className="learn-more" onClick={this.routChange}>
                                            <span className="circle" aria-hidden="true">
                                                <span className="icon arrow"></span>
                                            </span>
                                            <span className="button-text">Let's Discuss</span>
                                        </button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-8">
                            <Card className="mb-5">
                                <h3 style={{ textAlign: "center", padding: "4%", backgroundColor: "#195e83", color: "white" }}>Have a question? Please enquire below</h3>
                                <Form style={{ padding: "4%" }}>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Jack Shukla" />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="name@example.com" />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Website</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                    <div id="container">
                                        <button className="learn-more">
                                            <span className="circle" aria-hidden="true">
                                                <span className="icon arrow"></span>
                                            </span>
                                            <span className="button-text">Enquire</span>
                                        </button>
                                    </div>
                                </Form>
                            </Card>
                        </div>
                    </div>
                </Container>
            </>
        )
    }
}

export default ContactComponent