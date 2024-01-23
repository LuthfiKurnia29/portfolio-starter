import React from 'react';
import about from '../assets/me.jpg';

const About = () => {
  return (
    <div className='section' id='about'>
      <div className='flex container mx-auto justify-between'>
      <img src={about} alt='' className='rounded-bl-full rounded-tr-full w-72' />
        <div className='flex flex-col'>
          <h1 className='text-3xl font-bold text-center'>About Me</h1>
          <p className='text-center'>
          I hail from Surabaya and hold a diploma in Software Engineering from a vocational high school. I have previously interned at a software house in Surabaya.
          </p>
          <p className='text-center'>
          Now, I am residing in Jakarta to participate in the OJT (On-the-Job Training) program at UT School.
          </p>
        </div>
      </div>
    </div>
    );
};

export default About;
