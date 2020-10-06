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
                    component: "WebDevelopment",
                    serviceName: "Web Development",
                    serviceSummary: "Our aim is to develop websites that not only increases your retention rate but also the overall performance and aesthetics.",
                    serviceDetails: `Your website can help establish your business as a going concern, communicate your brand value proposition and it can convey professionalism. It also extends your reach to anyone in the world.

                    Below are some points that will help you know some benefits of a "better" website:
                    
                    #1 Your customers expect it
                    Website gives you a platform to showcase your business model
                    
                    #2 Offers social proof
                    Website gives your business a digital existence and builds your brand.
                    
                    #3 Maximize Return On Investment
                    A search optimized website lets you be in front of thousands of more potential customers.
                    
                    #4 Website adds to company's credibiltity
                    In digital era, people ar emore likely to engage with a company they can trust.Having website is the stepping stone.
                    
                    #5 Controlling the narrative
                    While it's difficult to control what people say about you, you can influence the brand by writing a blog on the company's website.`,
                    serviceImage: '/Images/web.png'
                },
                {
                    component: "AppDevelopment",
                    serviceName: "App Development",
                    serviceSummary: "We create apps that speaks myriad about your business idea. It helps connect people with your idea and thereby benefits both.",
                    serviceDetails: `A rich experience gives users a reason to download the app in the first place and the incentive to continue using it on an ongoing basis. Simple design, a seamless checkout process, and intuitive navigation will make your app easy and enjoyable to use. Finally, the development of personalized experiences will help keep the mobile app experience relevant and ensure users continue coming back.

                    Here are few reasons to deliver an application for your business:
                    
                    #1 Easier to promote products
                    Having an app saves your money and efforts from other promotional techniques.
                    
                    #2 Engage your customers
                    With mobile app, business have the opportunity to interact with their customers in real time.
                    
                    #3 Feeback from your customers
                    Mobile app allows your customers to express their views about the product of business.
                    
                    #4 Increase in return on investment
                    The benefits of building an app outweigh the initial cost of investing in the mobile app.
                    
                    #5 Expand your customer base
                    Mobile app creates online presence of your business. It can also be linked with social media platforms to drive more customers.
                    
                    #6 Rich experience for your customers
                    Customers get a unique experience by using mobile app.
                    It provides value to your customers.
                    
                    #7 Increase in busniess analytics
                    Mobile app helps you track downloads, User engagements and the products that users show interest in.
                    
                    #8 Smart marketing tool
                    Digital marketing with the mobile app helps business to increase the sales rapidly with less efforts.`,
                    serviceImage: '/Images/app.png'
                },
                {
                    component: "DigitalMarketing",
                    serviceName: "Digital Marketing",
                    serviceSummary: "We use modern tools in a manner that helps build effective brand recognition and plan further actions to improve user experience.",
                    serviceDetails: `Online marketing is an excellent opportunity for your business to grow and gain more valuable traffic and sales.Investing in digital marketing services can help your company earn more revenue, leads, and conversions.

                    Points:
                    
                    #1 the world is online
                    customers are online and digital marketing is the way to reach out your potential
                    customers.
                    
                    #2 Insights about customer needs and wants
                    Digital tools can be used to better identify the interests of the target audience
                    
                    #3 Affordable for any business
                    Digital Marketing is the cheapest form of marketing when compared to other promotinal techniques.
                    
                    #4 Offers measurable ROI
                    With Digital Marketing it is very easy to find out what's working and what's not.
                    
                    #5 Provides Global Exposure
                    It helps a business build effective brand recognition and exposure
                    
                    #6 Build long-lasting customer relationships
                    Digital Marketing will help you to retain and re-engage the customers and build a proper relationship with them.
                    
                    #7 Levels the playing field
                    Digital Marketing campaigns can help the businesses to grow thier target audience.
                    
                    #8 Ace market competitions
                    Your competitiors are using digital marketing tools to drive potential customers.Get on board and succeed.
                    `,
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
                        <Image src="/Images/phone.png" width="5%" className="animate__animated animate__backInRight phone" />
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