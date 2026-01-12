import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import WorkoutCard from "../components/WorkoutCard";
import { WorkoutContext } from "../contexts/workoutContext";


function CardGroup({ workouts }){
    return workouts.map((workout) => {
        return(
            <Col md={4}>
                <WorkoutCard key={workout.id} workout={workout} />
            </Col>
        );
    });
}

export default function ViewWorkouts(){
    const workouts = useContext(WorkoutContext).workouts;

    return(
        <Container>
            <h1 className="my-3">Your Workouts</h1>
            <Row>
                <CardGroup workouts={workouts}/>
            </Row>
        </Container>
    );
}