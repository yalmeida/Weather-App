import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, FormGroup } from 'react-bootstrap';
import WeatherCard from './components/WeatherCard.js';
import './WeatherApp.css';

const WeatherApp = () => {
  //these are all constants that will be used to set the name of city, name of state, and data to be scraped onto card
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  //api key
  const API_KEY = 'c4dc9c3f15cb0fdb361637cde2efbb6a';

  const handleSearch = async (e) => {
    e.preventDefault();
    //response lies within answer
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},us&appid=${API_KEY}`
    );
    setWeatherData(response.data);
  };

  return (
    <div>
    <Container className='my-4'>
      
      <h1 className='top'>Weather App</h1>
      <Form onSubmit={handleSearch}>
        <Form.Group controlId='formBasicCity'>

      
          <Form.Control
            className='SEARCH'
            type='text'
            placeholder='Enter city'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
           <Form.Group />
          <Form.Control
            type='text'
            placeholder='Enter state'
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
       

<Button variant='primary' type='submit'>
          Search
        </Button>
        </Form.Group>
        
      </Form>
      {weatherData && <WeatherCard data={weatherData} />}
    </Container>
    </div>
  );
};

export default WeatherApp;
