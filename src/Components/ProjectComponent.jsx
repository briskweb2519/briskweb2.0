import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import img from '../Images/69.jpg'

class ProjectComponent extends Component {
    constructor(props){
        super(props)
        this.routChange = this.routChange.bind(this)
    }

    routChange(){
        this.props.history.push('/project-details')
    }

    render() {
        return (
            <>
                <Container>
                    <div>
                        <CardDeck style={{ width: "100%" }}>
                            <div class="frame">

                                <Card style={{ width: "100%", height: "400px", marginTop: "15px", marginBottom: "15px" }} >
                                    <Card.Img variant="top" src={img} />
                                    <Card.Body class="details" style={{ width: "80%" }}>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                            </Card.Text>
                                        <div id="container">
                                            <button class="learn-more" onClick={this.routChange}>
                                                <span class="circle" aria-hidden="true">
                                                    <span class="icon arrow"></span>
                                                </span>
                                                <span class="button-text">View Project</span>
                                            </button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div class="frame">

                                <Card style={{ width: "100%", height: "400px", marginTop: "15px", marginBottom: "15px" }} >
                                    <Card.Img variant="top" src={img} />
                                    <Card.Body class="details" style={{ width: "80%" }}>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                            </Card.Text>
                                        <div id="container">
                                            <button class="learn-more" onClick={this.routChange}>
                                                <span class="circle" aria-hidden="true">
                                                    <span class="icon arrow"></span>
                                                </span>
                                                <span class="button-text">View Project</span>
                                            </button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div class="frame">

                                <Card style={{ width: "100%", height: "400px", marginTop: "15px", marginBottom: "15px" }} >
                                    <Card.Img variant="top" src={img} />
                                    <Card.Body class="details" style={{ width: "80%" }}>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                            </Card.Text>
                                        <div id="container">
                                            <button class="learn-more" onClick={this.routChange}>
                                                <span class="circle" aria-hidden="true">
                                                    <span class="icon arrow"></span>
                                                </span>
                                                <span class="button-text">View Project</span>
                                            </button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div class="frame">

                                <Card style={{ width: "100%", height: "400px", marginTop: "15px", marginBottom: "15px" }} >
                                    <Card.Img variant="top" src={img} />
                                    <Card.Body class="details" style={{ width: "80%" }}>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                            </Card.Text>
                                        <div id="container">
                                            <button class="learn-more" onClick={this.routChange}>
                                                <span class="circle" aria-hidden="true">
                                                    <span class="icon arrow"></span>
                                                </span>
                                                <span class="button-text">View Project</span>
                                            </button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div class="frame">

                                <Card style={{ width: "100%", height: "400px", marginTop: "15px", marginBottom: "15px" }} >
                                    <Card.Img variant="top" src={img} />
                                    <Card.Body class="details" style={{ width: "80%" }}>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                            </Card.Text>
                                        <div id="container">
                                            <button class="learn-more" onClick={this.routChange}>
                                                <span class="circle" aria-hidden="true">
                                                    <span class="icon arrow"></span>
                                                </span>
                                                <span class="button-text">View Project</span>
                                            </button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div class="frame">

                                <Card style={{ width: "100%", height: "400px", marginTop: "15px", marginBottom: "15px" }} >
                                    <Card.Img variant="top" src={img} />
                                    <Card.Body class="details" style={{ width: "80%" }}>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                            </Card.Text>
                                        <div id="container">
                                            <button class="learn-more" onClick={this.routChange}>
                                                <span class="circle" aria-hidden="true">
                                                    <span class="icon arrow"></span>
                                                </span>
                                                <span class="button-text">View Project</span>
                                            </button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </CardDeck>
                        {/* <img src="https://pbs.twimg.com/profile_images/378800000601617732/9e87878ffdd67333ac8b81f9da22696a_400x400.jpeg" />
                    <div class="details">
                        <h1>Lorem</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lorem nunc, sollicitudin a nisi sodales, imperdiet dignissim enim. Nam sapien quam</p>
                    </div> */}
                    </div>
                </Container>
            </>
        )
    }
}

export default ProjectComponent