import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");

  const handleChanges = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      navigate(`/${searchQuery}`);
    }
  };

  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Link to="/">
            <Navbar.Brand className="text-light" href="#">
              My Weather
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/">
                <div className="text-light nav-link">Home</div>
              </Link>
              <Link to="/:detail">
                <div className="text-light nav-link">My City</div>
              </Link>
            </Nav>
            <Form className="d-flex ml-auto" onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                placeholder="Search here..."
                className="me-2"
                aria-label="Search"
                onChange={handleChanges}
              />
              <Button variant="outline-light" className="ml-2" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
