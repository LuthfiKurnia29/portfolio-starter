import React from 'react';
import about from '../assets/me.jpg';
import be from '../assets/be.jpg';
import visit from '../assets/VisitCC.jpg'
import openHouse from '../assets/openHouse.jpg';
import laravel from '../assets/laravel-removebg-preview.png';
import dotnet from '../assets/net-removebg-preview.png';
import redis from '../assets/redis-removebg-preview.png';
import sqlServer from '../assets/sql_server-removebg-preview.png'
import node from '../assets/node-removebg-preview.png';
import react from '../assets/react-removebg-preview.png';
import tailwind from '../assets/tailwind-removebg-preview.png';
import sql from '../assets/sql_server-removebg-preview.png';
import typescript from '../assets/Typescript_logo_2020.png';


const About = () => {
  return (
    <div className='section' id='about'>
      <div className='flex container mx-auto justify-between'>
      <img src={about} alt='' className='rounded-bl-full rounded-tr-full w-72' />
        <div className='flex flex-col sm: p-4'>
          <h1 className='text-3xl font-bold text-center'>About Me</h1>
          <p>
          I hail from Surabaya and hold a graduated in Software Engineering from a vocational high school. I have previously interned at software house in Surabaya.
          </p>
          <p>
          In October 2023 - January 2024, I have internship at PT United Tractors Tbk as a Backend Developer, Specialized in Dotnet Development.
          And now, I am as a Freelance Fullstack Developer at Sekawan Media.
          <hr />
          <div className='container mx-auto mt-8'>
            <h1 className='text-center text-3xl font-bold h-[90px]'>Provicient skills relate in : </h1>
            <div className='grid grid-cols-3 gap-8 px-40 justify-center items-center'>
              <img src={dotnet} className='w-20' alt='' />
              <img src={tailwind} className='w-30 items-center' alt='' />
              {/* <img src={node} className='w-20' alt='' /> */}
              <img src={laravel} className='w-20' alt='' />
              <img src={react} className='w-20' alt='' />
              <img src={sql} className='w-20' alt='' />
              {/* <img src={redis} className='w-60' alt='' /> */}
              <img src={typescript} className='w-20' alt='' />
            </div>
          </div>
          </p>
          </div>
      </div>
    </div>
    );
};

export default About;
