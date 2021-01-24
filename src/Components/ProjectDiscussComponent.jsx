import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import emailjs from "emailjs-com";

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('default_service', 'template_nbkvbab', e.target, 'user_sO9C00vJm3jHpqPJFnwme')
      .then((result) => {
          alert("Thank you! We will get back to you soon");
          console.log(result.text);
      }, (error) => {
          alert("Error! Please try again later. ");
          console.log(error.text);
      });
      e.target.reset();
  }


class ProjectDiscussComponent extends Component {
    // constructor(props){
    //     super(props)
    // }
    render() {
        return (
            <>
                <Container>
                    <div className="row">

                        <div className="col-md-12">
                            <Card className="mb-5">
                                <div style={{ textAlign: "center", padding: "4%", backgroundColor: "#195e83", color: "white" }}>
                                    <h3>Let’s talk about your project</h3><br />
                                    <h6>After we get some information from you, we’ll set up a time to discuss your project in further detail. You should expect to hear from us in a few days.</h6>
                                </div>
                                <Form style={{ padding: "4%" }} onSubmit={sendEmail}>

                                    <h4 style={{ color: "#195e83" }}>Basics</h4>

                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" name="name" placeholder="Enter your name" />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" name="reply_to" placeholder="Enter your email" />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control type="number" name="mobile" />
                                    </Form.Group>
                                    <br />
                                    <h4 style={{ color: "#195e83" }}>Company</h4>

                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Company Name</Form.Label>
                                        <Form.Control type="text"  name="c_name"/>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Web Address</Form.Label>
                                        <Form.Control type="text" name="web_adr" />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Describe the company</Form.Label>
                                        <Form.Control as="textarea" rows={3} name="descp" />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>What are the aims and objectives of the project?</Form.Label>
                                        <Form.Control as="textarea" rows={3} name="aim_obj"/>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>What are the main goals of the website?</Form.Label>
                                        <Form.Control as="textarea" rows={3} name="mgoals"/>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>What are the long-term goals for the website?</Form.Label>
                                        <Form.Control as="textarea" rows={3} name="lgoals"/>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Budget (INR)</Form.Label>
                                        <Form.Control type="number" rows={3} name="bget"/>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Deadline</Form.Label>
                                        <Form.Control as="textarea" rows={3} name="dline" />
                                    </Form.Group>

                                    <br />
                                    <h4 style={{ color: "#195e83" }}>Audience</h4>

                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Who are your target audience?</Form.Label>
                                        <Form.Control as="textarea" rows={3} name="taud"/>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>How will your audience interact with the website?</Form.Label>
                                        <Form.Control as="textarea" rows={3} name="a_inter"/>
                                    </Form.Group>

                                    <br />
                                    <h4 style={{ color: "#195e83" }}>Content</h4>

                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Do you have your website's content ready?</Form.Label>
                                        <Form.Control as="textarea" rows={3} name="ready" />
                                    </Form.Group>
                                   

                                    <br />
                                    <h4 style={{ color: "#195e83" }}>Design</h4>

                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Do you have brand guidelines?</Form.Label>
                                        <p>Logo, colour scheme, fonts etc.</p>
                                        <Form.Control as="textarea" rows={3} name="bguide" />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>What is your desired look and feel for the website?</Form.Label>
                                        <p>Modern, minimal, colourful etc.</p>
                                        <Form.Control as="textarea" rows={3} name="dlook" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Please tick box if your company has a current website." name="cweb" />
                                    </Form.Group>

                                    <br />
                                    <h4 style={{ color: "#195e83" }}>Development</h4>

                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>List the pages that you require?</Form.Label>
                                        <p>E.g. Home, About Us, Services, Blog, Contact Us</p>
                                        <Form.Control as="textarea" rows={3} name="plist"/>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>What features do you want to include on the website?</Form.Label>
                                        <p>E.g. Twitter feed, contact form, photo gallery</p>
                                        <Form.Control as="textarea" rows={3} name="dfeat"/>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Do you have a current domain name and hosting package?</Form.Label>
                                        <Form.Control as="textarea" rows={3} name="doma"/>
                                    </Form.Group>

                                    <br />
                                    <h4 style={{ color: "#195e83" }}>Please select the features you require</h4>

                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Logo Design" name="r1" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Responsive Layout" name="r2"/>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="SEO" name="r3" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Social Media Integration" name="r4" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="eCommerce Solution"  name="r5"/>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Content Writing and/or Translating" name="r6" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Website Migration" name="r7" />
                                    </Form.Group>
                                    <br />

                                    <div id="container">
                                        <button className="learn-more">
                                            <span className="circle" aria-hidden="true">
                                                <span className="icon arrow"></span>
                                            </span>
                                            <span className="button-text">Submit</span>
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