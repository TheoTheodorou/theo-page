import React from 'react';
import './Home.css';
import icon from '../../Resources/Images/Icon.jpg';
import Particle from '../../Components/Particles/Particle';

const Home = () => {
  return (
    <div className="h-screen min-h-screen">
      <div className="site-header flex flex-col justify-center items-center h-full min-h-fit text-justify">
        <Particle />
        <h1 className="title text-white text-center w-full text-5xl tracking-widest z-10">
          THEO THEODOROU
        </h1>
        <h2 className="text-white mt-4">SO GOOD THEY NAMED ME TWICE.</h2>
        <img
          src={icon}
          alt="profile icon"
          className="w-40 mt-12 rounded-full"
        />
        <h4 className="text-white mt-4 underline">Front end Developer</h4>
      </div>
    </div>
  );
};

export default Home;
