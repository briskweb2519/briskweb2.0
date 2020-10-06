import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

class HeaderComponent extends Component {
    // constructor(props){
    //     super(props)
    // }
    render() {
        return (
            <>

                <Navbar sticky="top" collapseOnSelect expand="lg" className="p-3 mb-3" style={{ backgroundColor: "#195e83" }}>
                    <Container>

                        <h3 style={{ color: "white" }}>BRISKWEB</h3>
                        <Navbar.Toggle class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="icon-bar top-bar"></span>
                            <span class="icon-bar middle-bar"></span>
                            <span class="icon-bar bottom-bar"></span>
                        </Navbar.Toggle>

                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto text-centercontainer pullUp ">
                                <Link className="nav-link" to="/" style={{ color: "white" }}>Home</Link>
                                <Link className="nav-link" to="/services" style={{ color: "white" }}>Services</Link>
                                <Link className="nav-link" to="/project" style={{ color: "white" }}>Projects</Link>
                                <Link className="nav-link" to="/about" style={{ color: "white" }}>About</Link>
                                <Link className="nav-link" to="/contact" style={{ color: "white" }}>Contact</Link >
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}

export default HeaderComponent