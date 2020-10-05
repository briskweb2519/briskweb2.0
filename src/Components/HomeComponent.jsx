import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
// import bg from '../Images/artiom-vallat-ZYhQXXGxvtQ-unsplash.jpg'
import tab from '../Images/tab.png'
import laptop from '../Images/pc.png'
import phone from '../Images/phone.png'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import ScrollAnimation from 'react-animate-on-scroll';
import web from '../Images/web.png'
import app from '../Images/app.png'
import digital from '../Images/digital.png'

class HomeComponent extends Component {
    constructor(props) {
        super(props)

        this.WebDevelopmentComponent = this.WebDevelopmentComponent.bind(this)
        this.AppDevelopmentComponent = this.AppDevelopmentComponent.bind(this)
        this.DigitalMarketingComponent = this.DigitalMarketingComponent.bind(this)
    }

    WebDevelopmentComponent() {
        this.props.history.push('/services/webdevelopment')
    }

    AppDevelopmentComponent() {
        this.props.history.push('/services/appdevelopment')
    }

    DigitalMarketingComponent() {
        this.props.history.push('/services/digitalmarketing')
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
                        <Image src={tab} width="12%" className="animate__animated animate__backInLeft tab" />
                        <Image src={laptop} width="50%" className="animate__animated animate__backInDown laptop" />
                        <Image src={phone} width="5%" className="animate__animated animate__backInRight phone" />
                    </div>

                    <CardColumns style={{ marginTop: "10%" }}>
                        <ScrollAnimation animateIn="animate__animated animate__bounceInLeft">
                            <Card>
                                <div style={{ textAlign: "center", marginTop: "5%" }}>
                                    <Image src={web} width="30%"></Image>
                                    <Card.Body>
                                        <Card.Title style={{ color: "#195e83" }}>Web Development</Card.Title>
                                        <Card.Text>
                                            Details About Web Development
                                        </Card.Text>
                                        <div id="container">
                                            <button class="learn-more" onClick={this.WebDevelopmentComponent}>
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
                        <ScrollAnimation animateIn="animate__animated animate__bounceInLeft">
                            <Card>
                                <div style={{ textAlign: "center", marginTop: "5%" }}>
                                    <Image src={app} width="30%"></Image>
                                    <Card.Body>
                                        <Card.Title style={{ color: "#195e83" }}>App Development</Card.Title>
                                        <Card.Text>
                                            Details About App Development
                                        </Card.Text>
                                        <div id="container">
                                            <button class="learn-more" onClick={this.AppDevelopmentComponent}>
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
                        <ScrollAnimation animateIn="animate__animated animate__bounceInLeft">
                            <Card>
                                <div style={{ textAlign: "center", marginTop: "5%" }}>
                                    <Image src={digital} width="30%"></Image>
                                    <Card.Body>
                                        <Card.Title style={{ color: "#195e83" }}>Digital Marketing</Card.Title>
                                        <Card.Text>
                                            Details About Digital Marketing
                                        </Card.Text>
                                        <div id="container">
                                            <button class="learn-more" onClick={this.DigitalMarketingComponent}>
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
                    </CardColumns>
                </Container>
            </>
        )
    }
}

export default HomeComponent