import React from 'react';
import Container from 'react-bootstrap/Container';
import {Row} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import './Paragraphe.css';

const tabParg= [
    "We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.",
    "We also help doctors to better manage their practice. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients."
]

function Paragraphe() {
    return (<div> 
        <Container className="paragraphe-container">
            <Row className="row-paragraphe">
                {tabParg.map((el, index) =>
                <Col className='col-paragraphe' key={index} lg={5} md={5} sm={12}>
                    <p>{el}</p>
                </Col>)}
            </Row>
        </Container>
        </div>
            )
}

export default Paragraphe;