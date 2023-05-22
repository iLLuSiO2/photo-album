import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Static(){
    return (
        <div className="static_main">
            <Row className="f_static">
                <Col md={3} className="static_col">
                    <h1>15+</h1>
                    <h2>Years of love 💞</h2>
                </Col>
                <Col md={3} className="static_col">
                    <h1>1500+</h1>
                    <h2>Photos Taken 📸</h2>
                </Col>
                <Col md={3} className="static_col">
                    <h1>10000+</h1>
                    <h2>Memories 💎</h2>
                </Col>
                <Col md={3} className="static_col">
                    <h1>Infinite ♾️+</h1>
                    <h2>Love 👩‍❤️‍👨</h2>
                </Col>
            </Row>
        </div>
    )
}

export default Static;