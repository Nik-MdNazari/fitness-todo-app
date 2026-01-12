import { useContext } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import WorkoutCard from "../components/WorkoutCard";
import { WorkoutContext } from "../contexts/workoutContext";

import overlayImage from "../assets/card-image-overlay-home.jpg";


function CardGroup({ workouts }){
    return workouts.map((workout) => {
        return(
            <Col key={workout.id} md={4} className="mb-4">
                <WorkoutCard workout={workout} />
            </Col>
        );
    });
}

export default function Home(){
    const workouts = useContext(WorkoutContext).workouts;

    return(
        <div>
            {/* Background as image with overlay text */}
            <div
                style={{
                    backgroundImage: `url(${overlayImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '60vh',
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    color: 'white'
                }}
            >
                {/* subtle dark overlay to make the background image darker, improving text contrast */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.25))'
                }}/>

                <Container style={{ position: 'relative', zIndex: 2 }}>
                    <Row>
                        <Col md={8} className="py-5">
                            <h1 className="display-4 fw-bold">Fitness Tracker</h1>
                            <p className="lead">Transforming fitness into a lifestyle — build custom workouts and track your progress.</p>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Workouts list - using a conditional rendering to only display workout cards if workouts exists*/}
            <Container className="py-5">
                <h2 className="mb-4">Your Workouts</h2>
                {workouts && workouts.length > 0 ? (
                    <Row>
                        <CardGroup workouts={workouts}/>
                    </Row>
                ) : (
                    <div className="text-center text-muted py-5">
                        <p className="mb-0">No workouts yet. Create your first workout to get started.</p>
                    </div>
                )
                }
                
            </Container>
        </div>
    );
}