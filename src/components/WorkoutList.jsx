import { Row, Col, Card, Container } from "react-bootstrap";
import workoutImage1 from "../assets/workoutImage1.jpg";
import workoutImage2 from "../assets/workoutImage2.jpg";
import workoutImage3 from "../assets/workoutImage3.jpg";
import workoutImage4 from "../assets/workoutImage4.jpg";

export default function WorkoutList(){
    /*
    PUSH WORKOUT - Push-Ups, Incline Push-Ups, Bench Press, Incline Bench Press, Overhead Press
    PULL WORKOUT - Pull-Ups, Lateral Pulldown Cable Machine, Rows, Deadlift
    LEGS WORKOUT - Squats, Lunges, Leg Press Machine 
    CARDIO WORKOUT - Walking, Running, Biking, Rowing
    */

    const pushWorkouts = ['Push-Ups','Incline Push-Ups','Bench Press','Incline Bench Press', 'Overhead Press'];
    const pullWorkouts = ['Pull-Ups','Lateral Pulldown Cable Machine ','Rows','Deadlift'];
    const legWorkouts = ['Squats', 'Lunges', 'Leg Press Machine'];
    const cardioWorkouts = ['Run', 'Bike', 'Walking', 'Rowing'];

    return(
        <Container>
            <Row>
                <h3 className="mt-4 mb-2">Exercises options</h3>
                <Row className="row row-cols-1 row-cols-md-2 g-3 mt-0">
                    <Col>
                        <Card className="h-100 mt-0">
                        <Card.Img src={workoutImage1} className="card-img-top" alt="Shoulder press exercise image"/>
                        <Card.Body>
                            <Card.Title>Push Workouts</Card.Title>
                            <Card.Text>
                                <ul>
                                {pushWorkouts.map((workout, index) => (
                                    <li key={index}>{workout}</li>
                                ))}
                                </ul>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="h-100">
                        <Card.Img src={workoutImage2} className="card-img-top" alt="Deadlift exercise"/>
                        <Card.Body>
                            <Card.Title>Pull Workouts</Card.Title>
                            <Card.Text>
                                <ul>
                                    {pullWorkouts.map((workout, index) => (
                                        <li key={index}>{workout}</li>
                                    ))}
                                </ul>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-5">
                        <Card className="h-100">
                        <Card.Img src={workoutImage3} className="card-img-top" alt="Leg day with kettlebells"/>
                        <Card.Body>
                            <Card.Title>Leg Workouts</Card.Title>
                            <Card.Text>
                                <ul>
                                    {legWorkouts.map((workout, index) => (
                                        <li key={index}>{workout}</li>
                                    ))}
                                </ul>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-5">
                        <Card className="h-100">
                        <Card.Img src={workoutImage4} className="card-img-top" alt="Girl running on a treadmill "/>
                        <Card.Body>
                            <Card.Title>Cardio Exercises</Card.Title>
                            <Card.Text>
                                <ul>
                                    {cardioWorkouts.map((workout, index) => (
                                        <li key={index}>{workout}</li>
                                    ))}
                                </ul>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Row>
        </Container>
    );
}