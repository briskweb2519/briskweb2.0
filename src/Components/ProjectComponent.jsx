import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'


class ProjectComponent extends Component {
    constructor(props) {
        super(props)
        this.routChange = this.routChange.bind(this)

        this.state = {
            projects: [
                {
                    name: "CarWash Application",
                    summary: "Yeh to boom karega",
                    image: "/Images/69.jpg",
                    serviceName: "App Development"
                },
                {
                    name: "Speedwell",
                    summary: "Yeh to boom karega",
                    image: "/Images/69.jpg",
                    serviceName: "Web Development"
                },
                {
                    name: "Nutan Vastra Bhandar",
                    summary: "Yeh to boom karega",
                    image: "/Images/69.jpg",
                    serviceName: "Web Development"
                }
            ]
        }
    }

    routChange() {
        this.props.history.push('/project-details')
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
                                                <button class="learn-more" onClick={this.routChange}>
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