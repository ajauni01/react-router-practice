import React from 'react';
import Navbar from '../Navbar';
import { Outlet, useNavigate, useNavigation } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import './Home.css'


const Home = () => {
  let navigation = useNavigation();
  return (
    <div>
      <Navbar></Navbar>

      <div className='toggle-spinner'>
        {navigation.state === 'loading' && <Spinner animation="border" variant="success" />}
      </div>

      <Outlet></Outlet>

    </div>
  );
};

export default Home;