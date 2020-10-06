import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'


class ProjectComponent extends Component {
    constructor(props) {
        super(props)
        this.CarWash = this.CarWash.bind(this)
        this.Speedwell = this.Speedwell.bind(this)
        this.Nutan = this.Nutan.bind(this)

        this.state = {
            projects: [
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
                    image: "/Images/69.jpg",
                    serviceName: "App Development",
                    url: "https://www.briskweb.in",
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

                {
                    name: "Speedwell",
                    summary: "Speedwell Cycle Industries is a company which owns the wholesale supply of various companies of sports goods and automobile tyre-tubes.",
                    details: "",
                    image: "/Images/69.jpg",
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
                    summary: "Nutan Vastra Bhandar owns a manufacturing, designing, and selling of sarees, kurtis, and various tradditional garments. It tops the market for 86 years.",
                    details: "",
                    image: "/Images/69.jpg",
                    serviceName: "Web Development",
                    url: "https://www.briskweb.in",
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
                }
            ]
        }
    }


    CarWash() {
        this.props.history.push({
            pathname: '/project-details',
            state: this.state.projects[0]
        })
    }

    Speedwell() {
        this.props.history.push({
            pathname: '/project-details',
            state: this.state.projects[1]
        })
    }

    Nutan() {
        this.props.history.push({
            pathname: '/project-details',
            state: this.state.projects[2]
        })
    }
    render() {
        return (
            <>
                <Container>
                    <div>
                        <CardDeck style={{ width: "100%" }}>
                            {this.state.projects.filter((project) => {
                                if (project.serviceName === this.props.history.location.state) {
                                    return project
                                }
                                if (this.props.history.location.state === undefined) {
                                    return this.state.projects
                                }
                            }).map(project =>
                                <div class="frame">
                                    <Card style={{ width: "100%", height: "400px", marginTop: "15px", marginBottom: "15px" }} >
                                        <Card.Img variant="top" src={project.image} />
                                        <Card.Body class="details" style={{ width: "80%" }}>
                                            <Card.Title>{project.name}</Card.Title>
                                            <Card.Text>
                                                {project.summary}
                                            </Card.Text>
                                            <div id="container">
                                                <button class="learn-more" onClick={this[project.fun]}>
                                                    <span class="circle" aria-hidden="true">
                                                        <span class="icon arrow"></span>
                                                    </span>
                                                    <span class="button-text">View Project</span>
                                                </button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )}
                        </CardDeck>
                    </div>
                </Container>
            </>
        )
    }
}

export default ProjectComponent