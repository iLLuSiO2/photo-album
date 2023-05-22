import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import text1 from "./others/text";

function Moments(){


    const img1 = require('../images/ab_teach.jpg');
    const img2 = require('../images/ab_collage.jpg');

    
    const text2 = "I know that you are not physically fine for a long period of time now. I want you to know that I admire your strength and resilience in facing the challenges that come with PCOS. I understand that living with PCOS can be difficult, both physically and emotionally, but I want you to remember that you are not alone in this journey. I know you won't trust me, but I swear on my life that you are one of the most attractive women I have ever seen. Even hot models or pornstars don't come close, haha. This was my thinking of you years ago, and even when you had some acnes on your face due to the syndrome, my thoughts never changed. I realized that what was attractive was not your face, but rather the personality and attitude that you show through it is what makes it attractive. You are a beautiful person inside and out, and PCOS does not define you. Your worth is not determined by any condition or circumstance. I want you to always remember that you are strong, capable, and deserving of love and happiness. I am here for you, ready to support you in any way that I can. Whether it's lending a listening ear, accompanying you to appointments, or simply being there for a comforting hug, know that I am by your side. ";


    return (
        <div className="moments_row">
            <Row className="f_moments">
                <Col md={6}>
                    <h1>STOP STRESSING, GOD IS WORKING</h1>
                    <p>{text1}</p>
                </Col>
                <Col md={6}>
                    <img align="right" id="first_img" src={img1} alt="Cute" />
                </Col>
            </Row>
            <Row className="s_moments">
                <Col className="second_mom" md={6}>
                    <img align="right" id="first_img" src={img2} alt="Cute" />
                </Col>
                <Col md={6}>
                    <p>{text2}</p>
                </Col>
                
            </Row>
        </div>
    )
}

export default Moments;