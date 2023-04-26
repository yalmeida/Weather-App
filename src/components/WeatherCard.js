import React from 'react';
import { Card } from 'react-bootstrap';
import './WeatherCard.css';
import TitleCase from 'react-title-case';


const WeatherCard = ({ data }) => {
  return (
    <Card className='my-4'>
      <Card.Body>

        <Card.Title>{data.name}, {data.sys.country}</Card.Title>
        <Card.Text> <TitleCase string={data.weather[0].description} /></Card.Text>
        <Card.Text>
          Temperature: {Math.round(data.main.temp - 273.15)}°C
        </Card.Text>
        <Card.Text>Wind Speed: {Math.round(data.wind.speed)} meter/sec
        </Card.Text>
        <Card.Text>Humidity: {data.main.humidity}%</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;