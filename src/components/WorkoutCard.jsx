import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { Card, Button, Badge } from 'react-bootstrap';
import { WorkoutContext } from '../contexts/workoutContext';

export default function WorkoutCard({workout}){
    const { setWorkouts } = useContext(WorkoutContext);

    const deleteWorkout = () => {
        setWorkouts((prevWorkouts) =>
            prevWorkouts.filter(
                (prevWorkout) => prevWorkout.id !== workout.id
            )
        );
    }

    const categoryColors = {
        'PUSH' : 'bg-primary',
        'PULL' : 'bg-secondary',
        'LEGS' : 'bg-warning',
        'CARDIO' : 'bg-info',
    }
    const categoryBadge = categoryColors[workout.category];

    return(
        <>
            <Card className={`my-3 ${workout.isCompleted ? 'border-success' : ''} shadow bg-white`}>
                <Card.Header>
                        <span className={`badge ${categoryBadge}`}
                            >{workout.category} WORKOUT
                        </span>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{workout.title}</Card.Title>
                    <Card.Text>
                        <ul className="list-unstyled">
                            {workout.description.split('\n').map((item, index) => (
                                <li key={index} className='font-weight-bold'>{item}</li>
                            ))}
                        </ul>
                    </Card.Text>
                    <Card.Text className=''>
                        <h5>
                            <span className={`badge ${workout.isCompleted ? 'bg-success' : 'bg-danger'}`}>
                                {workout.isCompleted ? 'Completed' : 'Not Completed'}
                            </span> 
                        </h5>
                         <Button 
                            as={Link}
                            to={`workout/${workout.id}`}
                            variant='secondary' 
                            >
                            <i className='bi bi-pencil'></i>
                        </Button>
                        <Button variant='danger' onClick={deleteWorkout} className='ms-2'>
                            <i className='bi bi-trash3' ></i>
                        </Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}