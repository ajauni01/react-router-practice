

import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ShowDetails.css'

const ShowDetails = () => {
  let specificMeal = useLoaderData();
  let selectedMeal = specificMeal.meals;
  console.log(selectedMeal);
  //  'go back button properties'
  let navigate = useNavigate();
  let handleNavigate = () => {
    navigate(-1); // it will go one page back
  }

  return (
    <div className='d-inline-flex align-show-details'>
      <Card style={{ width: '35rem' }}>
        <Card.Img src={selectedMeal[0].strMealThumb} />
        <Card.Body>
          <Card.Title className='text-center mb-3 fs-2'>{selectedMeal[0].strMeal}</Card.Title>
          <Card.Text>
            <p><span className='fw-bold'>Food Tags: </span> {selectedMeal[0].strTags ? selectedMeal[0].strTags : 'Unavailable'}</p>

            <p ><span className='fw-bold'>Cooking Instructions: </span> {selectedMeal[0].strInstructions}</p>
          </Card.Text>
          <Button onClick={handleNavigate} variant="primary">Go Back</Button>
        </Card.Body>
      </Card>


    </div>
  );
};

export default ShowDetails;