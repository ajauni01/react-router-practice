
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EachMealCategories from '../EachMealCategories/EachMealCategories';
import './MealCategories.css'

const MealCategories = () => {
  let allMealCategories = useLoaderData();
  // get the array of meal categories
  let allMealCategoriesArray = allMealCategories.categories;


  return (
    <div className='sizing-properties' >
      {
        allMealCategoriesArray.map(eachMealCategory => <EachMealCategories key={eachMealCategory.idCategory} EachMealCategory={eachMealCategory} ></EachMealCategories>)
      }
    </div>
  );
};

export default MealCategories;