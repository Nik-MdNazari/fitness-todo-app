import {Container, Navbar, Nav} from 'react-bootstrap'
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import CreateWorkout from './pages/CreateWorkout'
import { WorkoutContext } from './contexts/workoutContext'
import useLocalStorage from 'use-local-storage'
import EditWorkout from './pages/EditWorkout'
import ViewWorkouts from './pages/ViewWorkouts'

function Layout(){
  const location = useLocation(); // Gives the current navigation location object { pathname, search, hash, state, key}
  const isHome = location.pathname === '/'; // To detect if we are on the home page

  return(
    <>
    <Navbar
    // When on the Home page make the navbar transparent and overlay the hero image.
    // On other routes, use the default light background.
      variant={isHome ? 'dark' : 'light'}
      expand="lg"
      style={{
        backgroundColor: isHome ? 'transparent' : undefined,
        position: isHome ? 'absolute' : undefined,
        top: isHome ? 0 : undefined,
        left: isHome ? 0 : undefined,
        right: isHome ? 0 : undefined,
        zIndex: isHome ? 1050 : undefined,
      }}
    >
        <Container>
          <Navbar.Brand href='/' style={{ color: isHome ? 'white' : undefined, fontSize: '32px'}}>Fitness +</Navbar.Brand>
            <Nav className='ms-auto'>
              <Nav.Link href='/workouts' style={{ color: isHome ? 'white' : undefined, fontSize: '18px' }}>View Routine</Nav.Link>
              <Nav.Link href='/create' style={{ color: isHome ? 'white' : undefined, fontSize: '18px' }}>Create Workout</Nav.Link>
              <Nav.Link href='/error' style={{ color: isHome ? 'white' : undefined, fontSize: '18px' }}>Error Page (Test)</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    <Outlet/>
    </>
  );
}

export default function App() {
  const [workouts, setWorkouts] = useLocalStorage('workouts', []);
  
  return (
      <WorkoutContext.Provider value={{workouts, setWorkouts}}>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='/workouts' element={<ViewWorkouts/>}/>
            <Route path='/create' element={<CreateWorkout/>}/>
            <Route path='*' element={<ErrorPage />}/>
            <Route path='workout/:id' element={<EditWorkout/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      </WorkoutContext.Provider>
  );
}
