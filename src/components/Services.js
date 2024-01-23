import React from 'react';
import dotnet from '../assets/net-removebg-preview.png'
import tailwind from '../assets/tailwind-removebg-preview.png';
import node from '../assets/node-removebg-preview.png';
import laravel from '../assets/laravel-removebg-preview.png';
import react from '../assets/react-removebg-preview.png';
import sql from '../assets/sql_server-removebg-preview.png';
import redis from '../assets/redis-removebg-preview.png';
import typescript from '../assets/Typescript_logo_2020.png';

const Services = () => {
  return (
    <div className='section bg-black/40' id='services'>
      <div className='container mx-auto'>
          <h1 className='text-center text-3xl font-bold h-[90px]'>Provicient skills relate in : </h1>
          <div className='grid grid-cols-4 gap-8 px-40 justify-center items-center'>
          <img src={dotnet} className='w-20' alt='' />
          {/* <img src={tailwind} className='w-30 items-center' alt='' /> */}
          <img src={node} className='w-20' alt='' />
          <img src={laravel} className='w-20' alt='' />
          <img src={react} className='w-20' alt='' />
          <img src={tailwind} className='w-40' alt='' />
          <img src={sql} className='w-20' alt='' />
          <img src={redis} className='w-60' alt='' />
          <img src={typescript} className='w-20' alt='' />
          </div>
      </div>
    </div>
  );
};

export default Services;
