import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const SingleMeal = ({ eachMeal }) => {

  let { idMeal, strMeal, strMealThumb } = eachMeal;

  let navigate = useNavigate();
  let handleNavigate = () => {
    navigate(`/showDetails/${idMeal}`)
  }



  return (
    <div className='d-inline-flex p-2'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body>
          <Card.Title>{strMeal}</Card.Title>

          <Button onClick={handleNavigate} variant="primary">Show Details</Button>
        </Card.Body>
      </Card>

    </div>
  );
};

export default SingleMeal;