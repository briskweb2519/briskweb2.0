import React, { Component } from 'react'

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import laptop from '../Images/pc.png'
class ServiceDetailComponent extends Component {
    // constructor(props){
    //     super(props)
    // }
    render() {
        return (
            <>
                <Container >
                    <div class="row">
                        <div class="col-md-8">
                            <Card className="mb-5">
                                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                                <Card.Body>
                                    <Card.Title>Website Design — Creating the look & feel of your website</Card.Title>
                                    <Card.Text>
                                        Simplicity is one of the golden rules of website design. The audience should have an enjoyable, positive experience when using your website. Whether their objective is reading content, watching a video or enrolling in a course, every action should be clear and concise throughout the website. Our approach is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience.
                                    <img src={laptop} alt="" className="mt-5 ml-5 mb-5" width="75%" /><br />
                                    The website design process starts with a pen and paper to sketch page layouts, wire-frames, sitemaps and menu structures. Digital design concepts are then created incorporating your company’s brand guidelines for a personalised look and feel. You will be presented with a variety of website design concepts to review. Feedback on the design concepts is essential to give you the opportunity to express your thoughts on the design and make alterations where desired before the final sign-off.
                                </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col-md-4">
                            <Card className="mb-5">
                                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                                <Card.Body>
                                    <Card.Title>Website Design — Creating the look & feel of your website</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                </Card.Text>
                                    <div id="container">
                                        <button class="learn-more">
                                            <span class="circle" aria-hidden="true">
                                                <span class="icon arrow"></span>
                                            </span>
                                            <span class="button-text">Learn More</span>
                                        </button>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="mb-5">
                                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                                <Card.Body>
                                    <Card.Title>Card title that wraps to a new line</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                        </Card.Text>
                                    <div id="container">
                                        <button class="learn-more">
                                            <span class="circle" aria-hidden="true">
                                                <span class="icon arrow"></span>
                                            </span>
                                            <span class="button-text">Learn More</span>
                                        </button>
                                    </div>

                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </Container>
            </>
        )
    }
}

export default ServiceDetailComponent