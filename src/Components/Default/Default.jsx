import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleMeal from '../SingleMeal/SingleMeal';

const Default = () => {
  let allItems = useLoaderData();
  let allMeals = allItems.meals;

  return (
    <div className='ms-5 ps-5 mt-5'>
      <h3 className='text-center'> Welcome to Dhaka Sweets & Restaurant</h3>
      <div>
        {
          allMeals.map(eachMeal => <SingleMeal eachMeal={eachMeal} key={eachMeal.idMeal}></SingleMeal>)
        }

      </div>
    </div>
  );
};

export default Default;