import React from 'react';
import { Button, Container } from 'react-bootstrap';
import banner from '../../../assets/banner1.jpg'
import Chefs from '../../Chefs/Chefs';
import Reservation from '../../Reservation/Reservation';
import TopFood from '../../TopFood/TopFood';

const Home = () => {
    return (
        <div className='bg-light'>
            <Container className='container-fluid'>
                <div className='row py-5 mx-auto justify-content-between  '>
                    <div className='col-12 col-md-6 my-auto'>
                        <h1 className=' fs-2 fw-bold text-secondary mb-5'>Welcome to Indian Taste !!!</h1>
                        <h1 className=' fs-1 fw-bolder text-warning mb-4'>We do not cook,<br /> We create your emotions!</h1>
                        <Button variant="warning" className='fw-bold btn-lg text-white'>Make Reservation</Button>
                    </div>
                    <div className='col-12 col-md-6'>
                        <img src={banner} class="rounded-circle img-fluid" alt="" />
                    </div>
                </div>
            </Container>
            <Container>
                <Chefs></Chefs>
                <TopFood></TopFood>
                <Reservation></Reservation>
            </Container>
        </div>
    );
};

export default Home;