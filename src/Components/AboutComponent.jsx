import React, { Component } from 'react'
import { CardColumns } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import laptop from '../Images/pc.png'

class AboutComponent extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <>
                <Container >
                    <div class="row">
                        <div class="col-md-6">
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
                        <div class="col-md-6">
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

export default AboutComponent