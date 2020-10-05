import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import ScrollAnimation from 'react-animate-on-scroll';
import { Image } from 'react-bootstrap';

class ServicesComponent extends Component {
    constructor(props) {
        super(props)

        this.WebDevelopment = this.WebDevelopment.bind(this)
        this.AppDevelopment = this.AppDevelopment.bind(this)
        this.DigitalMarketing = this.DigitalMarketing.bind(this)

        this.state = {
            services: [
                {
                    component: "WebDevelopment",
                    serviceName: "Web Development",
                    serviceSummary: "Summary about Web Development",
                    serviceDetails: "Details about Web Development",
                    serviceImage: '/Images/web.png'
                },
                {
                    component: "AppDevelopment",
                    serviceName: "App Development",
                    serviceSummary: "Summary about App Development",
                    serviceDetails: "Details about App Development",
                    serviceImage: '/Images/app.png'
                },
                {
                    component: "DigitalMarketing",
                    serviceName: "Digital Marketing",
                    serviceSummary: "Summary about Digital Marketing",
                    serviceDetails: "Details about Digital Marketing",
                    serviceImage: '/Images/digital.png'
                }
            ]
        }
    }

    WebDevelopment() {
        this.props.history.push({
            pathname: '/services/explore',
            state: this.state.services[0]
        })
    }

    AppDevelopment() {
        this.props.history.push({
            pathname: '/services/explore',
            state: this.state.services[1]
        })
    }

    DigitalMarketing() {
        this.props.history.push({
            pathname: '/services/explore',
            state: this.state.services[2]
        })
    }

    render() {
        return (
            <>
                <Container>
                    <CardColumns style={{ marginTop: "10%" }}>
                        {this.state.services.map(service =>
                            <ScrollAnimation animateIn="animate__animated animate__bounceInLeft">
                                <Card>
                                    <div style={{ textAlign: "center", marginTop: "5%" }}>
                                        <Image src={service.serviceImage} width="30%"></Image>
                                        <Card.Body>
                                            <Card.Title style={{ color: "#195e83" }}>{service.serviceName}</Card.Title>
                                            <Card.Text>
                                                {service.serviceSummary}
                                            </Card.Text>
                                            <div id="container">
                                                <button class="learn-more" onClick={this[service.component]}>
                                                    <span class="circle" aria-hidden="true">
                                                        <span class="icon arrow"></span>
                                                    </span>
                                                    <span class="button-text">Explore</span>
                                                </button>
                                            </div>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </ScrollAnimation>
                        )}
                    </CardColumns>
                </Container>
            </>
        )
    }
}

export default ServicesComponent