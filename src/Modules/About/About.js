import React from 'react';
import Particle from '../../Components/Particles/Particle';

const About = () => {
  return (
    <div className="h-screen min-h-screen">
      <Particle />
      <div className="site-header flex flex-col justify-center items-center h-1/2 min-h-fit text-justify bg-gray-900"></div>
    </div>
  );
};

export default About;
