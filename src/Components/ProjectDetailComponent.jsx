import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

class ProjectDetailComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            summary: "",
            details: "",
            image: "",
            serviceName: "",
            url: "",
            serviceProvided: []
        }
    }

    componentDidMount() {
        this.setState({
            name: this.props.history.location.state.name,
            summary: this.props.history.location.state.summary,
            details: this.props.history.location.state.details,
            image: this.props.history.location.state.image,
            serviceName: this.props.history.location.state.serviceName,
            url: this.props.history.location.state.url,
            serviceProvided: this.props.history.location.state.serviceProvided
        })
    }

    changeRoute(url) {
        window.location.href = url;
    }

    render() {
        return (
            <>
                <Container >
                    <div className="row">
                        <div className="col-md-8">
                            <Card className="mb-5">
                                <Card.Body>
                                    <Card.Title style={{ color: "#195e83" }}>{this.state.name}</Card.Title>
                                    <Card.Text className="display-linebreak">
                                        {this.state.details}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card className="mb-5">
                                <Card.Body>
                                    <Card.Title style={{ color: "#195e83" }}>{this.state.name}</Card.Title>
                                    <Card.Text>
                                        {this.state.summary}
                                    </Card.Text>
                                    <div id="container">
                                        <button className="learn-more" onClick={() => this.changeRoute(this.state.url)}>
                                            <span className="circle" aria-hidden="true">
                                                <span className="icon arrow"></span>
                                            </span>
                                            <span className="button-text">Visit Website</span>
                                        </button>

                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="mb-5">
                                <Card.Body>
                                    <Card.Title style={{ color: "#195e83" }}>Tools/Services</Card.Title>
                                    <Card.Text>
                                        {this.state.serviceProvided.map(serve =>
                                            <div><Image src={serve.image} style={{ width: "10%" }}></Image> {serve.name}<br /><br /></div>
                                        )}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </Container>
            </>
        )
    }
}

export default ProjectDetailComponent