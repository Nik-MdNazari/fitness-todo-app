import { useState, useContext } from "react";
import { Row, Col, Card, Container, Form, Button } from "react-bootstrap";
import WorkoutList from "../components/WorkoutList";
import { WorkoutContext } from "../contexts/workoutContext";
import { useNavigate } from "react-router-dom";


const WorkoutForm = () => {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('')
    const [isCompleted, setIsCompleted] = useState(false);

    const { workouts, setWorkouts } = useContext(WorkoutContext);
    const navigate = useNavigate();

    function createWorkout(e){
        e.preventDefault();
        setWorkouts([... workouts, {id:Date.now(), title, category, description, isCompleted}]);
        navigate('/')

        console.log({
            title,
            category,
            description,
            isCompleted
        })
    }

    return(
        <Container className="mt-4">
            <h2 className="my-3">Create your own workout</h2>
            <Form onSubmit={createWorkout}>
                <Form.Group className="mb-3">
                    <Form.Label>Workout title</Form.Label>
                    <Form.Control 
                        placeholder="Workout A"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </Form.Group>
                    <Form.Group className="mb-3">
                    <Form.Select 
                        value={category}
                        onChange={(e) => setCategory(e.target.value)} 
                        required
                        >
                            <option>- Workout category -</option>
                            <option value='PUSH'>Push</option>
                            <option value='PULL'>Pull</option>
                            <option value='LEGS'>Legs</option>
                            <option value='CARDIO'>Cardio</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Workout exercises</Form.Label>
                    <Form.Control 
                        as='textarea'
                        rows={5}
                        placeholder={'1. Incline Bench Press - 3 sets of 8 reps \n2. Overhead Press - 3 sets of 8 reps \n3. Lateral Raises - 3 sets of 12 reps \n4. Tricep Pushdowns - 3 sets of 12 reps'}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Check 
                    type="checkbox"
                    label='Mark as completed'
                    checked={isCompleted}
                    onChange={(e)=>{setIsCompleted(e.target.checked)}}
                    className="mb-3"
                />
                <Button className='mb-3' variant='primary' type='submit'>Add Workout</Button>
            </Form>
        </Container>
    );
}

export default function CreateWorkout(){
    return(
        <Container>
            <Row>
                <Col md={6}>
                    <WorkoutForm/>
                </Col>
                <Col md={6}>
                    <WorkoutList/>
                </Col>
            </Row>
            
        </Container>
    );
}
