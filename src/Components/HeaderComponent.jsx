import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
// import logo from '../Images/logo.png'
class HeaderComponent extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" className="p-3">
                    <Container>

                        {/* <Image src={logo} width='10%' rounded className="img-fluid z-depth-1 wow tada" data-wow-delay="0.2s" /> */}
                        {/* <div class="wrapper"> */}
                        <h3 style={{ color: "#195e83" }}>BRISKWEB</h3>
                        {/* </div> */}
                        <Navbar.Toggle class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="icon-bar top-bar"></span>
                            <span class="icon-bar middle-bar"></span>
                            <span class="icon-bar bottom-bar"></span>
                        </Navbar.Toggle>

                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto text-center">
                                <Nav.Link href="/" style={{ color: "#195e83" }}>Home</Nav.Link>
                                <Nav.Link href="/services" style={{ color: "#195e83" }}>Services</Nav.Link>
                                <Nav.Link href="/project" style={{ color: "#195e83" }}>Projects</Nav.Link>
                                <Nav.Link href="/about" style={{ color: "#195e83" }}>About</Nav.Link>
                                {/* <Nav.Link href="#Technology" style={{ color: "#195e83" }}>Technology</Nav.Link> */}
                                <Button variant="primary" style={{ backgroundColor: "#195e83",textDecoration:"none"}} href="/contact">Contact</Button >
                                {/* <Nav.Link href="#Contact" style={{ color: "black" }}>Contact</Nav.Link> */}
                            </Nav>
                        </Navbar.Collapse>

                    </Container>
                </Navbar>
            </>
        )
    }
}

export default HeaderComponent