import React from 'react'
import { Component } from 'react';
import { Image } from 'react-bootstrap';

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

class ServiceExploreComponent extends Component {

    constructor(props) {
        super(props)

        this.ContactComponent = this.ContactComponent.bind(this)
        this.ProjectComponent = this.ProjectComponent.bind(this)

        this.state = {
            serviceName: "",
            serviceSummary: "",
            serviceDetails: "",
            serviceImage: ""
        }
    }

    componentDidMount() {
        this.setState({
            serviceName: this.props.history.location.state.serviceName,
            serviceSummary: this.props.history.location.state.serviceSummary,
            serviceDetails: this.props.history.location.state.serviceDetails,
            serviceImage: this.props.history.location.state.serviceImage,
        })
    }

    ContactComponent() {
        this.props.history.push('/contact')
    }

    ProjectComponent() {
        this.props.history.push({
            pathname: '/project',
            state: this.state.serviceName
        })
    }

    render() {
        return (
            <>
                <Container >
                    <div className="row">
                        <div className="col-md-8">
                            <Card className="mb-5">
                                <Card.Body>
                                    <Card.Title style={{ color: "#195e83" }}>{this.state.serviceName}</Card.Title>
                                    <Card.Text className="display-linebreak">
                                        {this.state.serviceDetails}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card className="mb-3">
                                <div style={{ textAlign: "center", marginTop: "5%" }}>
                                    <Image src={this.state.serviceImage} width="30%"></Image>
                                    <Card.Body>
                                        <Card.Title style={{ color: "#195e83" }}>{this.state.serviceName}</Card.Title>
                                        <Card.Text>
                                            {this.state.serviceSummary}
                                        </Card.Text>
                                        <div id="container">
                                            <button className="learn-more" onClick={this.ContactComponent}>
                                                <span className="circle" aria-hidden="true">
                                                    <span className="icon arrow"></span>
                                                </span>
                                                <span className="button-text">Enquire</span>
                                            </button>
                                        </div>
                                    </Card.Body>
                                </div>
                            </Card>

                            <Card className="mb-3">
                                <div style={{ textAlign: "center" }}>
                                    <Card.Body>
                                        <div id="container">
                                            <button className="learn-more" onClick={this.ProjectComponent}>
                                                <span className="circle" aria-hidden="true">
                                                    <span className="icon arrow"></span>
                                                </span>
                                                <span className="button-text">Projects</span>
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

export default ServiceExploreComponent