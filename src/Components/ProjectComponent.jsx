import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

class ProjectComponent extends Component {
    constructor(props) {
        super(props)
        this.CarWash = this.CarWash.bind(this)
        this.Speedwell = this.Speedwell.bind(this)
        this.Nutan = this.Nutan.bind(this)

        this.state = {
            projects: [
                {
                    name: "Speedwell Cycle Industries",
                    summary: "Speedwell Cycle Industries is a company which owns the wholesale supply of various companies of sports goods and automobile tyre-tubes.",
                    details: `This project is about providing online presence of the local business. 
                    
                    The branding of the business is done by developing website with a unique design and 
                    
                    also by helping them reach to customers with the help of digital marketing. 
                    
                    Listing of products of three different companies is done in a way which attracts the attention of the customers.`,
                    image: "/Images/speedwell/speedwellLogo.png",
                    serviceName: "Web Development",
                    url: "https://www.speedwells.in",
                    serviceProvided: [
                        {
                            image: "/Images/react.jpg",
                            name: "ReactJS",
                        },
                        {
                            image: "/Images/github.jpg",
                            name: "Github",
                        },
                    ],
                    fun: "Speedwell"
                },

                {
                    name: "Nutan Vastra Bhandar",
                    summary: "Nutan Vastra Bhandar owns a manufacturing, designing, and selling of sarees, kurtis, and various traditional garments. It tops the market for 86 years.",
                    details: `This is an e-commerce responsive website for the local business of Ahmedabad. 
                    
                    Key features developed for this project are : 
                    
                    - Shopping cart system
                    - Filters and Sorting
                    - Online payment
                    - Display of images
                    - Live tracking of order status`,
                    image: "/Images/Nutan/Nutan.png",
                    serviceName: "Web Development",
                    url: "https://nutan.herokuapp.com/Nutan",
                    serviceProvided: [
                        {
                            image: "/Images/react.jpg",
                            name: "ReactJS",
                        },
                        {
                            image: "/Images/node.png",
                            name: "NodeJS",
                        },
                        {
                            image: "/Images/mongo.png",
                            name: "MongoDB",
                        },
                        {
                            image: "/Images/heroku.png",
                            name: "Heroku",
                        }
                    ],
                    fun: "Nutan"
                },
                {
                    name: "CarWash Application",
                    summary: "Carwash application solves the business problem of connecting the workers , customers and the service provider seamlessly for an efficient and affordable car service experience.",
                    details: `This project is about automating registration of car washing service with a user-friendly hybrid application.

                    It aims to improve the overall experience of that service by providing functionalities like tracking of job, feedback mechanisms, flexibility in the selection of service and many more.
                    
                    This mode uses subscription-based services where one has the option to select from various plans.
                    
                    It also aims to improve the process by reducing the usage of water and inculcating better techniques into the process.
                    
                    So this application aims to provide a timely service that is available at affordable rates and more eco-friendly.
                    
                    It also aims for better management of resources and effective communication between various users of the platform.
                    `,
                    image: "/Images/carwash/carwash.png",
                    serviceName: "App Development",
                    url: "https://proto2-1776e.firebaseapp.com/",
                    serviceProvided: [
                        {
                            image: "/Images/ionic.png",
                            name: "Ionic",
                        },
                        {
                            image: "/Images/angular.png",
                            name: "AngularJS",
                        },
                        {
                            image: "/Images/node.png",
                            name: "NodeJS",
                        },
                        {
                            image: "/Images/mongo.png",
                            name: "MongoDB",
                        },
                        {
                            image: "/Images/firebase.png",
                            name: "Firebase",
                        },
                        {
                            image: "/Images/heroku.png",
                            name: "Heroku",
                        }
                    ],
                    fun: "CarWash"
                },
            ]
        }
    }



    Speedwell() {
        this.props.history.push({
            pathname: '/project-details',
            state: this.state.projects[0]
        })
    }

    Nutan() {
        this.props.history.push({
            pathname: '/project-details',
            state: this.state.projects[1]
        })
    }
    
    CarWash() {
        this.props.history.push({
            pathname: '/project-details',
            state: this.state.projects[2]
        })
    }
    render() {
        return (
            <>
                <Container className="mb-5" style={{ width: "100%"}}>
                    <Row style={{ marginTop: "10%",marginBottom:"10%" }} >
                        {this.state.projects.filter((project) => {
                            if (project.serviceName === this.props.history.location.state) {
                                return project
                            }
                            if (this.props.history.location.state === undefined) {
                                return this.state.projects
                            }
                        }).map(project =>
                            <Col className="mx-auto d-flex justify-content-center">
                                <Card className="card1" style={{ height: "400px", marginTop: "15px", marginBottom: "15px" }} >
                                    <Card.Img variant="top" src={project.image} style={{objectFit: "contain"}} />
                                    <Card.Body className="info">
                                        <Card.Title>{project.name}</Card.Title>
                                        <Card.Text>
                                            {project.summary}
                                        </Card.Text>
                                        <button onClick={this[project.fun]}>Explore</button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )}
                    </Row>
                </Container>
            </>
        )
    }
}

export default ProjectComponent