import React, { useState } from 'react';
import './EachMealCateories.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';



const EachMealCategories = ({ EachMealCategory }) => {
  let { strCategory, strCategoryThumb, strCategoryDescription } = EachMealCategory;

  let navigate = useNavigate();
  let handleNavigate = () => {
    navigate(-1);
  }


  let [fullDescription, setFullDescription] = useState(false);
  //  function to toggle the description to true or false depending on the state
  let toggleDescription = () => {
    setFullDescription(!fullDescription);
  }


  return (
    <div className='d-inline-flex p-2 parent-div'>
      <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src={strCategoryThumb} />
        <Card.Body>
          <Card.Title>{strCategory}</Card.Title>
          <Card.Text>

            {strCategoryDescription && (
              <>
                {fullDescription ? (
                  <>
                    <p>{strCategoryDescription.slice(0, 300)}</p>
                    <button onClick={toggleDescription}>Read Less</button> </>)
                  : (
                    <>
                      <p>{strCategoryDescription.slice(0, 150)}</p> <button onClick={toggleDescription}>Read More</button> </>
                  )
                }
              </>)}
          </Card.Text>

          <Button onClick={handleNavigate} className='btn-goBack' variant="primary">Go Back</Button>
        </Card.Body>
      </Card>

    </div>
  );
};

export default EachMealCategories;
