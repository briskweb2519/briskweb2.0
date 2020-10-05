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
                    summary: "Yeh to boom karega",
                    image: "/Images/69.jpg",
                    serviceName: "App Development",
                    url: "https://www.briskweb.in",
                    serviceProvided: [
                        {
                            image: "/Images/web.png",
                            name: "Web design"
                        }
                    ],
                    fun: "CarWash"
                },

                {
                    name: "Speedwell",
                    summary: "Yeh to boom karega",
                    image: "/Images/69.jpg",
                    serviceName: "Web Development",
                    url: "https://www.speedwells.in",
                    serviceProvided: [
                        {
                            image: "/Images/web.png",
                            name: "Web design"
                        }
                    ],
                    fun: "Speedwell"
                },
                
                {
                    name: "Nutan Vastra Bhandar",
                    summary: "Yeh to boom karega",
                    image: "/Images/69.jpg",
                    serviceName: "Web Development",
                    url: "https://www.briskweb.in",
                    serviceProvided: [
                        {
                            image: "/Images/web.png",
                            name: "Web design"
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