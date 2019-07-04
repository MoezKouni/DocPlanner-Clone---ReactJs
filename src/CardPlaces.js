import React from 'react';
import {Card, Button} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './CardPlaces.css'

const tab=[
    {
        img: 'https://www.docplanner.com/images/warsaw.png',
        title: 'Warsaw'
    },
    {
        img: 'https://www.docplanner.com/images/barcelona.png',
        title: 'Barcelona'
    },
    {
        img: 'https://www.docplanner.com/images/istanbul.png',
        title: 'Istanbul'
    },
    {
        img: 'https://www.docplanner.com/images/rome.png',
        title: 'Rome'
    },
    {
        img: 'https://www.docplanner.com/images/mexico-city.png',
        title: 'Mexico City'
    },
    {
        img: 'https://www.docplanner.com/images/curitiba.png',
        title: 'Curitiba'
    },
]

function CardPlaces() {
    return(
        <Container>
            <Row className="row-countries">
                {tab.map((el, index) => 
                <Col md={4} sm={6} xs={12} className="col-countries">
                    <Card style={{ width: '20rem' }} className="one-card">
                    <Card.Img variant="top" className="img-country" src={el.img} />
                        <Card.Body className="btnAndTitle">
                            <Card.Title>{el.title}</Card.Title>
                            <Button variant="primary">SEE OPENINGS</Button>
                        </Card.Body>
                    </Card>
                </Col>
                )}
            </Row>
        </Container>
    )
}

export default CardPlaces;