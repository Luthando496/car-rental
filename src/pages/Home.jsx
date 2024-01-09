import React from 'react'
import FormSection from '../components/FormSection';
import Header from '../components/Header';
import Navbar from '../components/Navbar'
import PlanTrip from '../components/PlanTrip';
import Save from '../components/Save';
import ChooseUs from '../components/ChooseUs';
import Testimonials from '../components/Testimonials';
import Questions from '../components/Questions';
import Store from '../components/Store';
import Footer from '../components/Footer';
import CarModel from '../components/CarModel';




const Home =()=> {
  return (
    <>
        <Navbar />
        <Header />
        <FormSection />
        <PlanTrip />
        <CarModel />
        <Save />
        <ChooseUs />
        <Testimonials />
        <Questions />
        <Store />
        <Footer />
    </>
  )
}


export default Home