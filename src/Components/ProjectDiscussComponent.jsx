import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

class ProjectDiscussComponent extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <>
                <Container>
                    <div class="row">

                        <div class="col-md-12">
                            <Card className="mb-5">
                                <div style={{ textAlign: "center", padding: "4%", backgroundColor: "#195e83", color: "white" }}>
                                    <h3>Let’s talk about your project</h3><br />
                                    <h6>After we get some information from you, we’ll set up a time to discuss your project in further detail. You should expect to hear from us in a few days.</h6>
                                </div>
                                <Form style={{ padding: "4%" }}>

                                    <h4 style={{ color: "#195e83" }}>Basics</h4>

                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Jack Shukla" />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="name@example.com" />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>
                                    <br />
                                    <h4 style={{ color: "#195e83" }}>Company</h4>

                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Company Name</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Web Address</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Describe the company</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>What are the aims and objectives of the project?</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>What are the main goals of the website?</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>What are the long-term goals for the website?</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Budget (INR)</Form.Label>
                                        <Form.Control as="number" rows={3} />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Deadline</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>

                                    <br />
                                    <h4 style={{ color: "#195e83" }}>Audience</h4>

                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Who are your target audience?</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>How will your audience interact with the website?</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>

                                    <br />
                                    <h4 style={{ color: "#195e83" }}>Content</h4>

                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Do you have your website's content ready?</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Do you have your website's content ready?</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>

                                    <br />
                                    <h4 style={{ color: "#195e83" }}>Design</h4>

                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Do you have brand guidelines?</Form.Label>
                                        <p>Logo, colour scheme, fonts etc.</p>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>What is your desired look and feel for the website?</Form.Label>
                                        <p>Modern, minimal, colourful etc.</p>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Please tick box if your company has a current website." />
                                    </Form.Group>

                                    <br />
                                    <h4 style={{ color: "#195e83" }}>Development</h4>

                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>List the pages that you require?</Form.Label>
                                        <p>E.g. Home, About Us, Services, Blog, Contact Us</p>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>What features do you want to include on the website?</Form.Label>
                                        <p>E.g. Twitter feed, contact form, photo gallery</p>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Do you have a current domain name and hosting package?</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>

                                    <br />
                                    <h4 style={{ color: "#195e83" }}>Please select the features you require</h4>

                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Logo Design" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Responsive Layout" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="SEO" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Social Media Integration" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="eCommerce Solution" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Content Writing and/or Translating" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Website Migration" />
                                    </Form.Group>
                                    <br />

                                    <div id="container">
                                        <button class="learn-more">
                                            <span class="circle" aria-hidden="true">
                                                <span class="icon arrow"></span>
                                            </span>
                                            <span class="button-text">Submit</span>
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

export default ProjectDiscussComponent