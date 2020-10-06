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

        this.state={
            serviceName : "",
            serviceSummary : "",
            serviceDetails : "",
            serviceImage : ""
        }
    }

    componentDidMount(){
        this.setState({
            serviceName : this.props.history.location.state.serviceName,
            serviceSummary : this.props.history.location.state.serviceSummary,
            serviceDetails : this.props.history.location.state.serviceDetails,
            serviceImage : this.props.history.location.state.serviceImage,
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
                    <div class="row">
                        <div class="col-md-8">
                            <Card className="mb-5">
                                <Card.Body>
                                    <Card.Title style={{ color: "#195e83" }}>{this.state.serviceName}</Card.Title>
                                    <Card.Text className="display-linebreak">
                                        {this.state.serviceDetails}
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col-md-4">
                            <Card className="mb-3">
                                <div style={{ textAlign: "center", marginTop: "5%" }}>
                                    <Image src={this.state.serviceImage} width="30%"></Image>
                                    <Card.Body>
                                        <Card.Title style={{ color: "#195e83" }}>{this.state.serviceName}</Card.Title>
                                        <Card.Text>
                                            {this.state.serviceSummary}
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

export default ServiceExploreComponent