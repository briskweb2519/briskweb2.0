import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import ScrollAnimation from 'react-animate-on-scroll';

class HomeComponent extends Component {
    constructor(props) {
        super(props)

        this.WebDevelopment = this.WebDevelopment.bind(this)
        this.AppDevelopment = this.AppDevelopment.bind(this)
        this.DigitalMarketing = this.DigitalMarketing.bind(this)

        this.state = {
            services: [
                {
                    component : "WebDevelopment",
                    serviceName: "Web Development",
                    serviceSummary: "Our aim is to develop websites that not only increases your retention rate but also the overall performance and aesthetics.",
                    serviceDetails: "Details about Web Development",
                    serviceImage : '/Images/web.png'
                },
                {
                    component : "AppDevelopment",
                    serviceName: "App Development",
                    serviceSummary: "We create apps that speaks myriad about your business idea. It helps connect people with your idea and thereby benefits both.",
                    serviceDetails: "Details about App Development",
                    serviceImage : '/Images/app.png'
                },
                {
                    component : "DigitalMarketing",
                    serviceName: "Digital Marketing",
                    serviceSummary: "We use modern tools in a manner that helps build effective brand recognition and plan further actions to improve user experience.",
                    serviceDetails: "Details about Digital Marketing",
                    serviceImage : '/Images/digital.png'
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
                <Container >
                    <div style={{ color: "black", marginBottom: "7%", marginTop: "5%" }}>
                        <h4 className='text-center '>
                            Briskweb is a Software Development Company to develop
                </h4>
                        <h4 className='text-center'>
                            <span className="animate__animated animate__flash animate__slower" style={{ color: "#195e83" }}>websites and applications</span> for your business and help it expand with the tools of <span className="animate__animated animate__flash animate__slower" style={{ color: "#195e83" }}>digital marketing</span>.
                </h4>
                    </div>
                    <div className="text-center mb-5 mt-5">
                        <Image src="/Images/tab.png" width="12%" className="animate__animated animate__backInLeft tab" />
                        <Image src="/Images/pc.png" width="50%" className="animate__animated animate__backInDown laptop" />
                        <Image src="/Images/phone.PNG" width="5%" className="animate__animated animate__backInRight phone" />
                    </div>

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

export default HomeComponent