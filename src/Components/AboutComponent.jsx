import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

class AboutComponent extends Component {
    // constructor(props){
    //     super(props)
    // }
    render() {
        return (
            <>
                <Container >
                    <div className="row">
                        <div className="col-md-6">
                            <Card className="mb-5">
                                <Card.Body>
                                    <Card.Title>Card title that wraps to a new line</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <div id="container">
                                        <button className="learn-more">
                                            <span className="circle" aria-hidden="true">
                                                <span className="icon arrow"></span>
                                            </span>
                                            <span className="button-text">Learn More</span>
                                        </button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-6">
                            <Card className="mb-5">
                                <Card.Body>
                                    <Card.Title>Card title that wraps to a new line</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <div id="container">
                                        <button className="learn-more">
                                            <span className="circle" aria-hidden="true">
                                                <span className="icon arrow"></span>
                                            </span>
                                            <span className="button-text">Learn More</span>
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