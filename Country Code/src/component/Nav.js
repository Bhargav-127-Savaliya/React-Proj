// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Dropdown from "react-bootstrap/Dropdown";
import { Link } from 'react-router-dom';
import "../App.css";

function NavBar(props) {

  // function sorting(params) {
  //   dispatch({type : "GET_SORT"})
  // }

  return (
    <Navbar expand="lg" data-bs-theme="dark" bg="dark" sticky="top">
      <Container fluid>
        <Navbar.Brand className='logo'>🌏</Navbar.Brand>
        {/* <button onClick={props.onClick}>Sort</button> */}
        <Nav.Link>
          <Link className='tt' to='/'>Home</Link>
        </Nav.Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Dropdown onSelect={props.onSort}>
              <Dropdown.Toggle id="dropdown-basic">
                Sort
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="default">Default</Dropdown.Item>
                <Dropdown.Item eventKey="atoz">atoz</Dropdown.Item>
                <Dropdown.Item eventKey="ztoa">ztoa</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
            <select className='navs' onChange={props.onSort}>
                <option value="default">Default</option>
                <option value="atoz">A to Z</option>
                {/* <option value="ztoa">Z to A</option> */}
            </select>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={props.onChange}
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;