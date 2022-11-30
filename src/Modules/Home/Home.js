import React from 'react';
import './Home.css';
import icon from '../../Resources/Images/Icon.jpg';

const Home = () => {
  return (
    <div className="h-screen min-h-screen">
      <div className="site-header flex flex-col justify-center items-center h-1/2 min-h-fit text-justify bg-black">
        <h1 className="title text-white text-center w-full text-5xl tracking-widest">
          THEO THEODOROU
        </h1>
        <h2 className="text-white mt-4">SO GOOD THEY NAMED ME TWICE.</h2>
        <img
          src={icon}
          alt="profile icon"
          className="w-1/5 mt-4 rounded-full"
        />
      </div>
    </div>
  );
};

export default Home;
