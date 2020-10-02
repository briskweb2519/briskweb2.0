import React, { Component } from 'react'
import fb from '../Images/facebook.png'
import instagram from '../Images/instagram.png'
import linkedin from '../Images/linkedin.png'
import Image from 'react-bootstrap/Image'
class FooterComponent extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <>
                <div style={{ backgroundColor: "#195e83", height: "30%", textAlign: "center" }}>
                    <br /><h3 style={{ color: "white" }}>Quick Links</h3><br />
                    <Image src={fb} width="30px"></Image>&nbsp;
                <Image src={instagram} width="30px"></Image>&nbsp;
                <Image src={linkedin} width="30px"></Image><br /><br />
                    <h6 style={{ color: "white" }}>Copyright 2020 &#169; Briskweb</h6>

                    <a class="scroll-up text-center">
                        <span class="left-bar"></span>
                        <span class="right-bar"></span>
                        <svg width="40" height="40">
                            <line class="top" x1="0" y1="0" x2="120" y2="0" />
                            <line class="left" x1="0" y1="40" x2="0" y2="-80" />
                            <line class="bottom" x1="40" y1="40" x2="-80" y2="40" />
                            <line class="right" x1="40" y1="0" x2="40" y2="1200" />
                        </svg>
                    </a>

                    {/* <a class="arrow-up">
                    <span class="left-arm"></span>
                    <span class="right-arm"></span>
                    <span class="arrow-slide"></span>
                </a> */}
                </div>
            </>
        )
    }
}

export default FooterComponent