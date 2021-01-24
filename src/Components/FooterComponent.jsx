import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'

class FooterComponent extends Component {
    // constructor(props){
    //     super(props)
    // }
    render() {
        return (
            <>
                <div style={{ backgroundColor: "#195e83", textAlign: "center",bottom:"0 !important" }}>
                    <br />
                    <h3 style={{ color: "white" }}>Quick Links</h3>
                    <br />
                    <Image src="/Images/facebook.png" width="30px" ></Image>&nbsp;
                    <a href="https://www.instagram.com/briskweb/"><Image src="/Images/instagram.png" width="30px"></Image></a>&nbsp;
                    <Image src="/Images/linkedin.png" width="30px"></Image>
                    <br /><br />
                    <h6 style={{ color: "white", paddingBottom: "2%" }}>Copyright 2020 &#169; Briskweb</h6>

                    {/* <Link className="scroll-up text-center" to="/">
                        <span className="left-bar"></span>
                        <span className="right-bar"></span>
                        <svg width="40" height="40">
                            <line className="top" x1="0" y1="0" x2="120" y2="0" />
                            <line className="left" x1="0" y1="40" x2="0" y2="-80" />
                            <line className="bottom" x1="40" y1="40" x2="-80" y2="40" />
                            <line className="right" x1="40" y1="0" x2="40" y2="1200" />
                        </svg>
                    </Link> */}

                    {/* <a className="arrow-up">
                    <span className="left-arm"></span>
                    <span className="right-arm"></span>
                    <span className="arrow-slide"></span>
                </a> */}
                </div>
            </>
        )
    }
}

export default FooterComponent