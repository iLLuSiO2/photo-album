import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Home(){

    const logo = require('../images/ab_edit2.jpg'); // with require

    return(
        <div className="Home_div">
            
            <Row className="mx-auto">
                <Col className="Home_main" md={6}><h1 className="main_text">
                    <span className="first_text">BELATED</span> HAPPY BIRTHDAY 🎂</h1>
                    <p className="p_text">Abisha S 💚💙</p>
                </Col>
                <Col md={6}><img align="right" id="first_img" src={logo} alt="Cute" /></Col>
            </Row>
            
                
        </div>
    )
}

export default Home;