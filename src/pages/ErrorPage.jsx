import { Container } from "react-bootstrap";

export default function ErrorPage(){
    return(
        <Container className="d-flex flex-column align-items-center my-5">
            <h1>Ooops</h1>
            <p>Error: Page not found!</p>
        </Container>
    )
}