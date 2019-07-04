import React from 'react';
import patients from './patients.png';
import doctors from './doctors.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Card.css';
import Dropdown from 'react-bootstrap/Dropdown'


const tab = [
    {
        for: 'For patients',
        text: 'Find a doctor, book a visit and solve any health-related doubt',
        imgSrc : patients
    },
    {
        for: 'For doctors',
        text: 'Save time managing visits and cut no-shows by half',
        imgSrc : doctors
    }
]


var styleCard= {}
function Card() {
    
    return (<div> 
        <Container>
            <Row className="row">
                {tab.map((el, index) =>
                <Col className='col' lg={5} key={index} sm={12} xs={12} style={(el.for === "For patients") ? (styleCard={backgroundColor: '#00bfa5'}) : (styleCard={backgroundColor:'#3D83DF'})} >
                    <h6>{el.for}</h6>
                    <h3>{el.text}</h3>
                    {(el.for === "For patients") && <Dropdown>
                                                        <Dropdown.Toggle variant="light" id="dropdown-basic">CHOOSE COUNTRY</Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1">Argentina</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Australia</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">Brazil</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">France</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">Tunisia</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>}
                    <img src={el.imgSrc} alt="our plateform" className="imgPc"/>
                </Col>)}
            </Row>
        </Container>
        </div>)
}

export default Card;