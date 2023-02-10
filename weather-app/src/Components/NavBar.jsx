import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand className='text-light' href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='text-light'>Home</Nav.Link>
            <Nav.Link className='text-light'>Link</Nav.Link>
          </Nav>
          <Form className="d-flex ml-auto">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light" className='ml-2'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </>
  );
}

export default NavBar;