import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import {datadump1, datadump2} from "../utils/data2";
import { useEffect, useState } from 'react';
// import Tas from "../dump code/mod";


function Task2() {
  const [Search, setSearch] = useState('');
  const [list1, setlist1] = useState(false);
  const [list2, setlist2] = useState(true);

  useEffect(() => {
    const listing = setInterval(func, 1000)
    function func() {
      if (Search.toLowerCase() === '') {
        if (list1 === false || list2 === true) {
          setlist1(true);
          setlist2(false);
          // console.log(1);
        }
        else {
          setlist1(false);
          setlist2(true);
          // console.log(2);
        }
      }
      else{
        setlist1(true);
        setlist2(true);
      }
      clearInterval(listing);
    }
  })


  const changing = (e) => {
    const value = e.target.value.trim();
    // console.log(value);
    setSearch(value);
    // console.log("Done");
  }

  return (
    <Container>
      <h1 className='text-center p-4'>Data Panel Toggled</h1>
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
        {list1 && <tbody>
          {datadump1.filter((item) => {
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
        </tbody>}
        {list2 && <tbody>
          {datadump2.filter((item) => {
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
        </tbody>}
      </Table>
    {/* <Tas /> */}
    </Container>
  );
}

export default Task2;