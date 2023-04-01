import {Navbar, Nav, Container} from 'react-bootstrap'
export default function Header(){
    
    return(
        <header>
            <Navbar bg="light" expand="lg" >
            <Container >
                <Navbar.Brand>DAYOON'S PORTFOLIO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="ml-auto">
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/profile'>Profile</Nav.Link>
                    <Nav.Link href='/projects'>Projects</Nav.Link>
                    <Nav.Link href='/contect'>Contect</Nav.Link>
                </Nav>
            </Container>
            </Navbar>
        </header>
    )
}