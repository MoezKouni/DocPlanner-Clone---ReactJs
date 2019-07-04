import React from 'react';
import './Stats.css';
import Container from 'react-bootstrap/Container';
import StatsCard from './StatsCard';


function Stats() {
    
    return (
        <div className="stats-section"> 
            <Container>
                <div className="stats-grid">
                    <div className="stats-text" lg={4} md={4} sm={12}>
                        <h1>The world's biggest healthcare platform</h1>
                        <p className="work">We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
                    </div>
                    <StatsCard/>
                </div>
            </Container>
        </div>)
}

export default Stats;