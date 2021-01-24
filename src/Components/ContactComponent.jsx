import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import emailjs from 'emailjs-com'

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('default_service', 'template_7xptVovv', e.target, 'user_sO9C00vJm3jHpqPJFnwme')
      .then((result) => {
          alert("Thank you! We will get back to you soon");
          console.log(result.text);
      }, (error) => {
          alert("Error! Please try again later. ");
          console.log(error.text);
      });
      e.target.reset();
  }


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
                                <Form style={{ padding: "4%" }} onSubmit={sendEmail}>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" name="name" placeholder="Enter your name" required />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" name="email" placeholder="Enter your email" required />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Website</Form.Label>
                                        <Form.Control type="text" name="website" placeholder="example.com"  required />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control type="number" name="mobile" required/>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" name="message" rows={3} required/>
                                    </Form.Group>
                                    <div id="container">
                                        <button className="learn-more" type="submit" >
                                            <span className="circle" aria-hidden="true">
                                                <span className="icon arrow"></span>
                                            </span>
                                            <span className="button-text" >Enquire</span>
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