import React from 'react';
import './Navbar.css'
import ActiveLink from './ActiveLink/ActiveLink';


const Navbar = () => {

  return (
    <nav className='text-center mt-5'>
      <ActiveLink to="/">Home</ActiveLink>
      <ActiveLink to="/categories"> Meal Categories</ActiveLink>
      <ActiveLink to="/randomMeal">Choose Random Meal</ActiveLink>
      <ActiveLink to="/foodArea">Food Area</ActiveLink>
      <ActiveLink to="/about">About</ActiveLink>
      <ActiveLink to="/contact">Contact</ActiveLink>
    </nav>


  );
};

export default Navbar;