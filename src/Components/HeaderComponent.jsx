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
                <Navbar sticky="top" collapseOnSelect expand="lg" className="p-3" style={{backgroundColor:"white"}}>
                    <Container>

                        <h3 style={{ color: "#195e83" }}>BRISKWEB</h3>
                        <Navbar.Toggle class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="icon-bar top-bar"></span>
                            <span class="icon-bar middle-bar"></span>
                            <span class="icon-bar bottom-bar"></span>
                        </Navbar.Toggle>

                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto text-center">
                                <Link className="nav-link" to="/" style={{ color: "#195e83" }}>Home</Link>
                                <Link className="nav-link" to="/services" style={{ color: "#195e83" }}>Services</Link>
                                <Link className="nav-link" to="/project" style={{ color: "#195e83" }}>Projects</Link>
                                <Link className="nav-link" to="/about" style={{ color: "#195e83" }}>About</Link>
                                <Link className="nav-link" to="/contact" style={{ color: "#195e83" }}>Contact</Link >
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}

export default HeaderComponent