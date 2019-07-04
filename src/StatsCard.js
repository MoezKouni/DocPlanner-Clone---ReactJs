import React from 'react';
import './StatsCard.css';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card'

const tab=[
    {
        icon: 'https://www.docplanner.com/img/flag.png',
        heading: 'Leader in 10 countries',
        text: 'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile'
    },
    {
        icon: 'https://www.docplanner.com/img/visits.png',
        heading: '1.5 million appointments',
        text: 'booked last month'
    },
    {
        icon: 'https://www.docplanner.com/img/patients.png',
        heading: '30 million unique patients',
        text: 'visit us every month'
    },
    {
        icon: 'https://www.docplanner.com/img/doctors.png',
        heading: '2 million active doctors',
        text: 'trust in our solutions'
    }
]

function StatsCard() {
    
    return (
        <div> 
            <Row className="row-stats">
                {tab.map((el, index) =>
                <Card style={{ width: '14rem', height:'100%' }} className="card-stats">
                <Card.Body className="text-cards">
                  <Card.Title><img src={el.icon}/></Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"><h4>{el.heading}</h4></Card.Subtitle>
                  <Card.Text>
                  <p className="paragraphe-cards">{el.text}</p>
                  </Card.Text>
                </Card.Body>
              </Card>)}
            </Row>
        </div>)
}

export default StatsCard;


