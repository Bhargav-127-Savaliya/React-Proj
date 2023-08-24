import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from './Nav';
import "../App.css";

const API = "https://restcountries.com/v3.1/all";


const HomePage = () => {
    const [countrydata, setCountrydata] = useState([]);
    const [search, setSearch] = useState('');
    const [loding, setLoding] = useState(true);
    const [sort, setSort] = useState("default");


    const fetchData = async (DATA_API) => {
        setLoding(false);
        try {
            const response = await axios.get(DATA_API);
            // console.log(response);
            setCountrydata(response.data);
        } catch (error) {
            setCountrydata(error.message);
        }
    }

    useEffect(() => {
        fetchData(API);
    },[])

    const searchhandler = (e) => {
        const val = e.target.value;
        setSearch(val.trim());
    }
    const sorting = () => {
        if (sort === "default") {
            setSort("atoz");
           countrydata.sort((a, b) =>
                a.name.common > b.name.common ? 1 : -1,
            )
        }
        // else if(sort === "default" || sort === "atoz"){
        //     setSort("ztoa");
        //     countrydata.sort((a, b) =>
        //         a.name.common < b.name.common ? 1 : -1,
        //     )
        // }
        else{
            setSort("default");
            fetchData(API);
        }
    }

    return (
        <React.Fragment>
            <NavBar onChange={searchhandler} onSort={sorting}/>
            {/* <select onChange={sorting}>
                <option value="default">default</option>
                <option value="atoz">atoz</option>
                <option value="ztoa">ztoa</option>
            </select> */}
            <Container>
                {loding && <p className='loding'>Loding...</p>}
                {!loding && <Row>
                    {countrydata.filter(
                        (data) => {
                            return search.toLowerCase() === ''
                                ? data
                                : data.name.common.toLowerCase().includes(search) || data.continents.toString().toLowerCase().includes(search)
                        }
                    ).map((data) => {
                        const { flags, name, borders, continents, cca3, maps } = data;
                        // console.log(borders);
                        return (
                            <Col className='m-2' key={Math.random()} >
                                <Card className='cardbox' style={{ width: '18rem' }}>
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
                                            <a className='openMap' href={maps.googleMaps} target='_blank' rel="noreferrer">Open Map</a>
                                        </Card.Text>
                                        
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

export default HomePage;
