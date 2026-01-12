import { useContext, useState } from "react";
import { WorkoutContext } from "../contexts/workoutContext";
import { Container, Form, Button } from 'react-bootstrap'
import { useNavigate, useParams } from "react-router-dom";

export default function EditWorkout(){

    const { workouts, setWorkouts } = useContext(WorkoutContext)
    const navigate = useNavigate();
    const id = parseInt(useParams().id);

    const selectedWorkout = workouts.find((workout) => workout.id === id);

    const [title, setTitle] = useState(selectedWorkout?.title || '');
    const [category, setCategory] = useState(selectedWorkout?.category || '');
    const [description, setDescription] = useState(selectedWorkout?.description || '');
    const [isCompleted, setIsCompleted] = useState(selectedWorkout?.isCompleted || false);

    function updateWorkout(e){
        e.preventDefault();
        const updatedWorkouts = workouts.map((workout) => {
            if(workout.id === id){
                return {id, title, category, description, isCompleted}
            }
            return workout;
        })
        setWorkouts(updatedWorkouts);
        navigate('/');
    }

    return(
        <Container className="mt-4">
            <h2 className="my-3">Edit workout</h2>
            <Form onSubmit={updateWorkout}>
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
                            <option value='Push'>Push</option>
                            <option value='Pull'>Pull</option>
                            <option value='Leg'>Leg</option>
                            <option value='Cardio'>Cardio</option>
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