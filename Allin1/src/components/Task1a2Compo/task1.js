import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { data } from '../utils/data';
import { useState } from 'react';


function Task1() {
  const [Search, setSearch] = useState('');

  const changing = (e) => {
    const value = e.target.value.trim();
    // console.log(value);
    setSearch(value);
  }

  return (
    <Container>
      <h1 className='text-center p-4'>User Data</h1>
      <Form>
        <Form.Group className="mb-3 p-2" controlId="exampleForm.ControlInput1">
          <Form.Control onChange={changing} placeholder="Search Here" />
        </Form.Group>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {data.filter((item) => {
            return Search.toLowerCase() === ''
              ? item
              : item.first_name.toLowerCase().includes(Search) || item.last_name.toLowerCase().includes(Search) || item.contact.toLowerCase().includes(Search) || item.email.toLowerCase().includes(Search);
          }).map((list) => (
            <tr key={list.id}>
              <td>{list.id}</td>
              <td>{list.first_name}</td>
              <td>{list.last_name}</td>
              <td>{list.email}</td>
              <td>{list.contact}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Task1;