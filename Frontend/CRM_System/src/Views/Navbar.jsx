import { useLocation } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


{/* <div style={{display: 'flex', flexDirection: 'row'}}> */}
{/* </div> */}

export default function NavBar() {  
    const { state } = useLocation()

    return (    
        <Navbar expand="lg" sticky='top' data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home">CRN System</Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
            {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
                {console.log(state?.isLogedin)}
                {state?.isLogedin && <Nav>
                    <NavDropdown title={state.name} id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Log out</NavDropdown.Item>
                    </NavDropdown>
                </Nav>}
            {/* </Navbar.Collapse> */}
                <Form inline="true">
                    <Row>
                        <Col xs="auto">
                            <Form.Control type="text" placeholder="Search" className=" mr-sm-2"/>
                        </Col>
                        <Col xs="auto">
                            <Button type="submit">Submit</Button>
                        </Col>
                    </Row>
                </Form>
        </Container>
        </Navbar>
    );
}