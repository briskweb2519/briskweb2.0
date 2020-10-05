import React from 'react'
import { Component } from 'react';
import { Image } from 'react-bootstrap';

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import laptop from '../Images/pc.png'
import web from '../Images/web.png'

class AppDevelopmentComponent extends Component {

    constructor(props) {
        super(props)

        this.ContactComponent = this.ContactComponent.bind(this)
        this.ProjectComponent = this.ProjectComponent.bind(this)
    }

    ContactComponent() {
        this.props.history.push('/contact')
    }

    ProjectComponent() {
        this.props.history.push('/project')
    }

    render() {
        return (
            <>
                <Container >
                    <div class="row">
                        <div class="col-md-8">
                            <Card className="mb-5">
                                <Card.Body>
                                    <Card.Title style={{ color: "#195e83" }}>App Deveolpment</Card.Title>
                                    <Card.Text>
                                        Simplicity is one of the golden rules of website design. The audience should have an enjoyable, positive experience when using your website. Whether their objective is reading content, watching a video or enrolling in a course, every action should be clear and concise throughout the website. Our approach is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience.
                                    <img src={laptop} alt="" className="mt-5 ml-5 mb-5" width="75%" /><br />
                                    The website design process starts with a pen and paper to sketch page layouts, wire-frames, sitemaps and menu structures. Digital design concepts are then created incorporating your company’s brand guidelines for a personalised look and feel. You will be presented with a variety of website design concepts to review. Feedback on the design concepts is essential to give you the opportunity to express your thoughts on the design and make alterations where desired before the final sign-off.
                                </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col-md-4">
                            <Card className="mb-3">
                                <div style={{ textAlign: "center", marginTop: "5%" }}>
                                    <Image src={web} width="30%"></Image>
                                    <Card.Body>
                                        <Card.Title style={{ color: "#195e83" }}>App Development</Card.Title>
                                        <Card.Text>
                                            Details About App Development
                                        </Card.Text>
                                        <div id="container">
                                            <button class="learn-more" onClick={this.ContactComponent}>
                                                <span class="circle" aria-hidden="true">
                                                    <span class="icon arrow"></span>
                                                </span>
                                                <span class="button-text">Enquire</span>
                                            </button>
                                        </div>
                                    </Card.Body>
                                </div>
                            </Card>

                            <Card className="mb-3">
                                <div style={{ textAlign: "center"}}>
                                    <Card.Body>
                                        <div id="container">
                                            <button class="learn-more" onClick={this.ProjectComponent}>
                                                <span class="circle" aria-hidden="true">
                                                    <span class="icon arrow"></span>
                                                </span>
                                                <span class="button-text">Projects</span>
                                            </button>
                                        </div>
                                    </Card.Body>
                                </div>
                            </Card>

                        </div>
                    </div>
                </Container>
            </>
        )
    }
}

export default AppDevelopmentComponent