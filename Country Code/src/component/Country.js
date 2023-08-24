import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import NavBar from './Nav';
import "../App.css";

// const API = "https://restcountries.com/v3.1/alpha/{name}";


const Country = () => {
    const [countrydata, setCountrydata] = useState([]);
    // const [search, setSearch] = useState('');
    const [loding, setLoding] = useState(true);
    const { fname } = useParams();
// console.log(fname);

    const fetchData = async () => {
        setLoding(false);
        try {
            const response = await axios.get(`https://restcountries.com/v3.1/alpha/${fname}`);;
            // console.log(response);
            setCountrydata(response.data);
        } catch (error) {
            setCountrydata(error.message);
        }
    }

    useEffect(() => {
        fetchData();
    })

    const err = (e) => {
        alert("Not A Valid Action");
    }

    return (
        <React.Fragment>
            <NavBar onChange={err} />
            <Container>
                {loding && <p className='loding'>Loding...</p>}
                {!loding && <Row>
                    {countrydata.map((data) => {
                        const { flags, name, borders, continents, cca3 } = data;
                        // console.log(borders);
                        return (
                            <Col className='m-2' key={Math.random()}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" width="200px" height="200px" src={flags.png} />
                                    <Card.Body>
                                        <Card.Title>{name.common}</Card.Title>
                                        <Card.Text className='font'><span>Borders :</span>
                                        { 
                                            borders?.map((border) => {
                                                return (
                                                        <Link key={Math.random()} to={`/country/${border}`} className='borderlink' >{border}</Link>
                                                )
                                            })
                                        }
                                        </Card.Text>
                                        <Card.Text>
                                            Country continents : {continents}
                                        </Card.Text>
                                        <Card.Text>
                                            <Link>CCA3:{cca3}</Link>
                                        </Card.Text>
                                        {/* <Button variant="primary">{maps.googleMaps}</Button> */}
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>}
            </Container>
        </React.Fragment>
    )
};

export default Country;
